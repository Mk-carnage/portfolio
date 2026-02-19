import ProjectCard from "./ProjectCard";
import amazonImg from "@/assets/project-amazon.png";
import qubekImg from "@/assets/project-qubek.png";
import sheriseImg from "@/assets/project-sherise.png";

const projects = [
  {
    number: "01",
    title: "Amazon Clone",
    subtitle: "E-Commerce UI Design",
    description:
      "A fully functional Amazon-inspired e-commerce platform built from scratch. Designed with a focus on familiar UX patterns, intuitive navigation, and a seamless shopping experience — from product discovery to cart management.",
    tags: ["E-Commerce", "UI Design", "JavaScript", "Responsive"],
    image: amazonImg,
    liveUrl: "https://mk-carnage.github.io/javascript-amazon-project-main/",
    highlights: [
      "Implemented product listing grid with ratings, pricing, and quantity controls",
      "Designed intuitive search and navigation system mirroring Amazon's UX",
      "Built functional cart & checkout flow with order tracking",
    ],
  },
  {
    number: "02",
    title: "Qubek Fashion Store",
    subtitle: "Fashion E-Commerce Platform",
    description:
      "A premium fashion e-commerce website with a clean, editorial aesthetic. Features a custom designer tool, product catalog, and a brand identity that communicates quality and confidence — designed to convert browsers into buyers.",
    tags: ["Fashion Retail", "Brand Design", "UX Strategy", "WordPress"],
    image: qubekImg,
    liveUrl: "https://qubek.in/",
    highlights: [
      "Designed hero section with bold typography and brand-first visual hierarchy",
      "Created custom designer tool UX for personalized fashion experience",
      "Established brand identity system with consistent design language",
    ],
    reversed: true,
  },
  {
    number: "03",
    title: "SheRise — Women's Empowerment App",
    subtitle: "Social Impact Web App",
    description:
      "An all-in-one empowerment platform for women featuring health tracking, career mentorship, safety resources, and community building. Designed with warmth, accessibility, and emotional resonance at the forefront.",
    tags: ["Social Impact", "App Design", "React", "Accessibility"],
    image: sheriseImg,
    liveUrl: "https://mk-carnage.github.io/sherise-webapp/",
    highlights: [
      "Designed inclusive UI with accessible color system and readable typography",
      "Created onboarding flow and feature discovery for diverse user personas",
      "Built emotional design language connecting with the platform's mission",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="text-xs text-cyan font-semibold uppercase tracking-[0.2em] mb-4">Featured Work</div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Projects that{" "}
            <span className="gradient-text">speak</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A curated selection of real-world projects where design thinking meets execution.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
