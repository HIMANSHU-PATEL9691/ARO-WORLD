import { motion } from "framer-motion";
import { Users, Award, Clock, Shield, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center max-w-4xl mx-auto px-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight mb-6">
              About ARO World
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Pioneers in Premium Water Purification Technology
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,.3),rgba(255,255,255,0))] opacity-50" />
      </section>

      <div className="container py-20 px-4">
        {/* Story */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-5xl mx-auto text-center mb-24">
          <motion.h2 whileInView={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-8">
            Our Story
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div>
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                Founded in 2018, ARO World has been dedicated to revolutionizing water purification in India. 
                With cutting-edge RO+UV+UF technology, we deliver mineral-rich, safe drinking water to thousands of families daily.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-12">
                Our state-of-the-art manufacturing facility in Hyderabad produces world-class purifiers 
                certified by BIS and backed by 5-year comprehensive warranty.
              </p>
            <div className="flex gap-4 justify-center">
              <Link to="/products" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:shadow-xl transition-all">
                Our Products
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all">
                Contact Us
              </Link>
            </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              className="relative"
            >
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <h3 className="text-2xl font-bold text-foreground">Made in India</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section className="mb-24" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {[
              { year: '2018', title: 'Founded', desc: 'ARO World established with mission to purify India.' },
              { year: '2020', title: 'First Factory', desc: 'Hyderabad manufacturing plant operational.' },
              { year: '2022', title: '10K Milestone', desc: '10,000+ units installed nationwide.' },
              { year: '2024', title: 'Premium Line', desc: 'Alkaline & Smart purifiers launched.' }
            ].map((milestone, i) => (
              <motion.div 
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex items-center mb-20 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1 max-w-md">
                  <h3 className="text-2xl font-bold mb-3">{milestone.year}</h3>
                  <h4 className="text-xl font-semibold mb-4">{milestone.title}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">{milestone.desc}</p>
                </div>
                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center ml-8 mr-8 md:ml-12 md:mr-12 font-bold text-2xl">
                  {i + 1}
                </div>
              </motion.div>
            ))}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 to-transparent" />
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section className="text-center py-24 bg-gradient-to-r from-primary/5 to-secondary/10 rounded-3xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10K+</h3>
              <p className="text-xl text-muted-foreground">Happy Families</p>
            </div>
            <div>
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5 Years</h3>
              <p className="text-xl text-muted-foreground">Warranty</p>
            </div>
            <div>
              <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">48 Hrs</h3>
              <p className="text-xl text-muted-foreground">Installation</p>
            </div>
            <div>
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">India-wide</h3>
              <p className="text-xl text-muted-foreground">Service Network</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join 10,000+ Satisfied Customers</h2>
          <Link to="/products" className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-primary to-accent text-foreground font-bold text-lg rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
            Get Your Purifier Today <ArrowRight className="h-6 w-6 group-hover:translate-x-2" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default About;

