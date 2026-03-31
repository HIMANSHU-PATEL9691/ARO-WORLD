import { motion } from "framer-motion";
import { Zap, Shield, Clock, Truck, Headphones, Wrench, Settings, RefreshCw, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Instant Installation",
      description: "Free expert installation within 48 hours anywhere in India",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "5 Year Warranty",
      description: "Comprehensive warranty with free replacement parts",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service & emergency assistance",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Fast, tracked delivery to your doorstep anywhere",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "AMC Plans",
      description: "Affordable annual maintenance with priority service",
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: Headphones,
      title: "Live Chat",
      description: "Instant help via phone, email, and live chat support",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored purification systems for homes & offices",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: RefreshCw,
      title: "Easy Upgrades",
      description: "Seamless upgrade to latest technology models",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50/50">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-secondary via-blue-50 to-white">
        <div className="container text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-foreground to-primary/80 bg-clip-text text-transparent mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Complete water purification lifecycle support from installation to maintenance
          </motion.p>
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-primary/10 to-blue-100 rounded-full blur-3xl" />
      </section>

      <div className="container py-20 px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border border-border/50 rounded-3xl p-10 md:p-12 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:border-primary/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <service.icon className="h-20 w-20 text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300 mx-auto mb-6 drop-shadow-lg" />
              <h3 className="text-2xl font-black mb-6 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent">
                {service.title}
              </h3>
              <p className="text-lg text-muted-foreground text-center leading-relaxed group-hover:text-foreground/90 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Banner */}
        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-3xl p-16 md:p-24 text-center mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              End-to-End Water Care
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              From expert installation to lifetime support, we ensure your purifier works perfectly every day
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2">48hr Setup</h4>
                <p className="text-muted-foreground">From order to pure water</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-bold mb-2">AMC Available</h4>
                <p className="text-muted-foreground">Peace of mind maintenance</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">📞</div>
                <h4 className="text-xl font-bold mb-2">24/7 Helpdesk</h4>
                <p className="text-muted-foreground">Always ready to assist</p>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-primary to-accent text-foreground font-bold text-lg rounded-3xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl">
              Get Started Today <RefreshCw className="h-6 w-6 animate-spin-slow" />
            </Link>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section className="text-center pt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Need Service?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white shadow-2xl border-2 border-primary/20 text-primary font-bold rounded-3xl hover:bg-primary/5 hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg">
            Contact Our Experts <Phone className="h-5 w-5" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;

