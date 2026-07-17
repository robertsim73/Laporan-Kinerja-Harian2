import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { supabase } from './lib/supabase'
import { useState, useEffect } from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Sidebar />
      <main className="ml-[260px] min-h-screen">
        <Header />
        <div className="p-gutter max-w-container_max_width mx-auto">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-8">
              <ReportForm />
              <StatsSummary />
              <DailyReportsList />
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-gutter">
              <TodoList />
              <CalendarWidget />
              <WeatherWidget />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function ReportForm() {
  const [formData, setFormData] = useState({
    title: '',
    projectCategory: 'Pilih Proyek',
    duration: '',
    description: '',
    status: 'progress',
  })
  const [loading, setLoading] = useState(false)

  const copyYesterday = () => {
    setFormData({
      title: 'Refactor Authentication Logic and Middleware',
      projectCategory: 'PerformFlow UI Upgrade',
      duration: '4.5',
      description: 'Melanjutkan pekerjaan kemarin pada bagian auth middleware. Menambahkan sistem token rotasi dan validasi scope user di level router.',
      status: 'progress',
    })
    alert('Data kemarin berhasil disalin!')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const demoUserId = '00000000-0000-0000-0000-000000000001'

    const { error } = await supabase
      .from('daily_reports')
      .insert([
        {
          title: formData.title,
          project_category: formData.projectCategory,
          duration_hours: parseFloat(formData.duration) || 0,
          description: formData.description,
          status: formData.status,
          report_date: new Date().toISOString().split('T')[0],
          user_id: demoUserId,
        },
      ])

    setLoading(false)

    if (error) {
      alert('Gagal mengirim laporan: ' + error.message)
    } else {
      alert('Laporan berhasil dikirim!')
      setFormData({
        title: '',
        projectCategory: 'Pilih Proyek',
        duration: '',
        description: '',
        status: 'progress',
      })
      window.location.reload()
    }
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl card-elevation overflow-hidden border border-outline-variant/30">
      <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low/30">
        <div>
          <h3 className="font-title-md text-title-md text-on-surface">Input Laporan Harian</h3>
          <p className="font-body-md text-body-md text-outline">Laporkan progres tugas Anda hari ini.</p>
        </div>
        <button 
          className="flex items-center gap-2 px-3 py-1.5 text-primary border border-primary/20 rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all"
          onClick={copyYesterday}
          type="button"
        >
          <span className="material-symbols-outlined text-sm">content_copy</span>
          Salin dari Kemarin
        </button>
      </div>
      <form className="p-6 space-y-stack_md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-stack_md">
          <div className="col-span-2">
            <label className="font-label-md text-label-md text-on-surface block mb-2">Judul Tugas</label>
            <input 
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-bright font-body-md text-body-md" 
              placeholder="Contoh: Implementasi API Dashboard" 
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label className="font-label-md text-label-md text-on-surface block mb-2">Kategori Proyek</label>
            <select 
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-bright font-body-md text-body-md"
              name="projectCategory"
              value={formData.projectCategory}
              onChange={handleChange}
              required
            >
              <option>Pilih Proyek</option>
              <option>PerformFlow UI Upgrade</option>
              <option>Internal Management System</option>
              <option>Customer Portal Refactor</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="font-label-md text-label-md text-on-surface block mb-2">Durasi (Jam)</label>
            <div className="relative">
              <input 
                className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-bright font-body-md text-body-md" 
                placeholder="0.0" 
                step="0.5" 
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-outline font-label-md">jam</span>
            </div>
          </div>
          <div className="col-span-2">
            <label className="font-label-md text-label-md text-on-surface block mb-2">Deskripsi Pekerjaan</label>
            <textarea 
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-bright font-body-md text-body-md" 
              placeholder="Jelaskan detail apa saja yang telah dikerjakan..." 
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label className="font-label-md text-label-md text-on-surface block mb-2">Status</label>
            <div className="flex flex-wrap gap-2">
              <label className="cursor-pointer">
                <input 
                  className="hidden peer" 
                  name="status" 
                  type="radio" 
                  value="pending" 
                  checked={formData.status === 'pending'}
                  onChange={handleChange}
                />
                <div className="px-4 py-2 rounded-full border border-outline-variant bg-surface-bright text-outline peer-checked:bg-tertiary-fixed peer-checked:text-on-tertiary-fixed peer-checked:border-tertiary font-label-md text-label-md transition-all">Pending</div>
              </label>
              <label className="cursor-pointer">
                <input 
                  className="hidden peer" 
                  name="status" 
                  type="radio" 
                  value="progress" 
                  checked={formData.status === 'progress'}
                  onChange={handleChange}
                />
                <div className="px-4 py-2 rounded-full border border-outline-variant bg-surface-bright text-outline peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed peer-checked:border-primary font-label-md text-label-md transition-all">In Progress</div>
              </label>
              <label className="cursor-pointer">
                <input 
                  className="hidden peer" 
                  name="status" 
                  type="radio" 
                  value="done" 
                  checked={formData.status === 'done'}
                  onChange={handleChange}
                />
                <div className="px-4 py-2 rounded-full border border-outline-variant bg-surface-bright text-outline peer-checked:bg-secondary-container peer-checked:text-on-secondary-container peer-checked:border-secondary font-label-md text-label-md transition-all">Done</div>
              </label>
            </div>
          </div>
          <div className="col-span-1">
            <label className="font-label-md text-label-md text-on-surface block mb-2">Lampiran</label>
            <div className="relative group">
              <div className="w-full px-4 py-2.5 rounded-lg border border-dashed border-outline-variant bg-surface-bright flex items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-primary">upload_file</span>
                <span className="font-body-md text-body-md text-outline group-hover:text-primary">Upload File (PDF/JPG)</span>
              </div>
              <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-outline-variant">
          <button className="px-6 py-2.5 rounded-lg border border-outline text-on-surface-variant font-title-md text-title-md hover:bg-surface-container-high transition-all" type="button">
            Simpan Draft
          </button>
          <button 
            className="px-6 py-2.5 rounded-lg bg-secondary text-on-secondary font-title-md text-title-md shadow-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-50" 
            type="submit"
            disabled={loading}
          >
            {loading ? 'Mengirim...' : 'Kirim Laporan'}
          </button>
        </div>
      </form>
    </div>
  )
}

