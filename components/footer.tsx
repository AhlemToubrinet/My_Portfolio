export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-shift"></div>
      <div
        className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 animate-fade-in-up">
            {/* Brand */}
            <div className="group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 animate-gradient-shift">
                Portfolio
              </h3>
              <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                Creating beautiful digital experiences through design and development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((link, index) => (
                  <li key={link} className="animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Email: ahlem.toubrinet@ensia.edu.dz
                </p>
                <p className="text-foreground/70 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Phone: +213 697073878
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up">
              <p className="text-foreground/50 text-sm">© {currentYear} Ahlem Toubrinet. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
