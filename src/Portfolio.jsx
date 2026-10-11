import { useState } from "react";
import { ArrowDown, ArrowUpRight, GraduationCap, Menu, X } from "lucide-react";
import "./portfolio.css";

const projects = [
  { number: "01", name: "GadgetGrove", type: "E-commerce concept", summary: "A responsive storefront concept for browsing everyday tech and adding products to a cart.", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1100&q=85", alt: "Smartphone on a clean desk", tools: "HTML / CSS / JavaScript" },
  { number: "02", name: "Tailoring Shop", type: "Service website concept", summary: "A simple web experience for exploring tailoring services and sharing order preferences.", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1100&q=85", alt: "Garments in a clothing studio", tools: "UI design / HTML / CSS" },
  { number: "03", name: "React Calculator", type: "Frontend practice", summary: "A compact calculator exploring React components, state, and interactive controls.", image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1100&q=85", alt: "Calculator on a desk", tools: "React / JavaScript / CSS" },
];
const navigation = ["Work", "About", "Contact"];

function SectionTitle({ number, label, title }) {
  return <div className="section-title"><p className="eyebrow"><span>{number}</span>{label}</p><h2>{title}</h2></div>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Kerwin Madronal, home">KM<span>.</span></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}><span className="nav-index">0{index + 1}</span>{item}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span>IT STUDENT</span> · CAVITE, PH</p>
            <h1>Curious mind.<br /><em>Made to make.</em></h1>
            <p className="hero-intro">I'm Kerwin Madronal, an IT student learning to turn thoughtful ideas into useful digital experiences.</p>
            <div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowDown size={17} /></a><span className="availability"><i /> Open to learning opportunities</span></div>
            <p className="hero-note">DESIGNING · LEARNING · BUILDING</p>
          </div>
          <div className="hero-visual"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90" alt="Laptop and notebook on a developer's desk" fetchPriority="high" /><div className="image-caption"><span>01 / 03</span><span>Learning by building</span></div><div className="hero-stamp" aria-hidden="true">KM<br /><span>2026</span></div></div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>
        <section className="work-section content-section" id="work">
          <div className="section-heading-row"><SectionTitle number="01" label="SELECTED PROJECTS" title="A few things I've made." /><p className="section-aside">Small projects, real lessons.<br />Each one made me a better builder.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
            <a className="project-image" href="#contact" aria-label={`Ask about ${project.name}`}><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-number">{project.number} / 03</span><span className="project-link"><ArrowUpRight size={20} /></span></a>
            <div className="project-meta"><span>{project.type}</span><span>{project.tools}</span></div><h3>{project.name}</h3><p>{project.summary}</p>
          </article>)}</div>
        </section>
        <section className="about-section content-section" id="about">
          <div className="about-heading"><SectionTitle number="02" label="A LITTLE ABOUT ME" title="In progress, on purpose." /><p className="about-lead">I believe good work starts with curiosity and gets better with every version.</p></div>
          <div className="about-columns">
            <p className="about-copy">I'm currently studying Information Technology at Cavite State University. I'm building a foundation in frontend development, interface design, and problem-solving through coursework and personal projects.</p>
            <div className="learning-block"><p className="eyebrow"><span>IN MY TOOLKIT</span></p><ul className="skill-list">{["HTML & CSS", "JavaScript", "React", "Tailwind CSS", "Responsive design", "Git & GitHub"].map((skill, index) => <li key={skill}><span>0{index + 1}</span>{skill}<ArrowUpRight size={14} /></li>)}</ul></div>
            <div className="education-block"><p className="eyebrow"><span>RIGHT NOW</span></p><div className="education-mark"><GraduationCap size={23} /><span>2026 — PRESENT</span></div><h3>Cavite State<br />University</h3><p>Information Technology<br />Student</p></div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-topline"><span>03 / CONTACT</span><span>GOOD IDEAS START WITH A HELLO</span></div>
          <div className="contact-main"><h2>Let's make<br /><em>something matter.</em></h2><div className="contact-aside"><p>I'm always glad to meet people who care about making useful things. Reach out and let's start a conversation.</p><a className="contact-link" href="mailto:">Get in touch <ArrowUpRight size={19} /></a></div></div>
          <div className="contact-bottom"><span>KERWIN B. MADRONAL</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()}</span></div>
        </section>
      </main>
      <footer className="site-footer"><span>Built with patience and a lot of practice.</span><a href="#home">KM<span>.</span></a></footer>
    </div>
  );
}
