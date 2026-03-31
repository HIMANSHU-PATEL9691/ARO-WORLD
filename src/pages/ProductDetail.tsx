import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Check, Truck, Shield, RotateCcw, Heart, Share2, Phone, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useProductsQuery } from "@/lib/query";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: productsData = [] } = useProductsQuery();
  const product = productsData.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground text-lg">Product not found</p>
        <Link to="/products" className="text-primary hover:underline text-sm mt-2 inline-block">Back to Products</Link>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const related = productsData.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const images = [product.image, product.image, product.image, product.image];

  const specs = [
    { label: "Brand", value: "ARO World" },
    { label: "Model", value: product.name.split(" ").slice(1, 3).join(" ") },
    { label: "Category", value: product.category.toUpperCase() },
    { label: "Capacity", value: product.features.find(f => f.includes("L")) || "Standard" },
    { label: "Technology", value: product.features[0] },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container py-3">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground flex-wrap">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/products?category=${product.category}`} className="hover:text-primary">{product.category.toUpperCase()}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground line-clamp-1">{product.name}</span>
        </nav>
      </div>

      <div className="container pb-12">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Image Gallery */}
          <div className="lg:col-span-5">
            <div className="flex gap-3 sticky top-20">
              <div className="hidden sm:flex flex-col gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setSelectedImage(i)}
                    onClick={() => setSelectedImage(i)}
                    className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${
                      selectedImage === i ? "border-primary shadow-md" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                className="flex-1 bg-card border rounded-2xl overflow-hidden relative group"
              >
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="p-2 bg-card/80 backdrop-blur rounded-full hover:bg-card transition-colors shadow-sm">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 bg-card/80 backdrop-blur rounded-full hover:bg-card transition-colors shadow-sm">
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </motion.div>
            </div>
            {/* Mobile thumbnails */}
            <div className="flex sm:hidden gap-2 mt-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-14 h-14 rounded-lg border-2 overflow-hidden flex-shrink-0 transition-all ${
                    selectedImage === i ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-xs text-primary font-medium mb-1">Visit the ARO World Store</p>
              <h1 className="text-xl md:text-2xl font-bold leading-tight">{product.name}</h1>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-0.5 bg-success text-success-foreground text-xs font-bold px-2 py-0.5 rounded">
                  {product.rating} <Star className="h-3 w-3 fill-current" />
                </div>
                <span className="text-sm text-primary font-medium">{product.reviews} Ratings</span>
              </div>

              <div className="border-t border-b py-3 mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-destructive font-semibold">-{discount}%</span>
                  <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  M.R.P.: <span className="line-through">₹{product.originalPrice.toLocaleString()}</span>
                </p>
                <p className="text-xs text-success font-medium mt-1">Inclusive of all taxes</p>
              </div>

              <div className="mt-3 p-3 bg-secondary rounded-lg">
                <p className="text-xs font-medium">No cost EMI available</p>
                <p className="text-xs text-muted-foreground">EMI starting ₹{Math.round(product.price / 12).toLocaleString()}/month</p>
              </div>

              <div className="mt-5">
                <h3 className="font-semibold text-sm mb-2">About this item</h3>
                <ul className="space-y-1.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-sm mb-3">Technical Details</h3>
                <div className="border rounded-lg overflow-hidden">
                  {specs.map(({ label, value }, i) => (
                    <div key={label} className={`flex text-sm ${i % 2 === 0 ? "bg-secondary/50" : "bg-card"}`}>
                      <span className="w-1/3 p-2.5 font-medium text-muted-foreground border-r">{label}</span>
                      <span className="flex-1 p-2.5">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Buy Box */}
          <div className="lg:col-span-3">
            <div className="bg-card border rounded-xl p-5 sticky top-20 space-y-3">
              <div className="text-2xl font-bold">₹{product.price.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">FREE delivery <span className="font-semibold text-foreground">Tomorrow</span></p>
              <p className="text-xs text-muted-foreground">Or fastest delivery <span className="font-semibold text-foreground">Today</span></p>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="flex-1 px-3 py-2 text-xs border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  maxLength={6}
                />
                <button className="text-xs text-primary font-medium hover:underline px-4 py-2 border rounded-lg bg-card">Check</button>
              </div>

              <p className={`text-sm font-semibold ${product.stock > 0 ? "text-success" : "text-destructive"}`}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>

              <Button
                variant="outline"
                className="w-full gap-2 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                size="lg"
                asChild
              >
                <Link to="/contact">
                  <Phone className="h-4 w-4" />
                  Inquire Now
                </Link>
              </Button>

              <Button className="w-full gap-2" size="lg" variant="secondary">
                <Mail className="h-4 w-4" />
                Request Quote
              </Button>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t">
                {[
                  { icon: Truck, text: "Free Delivery" },
                  { icon: Shield, text: "5 Yr Warranty" },
                  { icon: RotateCcw, text: "15-Day Return" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex flex-col items-center gap-1 text-center">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-[10px] font-medium leading-tight">{text}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 text-xs text-muted-foreground space-y-1">
                <p>Sold by: <span className="text-primary font-medium">ARO World Official</span></p>
                <p>Fulfilled by: <span className="font-medium text-foreground">ARO World</span></p>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold mb-6">Customers who bought this also bought</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
