import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Droplets, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-purifier.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🎉 Upto 40% Off — Limited Time
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Pure Water,{" "}
              <span className="text-gradient">Healthy Life</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Advanced RO+UV+UF water purifiers with TDS control. 
              100% safe, mineral-rich drinking water for your family.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild size="lg" className="gap-2">
                <Link to="/products">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products?category=alkaline">Explore Alkaline</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: Shield, text: "5 Year Warranty" },
                { icon: Droplets, text: "100% Pure Water" },
                { icon: Zap, text: "Energy Efficient" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="ARO World Water Purifier"
              width={1920}
              height={1080}
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
