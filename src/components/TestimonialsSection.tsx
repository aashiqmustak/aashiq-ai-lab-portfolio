import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const stats = [
    { number: "11+", label: "Happy clients" },
    { number: "8+", label: "Projects" },
    { number: "5.0", label: "Average Rating" },
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Working with him was a breeze. He took our scattered ideas and turned them into a cohesive and stunning AI solution. Highly recommended!",
      author: "Tech Lead",
      company: "Startup Client",
    },
    {
      rating: 4,
      text: "The professionalism and technical expertise Mohammed brought to our project was exceptional. Great communication throughout.",
      author: "Project Manager",
      company: "Enterprise Client",
    }
  ];

  // 🔧 Add scroll functions
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left side - Stats */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Happy Clients</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Clients Prefer Me !!!</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center lg:text-left">Trusted by 5+ happy clients</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm text-center p-4 sm:p-6 border-border">
                    <CardContent className="p-0">
                      <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-foreground">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 text-sm sm:text-base"
              >
                See All Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="rounded-full px-6 sm:px-8 border-foreground text-foreground hover:bg-foreground hover:text-background text-sm sm:text-base"
              >
                Contact Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Testimonials List */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.95,
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 space-y-3 sm:space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < testimonial.rating ? "text-[#FFD700]" : "text-border"
                          }`}
                          fill={i < testimonial.rating ? "#FFD700" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-foreground">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
