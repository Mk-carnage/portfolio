const skills = [
  "Figma", "Adobe XD", "Prototyping", "Wireframing",
  "User Research", "Usability Testing", "Design Systems",
  "HTML/CSS", "React", "JavaScript", "Responsive Design", "Accessibility"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <div className="text-xs text-cyan font-semibold uppercase tracking-[0.2em] mb-4">About Me</div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Designing with <span className="gradient-text">purpose</span>,
                <br />building with care
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate UI/UX designer who believes that great design is invisible — 
                it just <span className="text-foreground">works</span>. My approach blends 
                human-centered thinking with clean visual execution.
              </p>
              <p>
                From e-commerce platforms to social impact apps, I've applied design thinking 
                across diverse domains — always keeping the user at the center of every decision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", label: "User-Centered", desc: "Every pixel serves a purpose" },
                { icon: "🔬", label: "Research-Driven", desc: "Data informs my decisions" },
                { icon: "⚡", label: "Iterative", desc: "Test, learn, improve" },
                { icon: "🤝", label: "Collaborative", desc: "Design is a team sport" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="bg-surface-raised rounded-xl p-4 border border-surface hover:border-primary transition-colors duration-200">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-semibold text-sm text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="space-y-8">
            <div>
              <div className="text-xs text-cyan font-semibold uppercase tracking-[0.2em] mb-4">Skills & Tools</div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-border bg-surface-raised text-foreground hover:border-primary hover:text-cyan transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Process */}
            <div className="space-y-4">
              <div className="text-xs text-cyan font-semibold uppercase tracking-[0.2em]">My Design Process</div>
              {[
                { step: "01", title: "Discover", desc: "User research & problem definition" },
                { step: "02", title: "Define", desc: "Personas, user flows & requirements" },
                { step: "03", title: "Design", desc: "Wireframes, prototypes & UI design" },
                { step: "04", title: "Deliver", desc: "Testing, iteration & handoff" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex items-center gap-4 group">
                  <div className="text-xs font-bold text-cyan opacity-50 w-8 shrink-0">{step}</div>
                  <div className="flex-1 h-px bg-border group-hover:bg-primary transition-colors duration-200" />
                  <div className="text-right">
                    <div className="text-sm font-semibold text-foreground">{title}</div>
                    <div className="text-xs text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
