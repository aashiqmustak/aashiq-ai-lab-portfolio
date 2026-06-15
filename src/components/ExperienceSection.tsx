import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
       
    {
      title: "SDE Intern",
      company: "Voxloom",
      period: "2025 - Present",
      description: "Product Development on Voice Agent , Automated Call Services",
      color: "muted-foreground",
      logo: "/logos/voxloom.svg"
    },
    
    {
      title: "AI & Backend Developer",
      company: "Freelance - Own Firm | Zarnex.ai",
      period: "2023 - Present",
      description: "Developing ML models, LLM applications, and backend systems for various clients. Specializing in healthcare AI and automation solutions.",
      color: "muted-foreground",
      logo: "/logos/zar.png"
    }
   
      
    
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          {/* Available for work indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Versatile Knowledge</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Experience</h2>
          
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 border-border hover:shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        {exp.logo && (
                          <img src={exp.logo} alt={exp.company} className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border border-muted flex-shrink-0" />
                        )}
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-lg sm:text-xl text-foreground mb-1">{exp.title}</CardTitle>
                          <p className={`text-sm sm:text-base text-${exp.color} font-semibold`}>{exp.company}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs sm:text-sm w-fit sm:w-auto">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{exp.description}</p>
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
