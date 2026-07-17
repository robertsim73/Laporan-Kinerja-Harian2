-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Demo user ID for testing without authentication
-- In production, replace this with actual auth.uid() from Supabase Auth
-- @demo-user-id: 00000000-0000-0000-0000-000000000001

-- Daily reports table
create table if not exists public.daily_reports (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid not null,
  title text not null,
  project_category text not null,
  duration_hours numeric not null default 0,
  description text not null,
  status text not null default 'progress',
  attachment_url text,
  report_date date not null default current_date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for faster queries by user and date
create index if not exists idx_daily_reports_user_date on public.daily_reports(user_id, report_date desc);

-- Enable Row Level Security
alter table public.daily_reports enable row level security;

-- Policy: allow demo user access (for testing without auth)
create policy "Allow demo user full access"
  on public.daily_reports
  for all
  using (user_id = '00000000-0000-0000-0000-000000000001'::uuid)
  with check (user_id = '00000000-0000-0000-0000-000000000001'::uuid);

-- Policy: users can view their own reports (production)
create policy "Users can view own reports"
  on public.daily_reports for select
  using (auth.uid() = user_id);

-- Policy: users can insert their own reports (production)
create policy "Users can insert own reports"
  on public.daily_reports for insert
  with check (auth.uid() = user_id);

-- Policy: users can update their own reports (production)
create policy "Users can update own reports"
  on public.daily_reports for update
  using (auth.uid() = user_id);

-- Policy: users can delete their own reports (production)
create policy "Users can delete own reports"
  on public.daily_reports for delete
  using (auth.uid() = user_id);

-- Storage bucket for report attachments
insert into storage.buckets (id, name, public)
values ('report-attachments', 'report-attachments', false)
on conflict (id) do nothing;

-- Storage policies for demo user
create policy "Allow demo user upload attachments"
  on storage.objects for insert
  with check (
    bucket_id = 'report-attachments' and
    (storage.foldername(name))[1] = '00000000-0000-0000-0000-000000000001'
  );

create policy "Allow demo user view attachments"
  on storage.objects for select
  using (
    bucket_id = 'report-attachments' and
    (storage.foldername(name))[1] = '00000000-0000-0000-0000-000000000001'
  );

create policy "Allow demo user delete attachments"
  on storage.objects for delete
  using (
    bucket_id = 'report-attachments' and
    (storage.foldername(name))[1] = '00000000-0000-0000-0000-000000000001'
  );

-- Storage policies for authenticated users (production)
create policy "Users can upload attachments"
  on storage.objects for insert
  with check (
    bucket_id = 'report-attachments' and
    auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can view own attachments"
  on storage.objects for select
  using (
    bucket_id = 'report-attachments' and
    auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can delete own attachments"
  on storage.objects for delete
  using (
    bucket_id = 'report-attachments' and
    auth.uid()::text = (storage.foldername(name))[1]
  );
