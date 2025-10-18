import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "SahTech — Medication Management Platform",
      description:
        "A complete medication management web platform that helps users track prescriptions, receive reminders, order medicines from nearby pharmacies, and consult healthcare professionals.",
      category: "web-dev",
      image: "/SahTech_interface.png",
      link: "https://github.com/AhlemToubrinet/SahTech",
      tags: ["React", "Node.js", "Express"],
    },
    {
      id: 2,
      title: "Intelligent Crop Recommendation System",
      description:
        "An AI-based system that suggests the most suitable crops using advanced search algorithms such as Genetic Algorithm, Greedy Search, and A*. It optimizes recommendations based on environmental and user-defined factors.",
      category: "ai",
      image: "/crop_recommendation_system_interface.png",
      link: "https://github.com/AhlemToubrinet/crop-prediction-ai",
      tags: ["Python", "Tkinter", "Search Algorithms"],
    },
    {
      id: 3,
      title: "Sawemni — Design System",
      description:
        "A comprehensive UI design system with reusable components, style guidelines, and documentation created in Figma to speed up interface development and ensure consistency.",
      category: "ui-ux",
      image: "/sawemni_ui.png",
      link: "#",
      tags: ["Figma", "Design System", "Components"],
    },
    {
      id: 4,
      title: "Hand Gesture Recognition (CNN)",
      description:
        "A convolutional neural network model that recognizes hand gestures with high accuracy — includes dataset preprocessing, training, and visualization of results.",
      category: "ai",
      image: "/Hand_Gesture_Recognition.jpeg",
      link: "https://github.com/AhlemToubrinet/PRODIGY_ML_04",
      tags: ["Deep Learning", "Python", "CNN"],
    },
    {
      id: 5,
      title: "ETCVERSERY — Brand Identity",
      description:
        "End-to-end brand identity project including logo design, color system, typography, and a brand guideline document for consistent visual language.",
      category: "ui-ux",
      image: "/etcversery_ui.png",
      link: "#",
      tags: ["Figma", "Branding", "Identity"],
    },
    {
      id: 6,
      title: "Cat vs Dog Classification (SVM)",
      description:
        "A classical machine learning project using Support Vector Machines to classify cat and dog images — includes feature extraction and performance evaluation.",
      category: "ai",
      image: "/CatVsDog_Classification.jpeg",
      link: "https://github.com/AhlemToubrinet/PRODIGY_ML_03",
      tags: ["SVM", "Python", "Data Science"],
    },
    {
      id: 7,
      title: "Department Selection Test — UI Prototype",
      description:
        "A user-friendly UI prototype for an academic department selection test, featuring accessible layouts and interactive components designed in Figma.",
      category: "ui-ux",
      image: "/department_selection_test_ui.png",
      link: "#",
      tags: ["Figma", "Prototype", "UX"],
    },
  ]


  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ui-ux", label: "UI/UX" },
    { id: "web-dev", label: "Web Dev" },
    { id: "ai", label: "AI" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projectsData : projectsData.filter((p) => p.category === selectedCategory)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const currentProject = filteredProjects[currentIndex]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-gradient-shift"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow"></div>
      <div
        className="absolute bottom-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-up">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
            Projects
          </span>
        </h2>

        <p
          className="text-center text-foreground/60 mb-12 text-lg animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Explore my latest work across design, development, and AI
        </p>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id)
                setCurrentIndex(0)
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-card border border-border text-foreground hover:border-primary hover:shadow-md hover:shadow-primary/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-gradient-to-br from-background via-card to-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  className="w-full h-96 object-cover rounded-lg group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/40 transition-all duration-500"></div>
              </div>


              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {currentProject.title}
                  </h3>
                  <p className="text-foreground/70 text-lg mb-6 leading-relaxed">{currentProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm border border-primary/30 hover:border-primary/60 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={currentProject.link}
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-semibold group/link"
                  >
                    View Project
                    <ExternalLink size={20} className="group-hover/link:rotate-45 transition-transform duration-300" />
                  </a>

                  {/* Navigation */}
                  <div className="flex gap-4">
                    <button
                      onClick={prevProject}
                      className="p-2 bg-gradient-to-br from-background to-card border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextProject}
                      className="p-2 bg-gradient-to-br from-background to-card border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Carousel Indicator */}
                <div className="mt-6 text-sm text-foreground/50 font-medium">
                  {currentIndex + 1} / {filteredProjects.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
