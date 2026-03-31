import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={arooLogo} alt="ARO World" className="h-10 w-10" />
          <span className="text-xl font-bold text-gradient hidden sm:inline">ARO World</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/products" className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Search className="h-5 w-5 text-muted-foreground" />
          </Link>
          <Link to="/contact" className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Phone className="h-5 w-5 text-muted-foreground" />
          </Link>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors hidden md:flex">
            <User className="h-5 w-5 text-muted-foreground" />
          </button>
          <button
            className="p-2 rounded-lg hover:bg-secondary transition-colors md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-card overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2 px-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
