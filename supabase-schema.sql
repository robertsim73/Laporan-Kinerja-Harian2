-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Daily reports table
create table if not exists public.daily_reports (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade,
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

-- Policy: users can view their own reports
create policy "Users can view own reports"
  on public.daily_reports for select
  using (auth.uid() = user_id);

-- Policy: users can insert their own reports
create policy "Users can insert own reports"
  on public.daily_reports for insert
  with check (auth.uid() = user_id);

-- Policy: users can update their own reports
create policy "Users can update own reports"
  on public.daily_reports for update
  using (auth.uid() = user_id);

-- Policy: users can delete their own reports
create policy "Users can delete own reports"
  on public.daily_reports for delete
  using (auth.uid() = user_id);

-- Storage bucket for report attachments
insert into storage.buckets (id, name, public)
values ('report-attachments', 'report-attachments', false)
on conflict (id) do nothing;

-- Storage policies
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
