import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  features: string[];
  badge?: string;
}

export const categories = [
  { id: "ro", name: "RO Purifiers", icon: "💧" },
  { id: "uv", name: "UV Purifiers", icon: "☀️" },
  { id: "alkaline", name: "Alkaline", icon: "⚗️" },
  { id: "portable", name: "Portable", icon: "🧴" },
  { id: "commercial", name: "Commercial", icon: "🏢" },
  { id: "accessories", name: "Accessories", icon: "🔧" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "ARO World Pulse Pro 12L RO+UV+UF",
    price: 14999,
    originalPrice: 22999,
    description: "Powerful water purifier with RO+UV+UF technology. 12-litre capacity, fully automatic with TDS controller. Perfect for home use with borewell, tanker, or municipal water.",
    image: product1,
    category: "ro",
    stock: 15,
    rating: 4.5,
    reviews: 234,
    features: ["RO+UV+UF Filtration", "12L Storage", "TDS Controller", "Auto Shut-Off", "LED Indicators"],
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "ARO World AquaPure Compact 8L",
    price: 9999,
    originalPrice: 15999,
    description: "Compact countertop water purifier ideal for small kitchens. Advanced RO technology with mineral retention for healthy drinking water.",
    image: product2,
    category: "ro",
    stock: 22,
    rating: 4.3,
    reviews: 189,
    features: ["RO Filtration", "8L Storage", "Mineral Retention", "Compact Design", "Low Maintenance"],
  },
  {
    id: "3",
    name: "ARO World CrystalClear 15L Alkaline",
    price: 18999,
    originalPrice: 27999,
    description: "Premium alkaline water purifier with transparent tank design. RO+UV+Alkaline filtration for the purest, healthiest water.",
    image: product3,
    category: "alkaline",
    stock: 8,
    rating: 4.7,
    reviews: 156,
    features: ["Alkaline Technology", "15L Capacity", "Transparent Tank", "7-Stage Purification", "Copper Infusion"],
    badge: "Premium",
  },
  {
    id: "4",
    name: "ARO World WallMount Elite UV",
    price: 12499,
    originalPrice: 18999,
    description: "Sleek wall-mounted UV water purifier with smart digital display. Space-saving design with powerful purification.",
    image: product4,
    category: "uv",
    stock: 18,
    rating: 4.4,
    reviews: 98,
    features: ["UV Purification", "Wall Mounted", "Digital Display", "Smart Alerts", "Energy Efficient"],
    badge: "New",
  },
  {
    id: "5",
    name: "ARO World UnderSink Pro RO",
    price: 24999,
    originalPrice: 34999,
    description: "Professional under-sink RO system with stainless steel components. Hidden installation for a clean kitchen look.",
    image: product5,
    category: "commercial",
    stock: 5,
    rating: 4.8,
    reviews: 67,
    features: ["Under-Sink Install", "Stainless Steel", "High Flow Rate", "5-Year Warranty", "Professional Grade"],
    badge: "Pro",
  },
  {
    id: "6",
    name: "ARO World HydroGo Portable Bottle",
    price: 2999,
    originalPrice: 4999,
    description: "Portable water purifier bottle for on-the-go hydration. Built-in UV-C purification for safe drinking anywhere.",
    image: product6,
    category: "portable",
    stock: 50,
    rating: 4.2,
    reviews: 312,
    features: ["UV-C Purification", "600ml Capacity", "USB Rechargeable", "BPA Free", "Travel Friendly"],
  },
];
