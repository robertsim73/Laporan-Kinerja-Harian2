export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[260px] flex flex-col p-4 z-40 bg-surface-container border-r border-outline-variant">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined text-title-lg" style={{ fontVariationSettings: "'FILL' 1" }}>flowsheet</span>
        </div>
        <div>
          <h1 className="font-title-lg text-title-lg font-black text-primary">Enterprise HR</h1>
          <p className="font-label-md text-label-md text-outline">Management Portal</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 sidebar-active rounded-lg transition-all duration-200 translate-x-1" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="font-label-md text-label-md">Beranda</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all duration-200" href="#">
          <span className="material-symbols-outlined">history</span>
          <span className="font-label-md text-label-md">Riwayat</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all duration-200" href="#">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-md text-label-md">Kalender</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all duration-200" href="#">
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-label-md text-label-md">Analytics</span>
        </a>
      </nav>
      <div className="mt-auto pt-6 border-t border-outline-variant space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all duration-200" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all duration-200" href="#">
          <span className="material-symbols-outlined">help</span>
          <span className="font-label-md text-label-md">Support</span>
        </a>
      </div>
    </aside>
  )
}
