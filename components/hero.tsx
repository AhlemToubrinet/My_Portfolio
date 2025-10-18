import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 animate-fade-in-up">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-balance">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse-glow">
                Ahlem Toubrinet
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-lg text-foreground/70 mb-8 leading-relaxed text-balance">
              I craft beautiful digital experiences through design and code. Specializing in UI/UX, web development, and
              AI-powered solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group font-semibold"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-semibold"
              >
                Get In Touch
              </a>
            </div>
            
          </div>

          {/* Right Visual Section */}
          <div className={`${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative h-full flex items-center justify-center">
              {/* Animated frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-glow"></div>

              {/* Main image container */}
              <div className="relative w-full aspect-square max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-10 animate-rotate-slow"></div>
                <img
                  src="/me.png"
                  alt="Profile"
                  className="relative rounded-3xl w-full h-full object-cover shadow-2xl"
                />
              </div>

              {/* Floating cards */}
              <div
                className="absolute -bottom-8 -left-8 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🎨</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">UI/UX Design</div>
                    <div className="text-xs text-foreground/60">Creative Solutions</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💻</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Web Development</div>
                    <div className="text-xs text-foreground/60">Full Stack Developer</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-12 -right-12 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">AI Integration</div>
                    <div className="text-xs text-foreground/60">Smart Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
