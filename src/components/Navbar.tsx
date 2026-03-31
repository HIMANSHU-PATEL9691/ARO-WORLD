import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X, User, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arooLogo from "@/assets/aroo-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={arooLogo} alt="ARO World" className="h-10 w-10" />
          <span className="text-xl font-bold text-gradient hidden sm:inline">ARO World</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-all group">
            <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            <span className="sr-only">Search</span>
          </button>
          <Link to="/contact" className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-all group">
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            <span className="sr-only">Contact</span>
          </Link>
          <button className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-all group hidden lg:flex">
            <User className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            <span className="sr-only">Account</span>
          </button>
          <button
            className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-all md:hidden group"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden bg-black/50" onClick={() => setMobileOpen(false)}>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-dvh w-80 bg-background border-l shadow-2xl backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 font-bold text-lg" onClick={() => setMobileOpen(false)}>
                  <img src={arooLogo} alt="ARO World" className="h-10 w-10" />
                  <span>ARO World</span>
                </Link>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setMobileOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="p-6 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-xl text-lg font-medium transition-colors ${
                        isActive ? "bg-muted text-primary" : "hover:bg-muted"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
