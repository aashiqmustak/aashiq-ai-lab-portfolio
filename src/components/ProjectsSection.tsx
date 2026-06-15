import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export const ProjectsSection = () => {
  const getTechUrl = (tech: string): string => {
    const techUrls: { [key: string]: string } = {
      // AI/ML Technologies
      "LangChain": "https://www.langchain.com/",
      "LangGraph": "https://langchain-ai.github.io/langgraph/",
      "LLM": "https://en.wikipedia.org/wiki/Large_language_model",
      "Fine Tuning": "https://openai.com/blog/fine-tuning/",
      "MLOps": "https://mlops.community/",
      "TensorFlow": "https://www.tensorflow.org/",
      "PyTorch": "https://pytorch.org/",
      "Deep Learning": "https://en.wikipedia.org/wiki/Deep_learning",
      "Machine Learning": "https://en.wikipedia.org/wiki/Machine_learning",
      "NLP": "https://en.wikipedia.org/wiki/Natural_language_processing",
      "Computer Vision": "https://en.wikipedia.org/wiki/Computer_vision",
      "Genomics": "https://en.wikipedia.org/wiki/Genomics",
      
      // Programming Languages & Frameworks
      "Python": "https://www.python.org/",
      "Flask": "https://flask.palletsprojects.com/",
      "React.js": "https://reactjs.org/",
      "Node.js": "https://nodejs.org/",
      "Express.js": "https://expressjs.com/",
      
      // Databases & Storage
      "MongoDB": "https://www.mongodb.com/",
      
      // APIs & Services
      "Mapbox": "https://www.mapbox.com/",
      "OpenStreetMap": "https://www.openstreetmap.org/",
      "API Integration": "https://en.wikipedia.org/wiki/API",
      
      // Specialized Technologies
      "AI Agents": "https://en.wikipedia.org/wiki/Intelligent_agent",
      "Orchestration": "https://en.wikipedia.org/wiki/Orchestration_(computing)",
      "Healthcare AI": "https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare",
      "Medicine": "https://en.wikipedia.org/wiki/Medicine",
      "Data Handling": "https://en.wikipedia.org/wiki/Data_processing",
      "Geolocation": "https://en.wikipedia.org/wiki/Geolocation",
      "Timetable Algorithms": "https://en.wikipedia.org/wiki/Scheduling_(computing)",
    };
    
    return techUrls[tech] || `https://www.google.com/search?q=${encodeURIComponent(tech)}`;
  };

  const projects = [
    
    
    {
      title: "Smart Insurance Agent",
      description:
        "Winner 2026-Built an insurance agent with autonomous voice services that fetches and gives users , the personalised scheme of insurances from providers",
      tech: [
        "Flutter",
        "Python",
        "Litestar",
        "Twilio",
        "LLM",
        "RAG"
      ],
      featured: true,
      award: "National GenAI Hackathon ",
      image: "/logos/smart.jpeg",
    },
    {
      title: "WhisprNet.ai",
      description:
        "An intelligent AI workforce system for cross-department automation. Streamlines HR, IT, and Finance operations through advanced AI agents.",
      tech: [
        "LangChain",
        "LangGraph",
        "Python",
        "Flask",
        "AI Agents",
        "Orchestration",
        "LLM",
        "Fine Tuning",
        "MLOps",
      ],
      featured: true,
      award: "Production",
      image: "/logos/whis.png",
    },
    {
      title: "Doc Nova",
      description:
        "🏆 Hackmasters '23 Winner - AI-powered healthcare platform that predicts diseases and serves as a personalized medical assistant.",
      tech: [
        "TensorFlow",
        "NLP",
        "Healthcare AI",
        "Python",
        "Deep Learning",
        "PyTorch",
        "Medicine",
        "Data Handling",
      ],
      featured: true,
      award: "Hackmasters '23 Winner",
      image: "/logos/doc.png",
    },
    {
      title: "Pediatrics Genome ML",
      description:
        "Personalized dosage recommendation system based on genome sequencing data. Ensuring safe medication for children.",
      tech: ["Machine Learning", "Genomics", "PyTorch", "Medicine", "Data Handling"],
      image: "/logos/child.png",
      award: "Personal",
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      }
    }
  };

  const badgeVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
      }
    }
  };

  const techTagVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring" as const,
        stiffness: 300,
      }
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Recent Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Projects <ArrowRight className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-2 transform -rotate-45" />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of some of my recent AI-powered applications
          </p>
        </motion.div>

        {/* Project Cards Stack */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              whileHover={{ 
                y: -4,
                x: 10,
                transition: { type: "spring" as const, stiffness: 300, damping: 20 }
              }}
              className="cursor-pointer"
              onClick={() => {
                if (project.title === "WhisprNet.ai") {
                  window.open("https://whisprnet.ai/", "_blank");
                }
              }}
              style={{
                zIndex: projects.length - index,
              }}
            >
              <Card
                className={`group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 ? "border-2 border-primary/20" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    className={`w-full lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none relative overflow-hidden ${
                      index === 0 ? "aspect-[16/10] lg:aspect-square" : "aspect-video lg:aspect-square"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>

                  <div className="w-full lg:w-2/3 p-4 sm:p-6">
                    <CardHeader className="p-0 pb-3 sm:pb-4">
                      <div className="flex justify-between items-start">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring" as const, stiffness: 300 }}
                        >
                          <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </motion.div>
                        <motion.div
                          whileHover={{ 
                            x: 5,
                            rotate: 45,
                            scale: 1.1
                          }}
                          transition={{ type: "spring" as const, stiffness: 400 }}
                        >
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>
                      </div>
                      {project.award && (
                        <motion.div
                          variants={badgeVariants}
                          whileHover="hover"
                        >
                          <Badge className="w-fit bg-yellow-500/10 text-yellow-600 border-yellow-500/20 cursor-pointer text-xs sm:text-sm">
                            {project.award}
                          </Badge>
                        </motion.div>
                      )}
                    </CardHeader>
                    <CardContent className="p-0 space-y-3 sm:space-y-4">
                      <motion.p 
                        className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                        whileHover={{ color: "hsl(var(--foreground))" }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.a
                            key={tech}
                            href={getTechUrl(tech)}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={techTagVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: techIndex * 0.1,
                              type: "spring" as const,
                              stiffness: 300 
                            }}
                            className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs sm:text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </motion.a>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Freelancing Contributions Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Freelancing Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Freelance Works <ArrowRight className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-2 transform -rotate-45" />
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Independent solutions delivered for real-world clients and startups
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Street Resolver */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ 
              y: -4,
              x: 10,
              transition: { type: "spring" as const, stiffness: 300, damping: 20 }
            }}
            className="cursor-pointer"
            style={{ zIndex: 2 }}
          >
            <Card className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row">
                <motion.div 
                  className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/logos/street.png"
                    alt="Street Resolver"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
                <div className="w-full lg:w-2/3 p-4 sm:p-6">
                  <CardHeader className="p-0 pb-3 sm:pb-4">
                    <div className="flex justify-between items-start">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring" as const, stiffness: 300 }}
                      >
                        <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">Street Resolver</CardTitle>
                      </motion.div>
                      <motion.div
                        whileHover={{ 
                          x: 5,
                          rotate: 45,
                          scale: 1.1
                        }}
                        transition={{ type: "spring" as const, stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </div>
                    <motion.div
                      variants={badgeVariants}
                      whileHover="hover"
                    >
                      <Badge className="w-fit bg-blue-500/10 text-blue-600 border-blue-500/20 cursor-pointer text-xs sm:text-sm">
                        A Final Year project
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3 sm:space-y-4">
                    <motion.p 
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      transition={{ duration: 0.3 }}
                    >
                      A smart system that resolves street-level addresses from partial GPS coordinates. Useful for logistics and delivery optimization.
                    </motion.p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {["Mapbox", "Geolocation", "Flask", "OpenStreetMap", "API Integration"].map((tech, techIndex) => (
                        <motion.a
                          key={tech}
                          href={getTechUrl(tech)}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={techTagVariants}
                          whileHover="hover"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: techIndex * 0.1,
                            type: "spring" as const,
                            stiffness: 300 
                          }}
                          className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs sm:text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Unstop Project */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ 
              y: -4,
              x: 10,
              transition: { type: "spring" as const, stiffness: 300, damping: 20 }
            }}
            className="cursor-pointer"
            style={{ zIndex: 1 }}
          >
            <Card className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row">
                <motion.div 
                  className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/logos/image.png"
                    alt="Dr. MGR - Janaki College of Arts and Science for Woment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
                <div className="w-full lg:w-2/3 p-4 sm:p-6">
                  <CardHeader className="p-0 pb-3 sm:pb-4">
                    <div className="flex justify-between items-start">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring" as const, stiffness: 300 }}
                      >
                        <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">Timetable Management System</CardTitle>
                      </motion.div>
                      <motion.div
                        whileHover={{ 
                          x: 5,
                          rotate: 45,
                          scale: 1.1
                        }}
                        transition={{ type: "spring" as const, stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </div>
                    <motion.div
                      variants={badgeVariants}
                      whileHover="hover"
                    >
                      <Badge className="w-fit bg-green-500/10 text-green-600 border-green-500/20 cursor-pointer text-xs sm:text-sm">
                      Dr. MGR - Janaki College of Arts and Science for Women
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3 sm:space-y-4">
                    <motion.p 
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      transition={{ duration: 0.3 }}
                    >
                      An intelligent timetable generation system that optimizes class schedules based on constraints and preferences.
                    </motion.p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {["Timetable Algorithms", "Python", "Flask", "Data Handling"].map((tech, techIndex) => (
                        <motion.a
                          key={tech}
                          href={getTechUrl(tech)}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={techTagVariants}
                          whileHover="hover"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: techIndex * 0.1,
                            type: "spring" as const,
                            stiffness: 300 
                          }}
                          className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs sm:text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
