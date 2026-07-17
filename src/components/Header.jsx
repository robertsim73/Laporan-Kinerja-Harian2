export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-margin_desktop h-16 bg-surface shadow-sm glass-header">
      <div className="flex items-center gap-4">
        <h2 className="font-title-lg text-title-lg font-bold text-primary">Dashboard Karyawan</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-on-surface-variant">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        <div className="h-8 w-[1px] bg-outline-variant"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="font-label-md text-label-md font-bold text-on-surface">Rally Gultom</p>
            <p className="font-label-sm text-[10px] text-outline uppercase tracking-wider">16 juli 2026</p>
          </div>
          <img 
            className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" 
            data-alt="A professional headshot of a smiling Indonesian man in his late 20s wearing a clean white business shirt, set against a soft-focus corporate office background. The lighting is natural and bright, conveying a friendly yet professional demeanor. The image is crisp and follows a modern corporate aesthetic with high-key lighting." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVtAdpAo9J8cNnZovYoinKua5EH162Wj3MVdmyOu9LpkUFYG7Qnr3gIdXzAEu49BrUFhAVw8fYd4Y05SVy4NcWb3m1MefbXyGERuqvv_k90J42t9HZidsQIdhvD2xv-q2eeHIMl1LZB2iyUt7ZFI1S5ZpQxRqStqce29EaZ2A161rONNnzzHrt5tssntqxSmg-rhUCNCc97y8v3zMujmj75GhMRo833xqXbQhSZrwAr3GB-aE9sxTK" 
          />
        </div>
      </div>
    </header>
  )
}
