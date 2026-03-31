import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Truck, Shield, Headphones, RotateCcw, Users, Award, Clock, Zap, Phone } from "lucide-react";
import { useProductsQuery, useCategoriesQuery } from "@/lib/query";

const Index = () => {
  const { data: productsData = [] } = useProductsQuery();
  const { data: categoriesData = [] } = useCategoriesQuery();
  const featuredProducts = productsData.filter((p) => p.badge);

  return (
    <div>
      {/* 1. Hero Banner */}
      <HeroBanner />

      {/* 2. Categories */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {categoriesData.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products?category=${cat.id}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border hover:border-primary hover:shadow-md transition-all text-center"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-medium">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="container pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProducts.slice(0, 6).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* 4. Offer Banner */}
      <section className="container pb-12">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Quality Guaranteed</h2>
          <p className="text-lg opacity-90 max-w-md mx-auto mb-8">Advanced RO+UV technology for pure, healthy water. Free installation across India.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-card text-foreground font-semibold px-8 py-3 rounded-xl hover:bg-card/90 transition-all text-base"
          >
            Explore Products <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 5. Stats */}
      <section className="container py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">10K+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">5 Yrs</h3>
            <p className="text-muted-foreground">Warranty</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">48 Hrs</h3>
            <p className="text-muted-foreground">Installation</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
            <p className="text-muted-foreground">Support</p>
          </motion.div>
        </div>
      </section>

      {/* 6. Trust Badges */}
      <section className="container py-20">
        <h2 className="text-2xl font-bold mb-12 text-center">Why Choose ARO World?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Free Delivery", desc: "Nationwide delivery within 3 days" },
            { icon: Shield, title: "5 Year Warranty", desc: "Comprehensive protection guaranteed" },
            { icon: Headphones, title: "24/7 Support", desc: "Expert assistance anytime" },
            { icon: RotateCcw, title: "Easy Returns", desc: "Hassle-free 30-day policy" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div 
              key={title} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-all group hover:bg-gradient-to-r hover:from-primary/5"
            >
              <Icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Latest Products */}
      <section className="container py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold">Latest Products</h2>
          <Link to="/products" className="text-primary font-medium flex items-center gap-2 hover:underline">
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* 8. CTA Section - Ready for Pure Water */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 my-20">
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-muted-foreground bg-clip-text text-transparent leading-tight"
            >
              Ready for Pure Water?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl opacity-95 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Transform your home with advanced RO+UV purification. Crystal clear, mineral-rich water for your family's health.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
            >
              <Link
                to="/products"
                className="px-8 sm:px-12 py-4 sm:py-5 bg-white/95 backdrop-blur-sm text-primary font-bold rounded-3xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg shadow-xl border-2 border-white/20"
              >
                Explore Products <ArrowRight className="h-5 w-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 sm:px-12 py-4 sm:py-5 bg-transparent/50 backdrop-blur-sm border-2 border-white/80 text-white font-bold rounded-3xl hover:bg-white/20 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
              >
                Get Free Quote <Phone className="h-5 w-5 inline ml-2" />
              </Link>
            </motion.div>
            {/* Floating badges */}
            <div className="flex flex-wrap gap-4 justify-center opacity-90">
              <motion.span 
                animate={{ y: [0, -4, 0] }} 
                transition={{ duration: 3, repeat: Infinity }} 
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                🚚 Free Installation
              </motion.span>
              <motion.span 
                animate={{ y: [0, -6, 0] }} 
                transition={{ duration: 4, repeat: Infinity }} 
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                🛡️ 5 Year Warranty
              </motion.span>
              <motion.span 
                animate={{ y: [0, -3, 0] }} 
                transition={{ duration: 3.5, repeat: Infinity }} 
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                ⚡ 24/7 Support
              </motion.span>
            </div>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-24 h-24 bg-primary/30 rounded-full blur-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
      </section>
    </div>
  );
};

export default Index;

