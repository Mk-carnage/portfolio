const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "hsl(var(--cyan))" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs text-cyan font-semibold uppercase tracking-[0.2em] mb-4">Get In Touch</div>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Let's build something{" "}
          <span className="gradient-text">amazing</span>{" "}
          together
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Whether you're looking for a designer for your next project, a creative collaborator, 
          or just want to say hi — my inbox is always open.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="mailto:kailasanathan.r.31@gmail.com"
            className="px-10 py-4 rounded-full font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-cyan text-base"
            style={{ background: "var(--gradient-cyan)" }}
          >
            Say Hello 👋
          </a>
          <a
            href="https://github.com/mk-carnage"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full font-semibold text-foreground border border-border hover:border-primary hover:text-cyan transition-all duration-200 text-base"
          >
            View GitHub
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {[
            { label: "GitHub", href: "https://github.com/mk-carnage", icon: "⌨️" },
            { label: "LinkedIn", href: "#", icon: "💼" },
            { label: "Dribbble", href: "#", icon: "🏀" },
            { label: "Behance", href: "#", icon: "🎨" },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan transition-colors duration-200 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{icon}</span>
              <span className="text-xs font-medium tracking-wide">{label}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Designed & built by <span className="text-cyan font-medium">Kailasanathan R</span> · 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
