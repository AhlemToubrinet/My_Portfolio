export default function Skills() {
  const skillCategories = [
    {
      category: "UI/UX Design",
      skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"],
      icon: "🎨",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      category: "Web Development",
      skills: ["React", "Next.js", "HTML", "CSS", "Node.js"],
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      category: "AI & Tools",
      skills: ["Machine Learning", "Python", "TensorFlow", "API Integration", "Data Analysis"],
      icon: "🤖",
      gradient: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-shift"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-up">
          Skills &{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
            Expertise
          </span>
        </h2>

        <p
          className="text-center text-foreground/60 mb-16 text-lg animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Specialized in creating beautiful and functional digital experiences
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="group relative animate-fade-in-up hover:animate-card-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
              ></div>

              <div className="relative p-8 bg-gradient-to-br from-background to-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 animate-border-glow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  >
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 group/skill animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.15 + skillIndex * 0.05}s` }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full group-hover/skill:scale-150 transition-transform duration-300`}
                      ></div>
                      <span className="text-foreground/80 group-hover/skill:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
