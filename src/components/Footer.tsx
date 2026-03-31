import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gradient mb-4">ARO World</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            India's trusted water purifier brand. Pure water, healthy life for every home.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">All Products</Link></li>
            <li><Link to="/products?category=ro" className="hover:opacity-100 transition-opacity">RO Purifiers</Link></li>
            <li><Link to="/products?category=uv" className="hover:opacity-100 transition-opacity">UV Purifiers</Link></li>
            <li><Link to="/products?category=alkaline" className="hover:opacity-100 transition-opacity">Alkaline</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Installation Guide</li>
            <li>AMC Plans</li>
            <li>Service Request</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 1800-123-ARO World</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@ARO World.in</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 mt-8 pt-6 text-center text-sm opacity-50">
        © 2026 ARO World Water Purifiers. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
