import type React from "react"

import { useState } from "react"
import { Loader2, Send } from "lucide-react"
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceID = "service_0fxk8wj"; 
      const templateID = "template_amnj7uk"; 
      const userID = "qhphh15r4cbMVu7qn"; 

      emailjs.init(userID);
      await emailjs.send(serviceID, templateID, formData, userID);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };


  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-shift"></div>
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "2.5s" }}
      ></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in-up">
          Let's{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
            Connect
          </span>
        </h2>
        <p
          className="text-center text-foreground/70 mb-12 text-lg animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gradient-to-br from-background to-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gradient-to-br from-background to-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gradient-to-br from-background to-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/50 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 font-semibold hover:scale-105 active:scale-95"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>

          {submitted && (
            <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-lg text-primary text-center animate-fade-in-up font-medium">
              ✓ Thanks for reaching out! I'll get back to you soon.
            </div>
          )}
        </form>

        {/* Social Links */}
        <div className="mt-12 pt-12 border-t border-border/50">
          <p className="text-center text-foreground/70 mb-6 font-medium">Or connect with me on:</p>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { name: "GitHub", url: "https://github.com/AhlemToubrinet" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/ahlem-toubrinet/" },
              { name: "Email", url: "mailto:ahlem.toubrinet@ensia.edu.dz" },
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium hover:scale-110 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
