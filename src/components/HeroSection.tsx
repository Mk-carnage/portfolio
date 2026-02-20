import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import avatarImg from "@/assets/avatar.jpg";

const roles = ["UI/UX Designer", "Visual Storyteller", "Product Thinker", "Interaction Designer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Animated orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ background: "hsl(var(--cyan))" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full opacity-8 blur-3xl animate-pulse"
        style={{ background: "hsl(var(--amber))", animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-xs text-muted-foreground tracking-widest uppercase font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
            Available for Opportunities
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Hey, I'm{" "}
              <span className="gradient-text block">Kailasanathan R</span>
            </h1>
            <div className="h-12 flex items-center">
              <span className="text-2xl md:text-3xl font-light text-muted-foreground">
                {displayed}
                <span className="inline-block w-0.5 h-7 bg-primary ml-0.5 animate-pulse" />
              </span>
            </div>
          </div>

          <p className="text-foreground font-medium">
            I craft digital experiences that are intuitive, beautiful, and purposeful — 
            bridging the gap between design thinking and real-world impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-cyan"
              style={{ background: "var(--gradient-cyan)" }}
            >
              View My Work ↓
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-full font-semibold text-sm border border-border text-foreground hover:border-primary transition-all duration-200 hover:text-cyan"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-4 border-t border-border">
            {[["3+", "Projects"], ["2+", "Years Learning"], ["100%", "Passion"]].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold gradient-text">{num}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full opacity-20 blur-2xl animate-pulse"
              style={{ background: "hsl(var(--cyan))" }}
            />
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 shadow-cyan"
              style={{ borderColor: "hsl(var(--cyan) / 0.4)" }}>
              <img src={avatarImg} alt="MK Carnage - UI/UX Designer" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
              <div className="text-xs text-muted-foreground">Current Focus</div>
              <div className="text-sm font-semibold text-cyan mt-0.5">UX Research & Design</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-muted-foreground" />
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
