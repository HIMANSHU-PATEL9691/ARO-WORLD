import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingBag, Users, Settings, Menu, X, ChevronLeft } from "lucide-react";
import arooLogo from "@/assets/aroo-logo.png";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 p-4 border-b">
        <img src={arooLogo} alt="ARO World" className="h-8 w-8" />
        {sidebarOpen && <span className="text-lg font-bold text-gradient">ARO World Admin</span>}
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive(to)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Icon className="h-5 w-5 flex-shrink-0" />
            {sidebarOpen && <span>{label}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-5 w-5 flex-shrink-0" />
          {sidebarOpen && <span>Back to Store</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r bg-card transition-all duration-300 ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-60 bg-card shadow-xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b bg-card flex items-center justify-between px-4 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.innerWidth < 768) setMobileOpen(!mobileOpen);
                else setSidebarOpen(!sidebarOpen);
              }}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <h1 className="text-sm font-semibold">
              {navItems.find((n) => isActive(n.to))?.label || "Admin Panel"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              A
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
