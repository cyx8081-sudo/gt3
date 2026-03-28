import { Outlet, Link, useLocation } from "react-router-dom";
import { Search, Menu } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 hover:bg-surface-container rounded-full transition-colors">
              <Menu className="w-5 h-5 text-on-surface" />
            </button>
            <Link to="/" className="font-display font-black italic text-xl tracking-wider">
              GT3<span className="text-primary">KINETIC</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-primary ${isHome ? 'text-primary' : 'text-on-surface-variant'}`}>首页</Link>
            <Link to="/cars" className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-primary ${location.pathname.startsWith('/cars') ? 'text-primary' : 'text-on-surface-variant'}`}>车辆</Link>
          </nav>

          <div className="flex items-center">
            <Link to="/search" className="p-2 hover:bg-surface-container rounded-full transition-colors">
              <Search className="w-5 h-5 text-on-surface" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline/20 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-black italic text-2xl tracking-wider opacity-50">
            GT3<span className="text-primary">KINETIC</span>
          </div>
          <div className="flex gap-6 text-sm text-on-surface-variant uppercase tracking-widest">
            <Link to="#" className="hover:text-primary transition-colors">隐私政策</Link>
            <Link to="#" className="hover:text-primary transition-colors">服务条款</Link>
            <Link to="#" className="hover:text-primary transition-colors">联系我们</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
