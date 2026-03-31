import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Thank you! We\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', city: '', message: '' });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero */}
      <motion.section 
        className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="container relative z-10 text-center">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent mb-6 drop-shadow-2xl"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Get personalized water purification solutions. Our experts are ready to help.
          </motion.p>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </motion.section>

      <div className="container py-20 -mt-12 md:-mt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:sticky lg:top-32 space-y-8">
            <motion.h2 whileInView={{ scale: 1.05 }} className="text-3xl font-bold mb-2">Let's Talk Water</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Call, email, or visit. We're here to answer your questions and provide solutions.
            </motion.p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-primary/20 bg-gradient-to-r from-background to-muted/10">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all mb-4 shadow-lg">
                    <Phone className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                  <CardTitle className="text-2xl font-black flex items-center gap-3 group-hover:text-primary transition-colors">
                    Call Us Anytime
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">+91 98765 43210</p>
                  <p className="text-muted-foreground">Mon-Sun 8AM - 10PM</p>
                  <Button variant="ghost" className="mt-4 hover:bg-primary/10 group-hover:bg-primary/20 transition-all w-full">
                    Call Now <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-primary/20 bg-gradient-to-r from-background to-muted/10">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all mb-4 shadow-lg">
                    <Mail className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                  <CardTitle className="text-2xl font-black flex items-center gap-3 group-hover:text-primary transition-colors">
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary mb-1">hello@ARO World.in</p>
                  <p className="text-muted-foreground mb-4">Response within 2 hours</p>
                  <Button variant="ghost" className="mt-4 hover:bg-primary/10 group-hover:bg-primary/20 transition-all w-full">
                    Send Email <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-primary/20 bg-gradient-to-r from-background to-muted/10">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all mb-4 shadow-lg">
                    <MapPin className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                  <CardTitle className="text-2xl font-bold flex items-center gap-3 group-hover:text-primary transition-colors">
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">ARO World Corporate Office</p>
                  <p className="text-muted-foreground mb-4">123 Pure Water Street<br/>Hitech City, Hyderabad<br/>Telangana 500081</p>
                  <Button variant="ghost" className="w-full mt-4 hover:bg-primary/10">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white/80 to-muted/30 backdrop-blur-xl">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-3xl font-black bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent mb-2">
                  Send Message
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Fill the form. We'll respond within hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-3 block text-foreground">Full Name</label>
                      <Input 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-14 text-lg border-2 border-border/50 focus:border-primary/70 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-3 block text-foreground">Phone</label>
                      <Input 
                        type="tel"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-14 text-lg border-2 border-border/50 focus:border-primary/70 bg-white/50 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-14 text-lg border-2 border-border/50 focus:border-primary/70 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">City/Area</label>
                    <Input 
                      placeholder="Your location"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="h-14 text-lg border-2 border-border/50 focus:border-primary/70 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your water needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-[150px] text-lg border-2 border-border/50 focus:border-primary/70 bg-white/50 backdrop-blur-sm resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:shadow-2xl hover:scale-[1.02] transition-all font-bold shadow-xl border-0 text-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Send className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-2xl font-black">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-transparent rounded-b-2xl flex items-end p-8 text-white">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">ARO World Hyderabad</h3>
                      <p className="text-lg mb-4">123 Pure Water Street<br/>Hitech City<br/>Hyderabad, Telangana 500081</p>
                      <div className="flex gap-4">
                        <Button variant="secondary" size="sm" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                          Directions
                        </Button>
                        <Button variant="secondary" size="sm" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                          Street View
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-400 to-blue-400 rounded-lg shadow-2xl animate-pulse [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,transparent_30%,black)]" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl animate-pulse" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