function StatsSummary() {
  const [stats, setStats] = useState({ totalHours: 0, completedTasks: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    const demoUserId = '00000000-0000-0000-0000-000000000001'

    const { data: reports } = await supabase
      .from('daily_reports')
      .select('duration_hours, status')
      .eq('user_id', demoUserId)

    if (reports) {
      const totalHours = reports.reduce((sum, r) => sum + (r.duration_hours || 0), 0)
      const completedTasks = reports.filter(r => r.status === 'done').length
      setStats({ totalHours, completedTasks })
    }
    setLoading(false)
  }

  return (
    <div className="mt-gutter grid grid-cols-3 gap-stack_md">
      <div className="col-span-1 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 card-elevation">
        <p className="font-label-md text-label-md text-outline mb-1">Total Jam Minggu Ini</p>
        <h4 className="font-headline-md text-headline-md text-primary font-bold">{loading ? '...' : `${stats.totalHours.toFixed(1)}h`}</h4>
        <div className="mt-4 h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: `${Math.min((stats.totalHours / 40) * 100, 100)}%` }}></div>
        </div>
      </div>
      <div className="col-span-2 bg-primary p-6 rounded-xl border border-primary/20 card-elevation text-on-primary relative overflow-hidden">
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <p className="font-label-md text-label-md text-primary-fixed opacity-80 mb-1">Performa Bulan Ini</p>
            <h4 className="font-headline-md text-headline-md font-bold">{stats.completedTasks > 0 ? 'Luar Biasa!' : 'Mulai Sekarang'}</h4>
            <p className="mt-2 font-body-md text-body-md text-primary-fixed opacity-90 max-w-xs">
              {stats.completedTasks > 0 
                ? `Anda telah menyelesaikan ${stats.completedTasks} tugas utama lebih awal dari jadwal.`
                : 'Laporkan progres tugas Anda hari ini untuk melihat statistik performa.'}
            </p>
          </div>
          <span className="material-symbols-outlined text-[48px] opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-5 rounded-full"></div>
      </div>
    </div>
  )
}

function DailyReportsList() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    const demoUserId = '00000000-0000-0000-0000-000000000001'

    const { data } = await supabase
      .from('daily_reports')
      .select('*')
      .eq('user_id', demoUserId)
      .order('report_date', { ascending: false })
      .limit(10)

    if (data) setReports(data)
    setLoading(false)
  }

  const getStatusBadge = (status) => {
    const styles = {
      pending: 'bg-error-container text-on-error-container',
      progress: 'bg-primary-container text-on-primary-container',
      done: 'bg-secondary-container text-on-secondary-container',
    }
    const labels = { pending: 'Pending', progress: 'In Progress', done: 'Done' }
    return (
      <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${styles[status] || styles.progress}`}>
        {labels[status] || status}
      </span>
    )
  }

  return (
    <div className="mt-gutter bg-surface-container-lowest rounded-xl card-elevation border border-outline-variant/30 overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between">
        <h3 className="font-title-md text-title-md text-on-surface">Laporan Terbaru</h3>
        <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm">
          {reports.length} Laporan
        </span>
      </div>
      <div className="p-2">
        {loading ? (
          <div className="p-6 text-center text-outline">Memuat laporan...</div>
        ) : reports.length === 0 ? (
          <div className="p-6 text-center text-outline">Belum ada laporan. Buat laporan pertama Anda!</div>
        ) : (
          <div className="space-y-1">
            {reports.map((report) => (
              <div key={report.id} className="flex items-start gap-3 p-4 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="flex-1">
                  <p className="font-body-md text-body-md font-semibold text-on-surface">{report.title}</p>
                  <p className="font-label-sm text-label-sm text-outline">{report.project_category} • {report.duration_hours} jam</p>
                  <p className="font-body-md text-body-md text-outline mt-1 line-clamp-2">{report.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {getStatusBadge(report.status)}
                  <span className="font-label-sm text-label-sm text-outline">
                    {new Date(report.report_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function TodoList() {
  return (
    <div className="bg-surface-container-lowest rounded-xl card-elevation border border-outline-variant/30 overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between">
        <h3 className="font-title-md text-title-md text-on-surface">Daftar Tugas Hari Ini</h3>
        <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm">4 Tugas</span>
      </div>
      <div className="p-2">
        <div className="space-y-1">
          <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-surface-container-low transition-colors group cursor-pointer">
            <div className="mt-1 w-5 h-5 rounded border-2 border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-xs text-white opacity-0 group-hover:opacity-100 font-bold">check</span>
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md font-semibold text-on-surface">API Endpoint Validation</p>
              <p className="font-label-sm text-label-sm text-outline">Internal CRM Project</p>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">High</span>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-surface-container-low transition-colors group cursor-pointer">
            <div className="mt-1 w-5 h-5 rounded border-2 border-secondary bg-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-xs text-on-secondary font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md font-semibold text-outline line-through">Standup Meeting</p>
              <p className="font-label-sm text-label-sm text-outline/50 line-through">09:00 - 09:30 WIB</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-surface-container-low transition-colors group cursor-pointer">
            <div className="mt-1 w-5 h-5 rounded border-2 border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-xs text-white opacity-0 group-hover:opacity-100 font-bold">check</span>
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md font-semibold text-on-surface">Review PR #240</p>
              <p className="font-label-sm text-label-sm text-outline">Frontend Components</p>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Med</span>
          </div>
        </div>
        <button className="w-full mt-2 py-3 border-t border-outline-variant/30 font-label-md text-label-md text-primary hover:bg-primary/5 transition-all">
          Lihat Semua Tugas
        </button>
      </div>
    </div>
  )
}

function CalendarWidget() {
  return (
    <div className="bg-surface-container-lowest rounded-xl card-elevation border border-outline-variant/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-title-md text-title-md text-on-surface">Jadwal Mendatang</h3>
        <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">more_vert</span>
      </div>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-none w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center">
            <p className="font-label-sm text-[10px] text-outline uppercase">Okt</p>
            <p className="font-title-md text-title-md font-bold text-on-surface">24</p>
          </div>
          <div>
            <p className="font-body-md text-body-md font-semibold text-on-surface">Sprint Planning Q4</p>
            <p className="font-label-sm text-label-sm text-outline">14:00 - 15:30 • Zoom Meeting</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-none w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center">
            <p className="font-label-sm text-[10px] text-outline uppercase">Okt</p>
            <p className="font-title-md text-title-md font-bold text-on-surface">26</p>
          </div>
          <div>
            <p className="font-body-md text-body-md font-semibold text-on-surface">Monthly Evaluation</p>
            <p className="font-label-sm text-label-sm text-outline">10:00 - 11:00 • Ruang Rapat A</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function WeatherWidget() {
  return (
    <div className="bg-gradient-to-br from-tertiary-container to-tertiary p-6 rounded-xl card-elevation text-on-tertiary-container">
      <div className="flex items-center justify-between">
        <span className="material-symbols-outlined text-[32px]">light_mode</span>
        <span className="font-headline-md text-headline-md font-bold">28°C</span>
      </div>
      <p className="mt-4 font-title-md text-title-md font-bold text-white">Semangat pagi, Budi!</p>
      <p className="mt-1 font-body-md text-body-md text-white/80 italic">"Fokus pada kemajuan, bukan kesempurnaan."</p>
    </div>
  )
}
