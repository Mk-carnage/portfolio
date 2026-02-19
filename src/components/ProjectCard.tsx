import { useState } from "react";

interface ProjectCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  highlights: string[];
  reversed?: boolean;
}

const ProjectCard = ({
  number,
  title,
  subtitle,
  description,
  tags,
  image,
  liveUrl,
  highlights,
  reversed = false,
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? "md:grid-flow-col-dense" : ""}`}>
      {/* Image */}
      <div
        className={`relative group cursor-pointer ${reversed ? "md:col-start-2" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open(liveUrl, "_blank")}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
          <img
            src={image}
            alt={title}
            className={`w-full h-64 md:h-80 object-cover object-top transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
          />
          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
            style={{ background: "hsl(var(--cyan) / 0.15)" }}
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold text-cyan border border-primary">
              View Live Project ↗
            </div>
          </div>
        </div>

        {/* Number badge */}
        <div
          className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border border-border shadow-card"
          style={{ background: "hsl(var(--background))", color: "hsl(var(--cyan))" }}
        >
          {number}
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${reversed ? "md:col-start-1 md:row-start-1" : ""}`}>
        <div>
          <div className="text-xs text-cyan font-semibold uppercase tracking-[0.2em] mb-2">{subtitle}</div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">{title}</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="text-cyan mt-0.5 shrink-0">▹</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md text-xs font-medium"
              style={{ background: "hsl(var(--amber) / 0.12)", color: "hsl(var(--amber))", border: "1px solid hsl(var(--amber) / 0.25)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:gap-4 transition-all duration-200 group"
        >
          View Live Project
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
