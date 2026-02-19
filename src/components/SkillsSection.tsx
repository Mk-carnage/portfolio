const tools = [
  { name: "Figma", icon: "🎨", level: 90 },
  { name: "Adobe XD", icon: "✏️", level: 80 },
  { name: "Illustrator", icon: "🖌️", level: 75 },
  { name: "Photoshop", icon: "🖼️", level: 70 },
  { name: "HTML/CSS", icon: "💻", level: 88 },
  { name: "JavaScript", icon: "⚡", level: 82 },
  { name: "React", icon: "⚛️", level: 78 },
  { name: "Prototyping", icon: "🔗", level: 92 },
];

const competencies = [
  { title: "User Research", icon: "🔬", desc: "Interviews, surveys, usability testing" },
  { title: "Information Architecture", icon: "🗺️", desc: "Sitemaps, user flows, card sorting" },
  { title: "Visual Design", icon: "🎯", desc: "Typography, color, layout, spacing" },
  { title: "Interaction Design", icon: "💫", desc: "Micro-interactions, animations, states" },
  { title: "Design Systems", icon: "🧩", desc: "Component libraries, style guides" },
  { title: "Accessibility", icon: "♿", desc: "WCAG compliance, inclusive design" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-xs text-cyan font-semibold uppercase tracking-[0.2em] mb-4">Expertise</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools & <span className="gradient-text">Capabilities</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Tool Proficiency */}
          <div>
            <h3 className="text-lg font-semibold mb-8 text-foreground">Proficiency</h3>
            <div className="space-y-5">
              {tools.map(({ name, icon, level }) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <span>{icon}</span> {name}
                    </div>
                    <span className="text-xs text-muted-foreground">{level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface-raised overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${level}%`,
                        background: "var(--gradient-cyan)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-lg font-semibold mb-8 text-foreground">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competencies.map(({ title, icon, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-xl bg-surface-raised border border-border hover:border-primary transition-all duration-200 group"
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <div className="font-semibold text-sm text-foreground mb-1 group-hover:text-cyan transition-colors">{title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
