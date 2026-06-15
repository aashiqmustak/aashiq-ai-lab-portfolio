import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Your Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-green-500/20 rounded-2xl relative overflow-hidden border-4 border-gray-700 max-w-sm mx-auto">
              <img 
                src="/lovable-uploads/6d1eec40-9ea8-43ce-9aab-8c45748e5c14.png"
                alt="Mohammed Aashiq"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                Mohammed Aashiq,<br />
                <span style={{color: '#FFD700'}}>Your AI Expert</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 text-center lg:text-left">
                AI/ML Engineer | Backend Developer 
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              I'm passionate about creating AI-focused intelligent systems that 
              simplify complex problems. With a strong foundation in software development, I enjoy bridging the gap between functionality and 
              intelligence turning data-driven ideas into clean, meaningful solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-center sm:text-left">Backend Development</h3>
                <h3 className="text-base sm:text-lg font-semibold text-center sm:text-left">Computer Vision</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-center sm:text-left">LLM Integration</h3>
                <h3 className="text-base sm:text-lg font-semibold text-center sm:text-left">MLops Orchestration</h3>
                <h3 className="text-base sm:text-lg font-semibold text-center sm:text-left">Agentic & Autonomous AI</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <h4 className="text-xs sm:text-sm text-muted-foreground mb-1">Freelance</h4>
                <p className="font-semibold text-sm sm:text-base">AI Engineer (PT)</p>
                <p className="text-xs sm:text-sm text-muted-foreground">2023 - Present</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xs sm:text-sm text-muted-foreground mb-1">Own firm</h4>
                <p className="font-semibold text-sm sm:text-base">Zarnex.ai</p>
                <p className="text-xs sm:text-sm text-muted-foreground">2024 - Present</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xs sm:text-sm text-muted-foreground mb-1">Present</h4>
                <p className="font-semibold text-sm sm:text-base">Student<br />(Sri Manakula Vinayagar Engineering College)</p>
                <p className="text-xs sm:text-sm text-muted-foreground">2023 - 2027</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xs sm:text-sm text-muted-foreground mb-1">Leadership</h4>
                <p className="font-semibold text-sm sm:text-base">Management Lead <br />(Google De  velopers Group Puducherry)</p>
                <p className="text-xs sm:text-sm text-muted-foreground">2026 - 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
