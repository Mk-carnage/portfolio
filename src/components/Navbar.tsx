import { useState, useEffect } from "react";

const navLinks = ["About", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-background/90 backdrop-blur-md border-b border-border" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight">
          <span className="gradient-text">KR</span>
          <span className="text-foreground opacity-60">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide uppercase font-medium"
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:kailasanathan.r.31@gmail.com"
            className="text-sm px-5 py-2 rounded-full border border-primary text-cyan hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide font-medium"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
