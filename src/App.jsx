import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Download,
  Github, GraduationCap, House, Mail, Menu, Send, Sparkles, UserRound, X
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "GadgetGrove",
    type: "E-commerce website",
    description: "A responsive gadget storefront concept with product pages and JavaScript interactions such as add-to-cart notifications.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    details: "This school project focuses on presenting products clearly and making common shopping actions easy to understand. Update this description to match your finished project."
  },
  {
    number: "02",
    title: "Tailoring Shop Website",
    type: "Website concept",
    description: "A tailoring website concept where customers can explore clothing services, choose sizes, and review payment options.",
    tags: ["UI Design", "HTML", "CSS", "JavaScript"],
    details: "The idea is to simplify how customers browse tailoring services and communicate the details of an order. Add screenshots and the live link when available."
  },
  {
    number: "03",
    title: "React Calculator",
    type: "Frontend practice",
    description: "A small interactive calculator built to practice React components, state, and event handling.",
    tags: ["React", "Tailwind CSS", "useState"],
    details: "Use this project to demonstrate component-based development and how state updates the interface when a user presses calculator buttons."
  }
];

const navItems = [
  ["Home", "home", House],
  ["About", "about", UserRound],
  ["Projects", "projects", Code2],
  ["Resume", "resume", GraduationCap],
  ["Contact", "contact", Mail],
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="section-kicker mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="muted mt-3 leading-7">{text}</p>}
    </div>
  );
}

function App() {
  const [active, setActive] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [checkedItems, setCheckedItems] = useState([true, false, false]);

  const goTo = (id) => {
    setActive(id);
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please complete every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus(`Thanks, ${form.name}! Your message is ready. Connect this form to a backend to receive messages.`);
    setForm({ name: "", email: "", message: "" });
  };

  const toggleTask = (index) => {
    setCheckedItems((previous) => previous.map((value, i) => i === index ? !value : value));
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={() => goTo("home")} className="flex items-center gap-3 text-left" aria-label="Go to home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 font-black text-zinc-950">KM</span>
            <span><span className="block font-bold tracking-tight">KERWIN MADRONAL</span><span className="muted text-xs">Student · Developer</span></span>
          </button>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)} className={`rounded-full px-4 py-2 text-sm transition ${active === id ? "bg-white text-zinc-950" : "text-zinc-400 hover:bg-white/10 hover:text-white"}`}>{label}</button>
            ))}
          </nav>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="rounded-lg border border-white/10 p-2 md:hidden" aria-label="Toggle menu">
            {mobileMenu ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
        {mobileMenu && <nav className="grid gap-1 border-t border-white/10 px-5 py-3 md:hidden">{navItems.map(([label, id, Icon]) => <button key={id} onClick={() => goTo(id)} className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-zinc-300 hover:bg-white/5"><Icon size={17}/>{label}</button>)}</nav>}
      </header>

      <main className="mx-auto max-w-7xl px-5 sm:px-8">
        <section id="home" className="grid min-h-[82vh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-4 py-2 text-sm text-lime-200"><span className="h-2 w-2 rounded-full bg-lime-300"></span> Available to learn and collaborate</div>
            <p className="section-kicker mb-4">My digital portfolio</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-[-.055em] sm:text-7xl">Building skills.<br/><span className="text-lime-300">Creating ideas.</span></h1>
            <p className="muted mt-6 max-w-xl text-base leading-8 sm:text-lg">Hi, I'm <strong className="text-white">Kerwin B. Madronal</strong>, an IT student learning to turn ideas into useful, thoughtful digital experiences.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => goTo("projects")} className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-bold text-zinc-950 transition hover:bg-lime-200">Explore my work <ArrowUpRight size={18}/></button>
              <button onClick={() => goTo("contact")} className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10">Contact me</button>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-6">
              <div><p className="text-2xl font-black">03</p><p className="muted mt-1 text-xs">Sample projects</p></div>
              <div><p className="text-2xl font-black">IT</p><p className="muted mt-1 text-xs">Study focus</p></div>
              <div><p className="text-2xl font-black">2026</p><p className="muted mt-1 text-xs">Portfolio year</p></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-lime-300/10 blur-2xl"></div>
            <div className="panel relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between"><span className="muted text-xs font-semibold uppercase tracking-[.18em]">Personal dashboard</span><Sparkles className="text-lime-300" size={19}/></div>
              <div className="flex items-center gap-4">
                <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-800 text-center text-xs text-zinc-400">
                  <div><UserRound className="mx-auto mb-1" size={26}/><span>Add photo</span></div>
                </div>
                <div><h2 className="text-xl font-bold">Kerwin B. Madronal</h2><p className="muted mt-1 text-sm">Aspiring web developer</p><span className="mt-3 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-lime-200">Student portfolio</span></div>
              </div>
              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-4 flex items-center justify-between"><h3 className="font-bold">Learning checklist</h3><span className="muted text-xs">{checkedItems.filter(Boolean).length}/3 complete</span></div>
                <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-lime-300 transition-all" style={{width: `${checkedItems.filter(Boolean).length / 3 * 100}%`}}></div></div>
                {["Practice React components", "Build responsive layouts", "Publish portfolio online"].map((task, i) => <button key={task} onClick={() => toggleTask(i)} className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left text-sm transition hover:bg-white/5"><span className={`grid h-5 w-5 place-items-center rounded-md border ${checkedItems[i] ? "border-lime-300 bg-lime-300 text-zinc-950" : "border-zinc-600"}`}>{checkedItems[i] && <Check size={13}/>}</span><span className={checkedItems[i] ? "text-zinc-500 line-through" : "text-zinc-200"}>{task}</span></button>)}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-lime-300 p-4 text-zinc-950"><div><p className="text-xs font-bold uppercase tracking-wider">Current focus</p><p className="mt-1 font-black">Learn by building</p></div><ArrowDownRight size={25}/></div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-20 sm:py-24">
          <SectionHeading eyebrow="A little about me" title="Curious by nature. Growing through code." text="I'm a student developing my knowledge of web development, interface design, and problem-solving. This portfolio is a snapshot of my learning journey."/>
          <div className="grid gap-5 md:grid-cols-3">
            {[["01","Background","I am studying information technology and building practical skills through school activities and personal projects."],["02","Interests","I enjoy exploring website layouts, frontend development, technology, and ways to make interfaces easier to use."],["03","Goal","My goal is to keep improving, create useful applications, and gain experience working on real-world projects."]].map(([num,title,body]) => <article key={num} className="panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-lime-300/30"><span className="text-sm font-black text-lime-300">{num}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="muted mt-3 text-sm leading-7">{body}</p></article>)}
          </div>
          <div className="mt-8 panel rounded-2xl p-6"><h3 className="font-bold">Skills I'm developing</h3><div className="mt-4 flex flex-wrap gap-2">{["HTML","CSS","JavaScript","ReactJS","Tailwind CSS","Bootstrap","Responsive Design","Git & GitHub"].map(skill => <span key={skill} className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-sm text-zinc-300">{skill}</span>)}</div></div>
        </section>

        <section id="projects" className="border-t border-white/10 py-20 sm:py-24">
          <SectionHeading eyebrow="Selected work" title="Projects & work samples" text="A few examples of projects and practice work. Replace the sample details with your final screenshots, descriptions, and project links."/>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map(project => <article key={project.number} className="panel flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-lime-300/30">
              <div className="mb-7 flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-lime-300"><Code2 size={21}/></span><span className="muted text-xs font-bold">{project.number} / 03</span></div>
              <p className="section-kicker !text-[.65rem]">{project.type}</p><h3 className="mt-2 text-2xl font-black">{project.title}</h3><p className="muted mt-3 flex-1 text-sm leading-7">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400">{tag}</span>)}</div>
              {expanded[project.number] && <p className="mt-4 rounded-xl border border-lime-300/15 bg-lime-300/5 p-4 text-sm leading-6 text-zinc-300">{project.details}</p>}
              <button onClick={() => setExpanded(prev => ({...prev, [project.number]: !prev[project.number]}))} className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-left text-sm font-bold transition hover:text-lime-300"><span>{expanded[project.number] ? "Show less" : "View project details"}</span><ArrowUpRight size={17}/></button>
            </article>)}
          </div>
        </section>

        <section id="resume" className="border-t border-white/10 py-20 sm:py-24">
          <SectionHeading eyebrow="My background" title="Resume & education" text="This section uses editable sample content. Update it with your exact school details, dates, and any experience before submitting."/>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="panel rounded-2xl p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-lime-300/10 text-lime-300"><GraduationCap/></span><h3 className="text-xl font-bold">Education</h3></div><div className="mt-7 border-l border-white/10 pl-5"><div className="relative"><span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full bg-lime-300"></span><p className="muted text-xs">CURRENT STUDIES</p><h4 className="mt-2 font-bold">Cavite State University</h4><p className="muted mt-1 text-sm">Information Technology student</p><p className="muted mt-3 text-sm leading-6">Learning application development, web technologies, and software fundamentals.</p></div></div></div>
            <div className="panel rounded-2xl p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-lime-300/10 text-lime-300"><BriefcaseBusiness/></span><h3 className="text-xl font-bold">Experience & strengths</h3></div><div className="mt-7 space-y-5">{[["Academic projects","Created website concepts and frontend assignments as part of coursework."],["Problem solving","Practicing debugging, testing, and improving code step by step."],["Collaboration","Developing communication and teamwork skills through school activities."]].map(([title,body])=><div key={title} className="border-l border-white/10 pl-5"><h4 className="font-bold">{title}</h4><p className="muted mt-1 text-sm leading-6">{body}</p></div>)}</div></div>
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 p-6 sm:flex-row sm:items-center"><div><h3 className="font-bold">Resume document</h3><p className="muted mt-1 text-sm">Add your PDF resume to the public folder and update the button link.</p></div><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold transition hover:bg-white/10">Request my CV <Download size={16}/></a></div>
        </section>

        <section id="contact" className="border-t border-white/10 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div><SectionHeading eyebrow="Get in touch" title="Let's connect." text="Have a question or want to talk about a project? Send a message using the form."/><div className="space-y-4"><div className="flex items-center gap-4 rounded-xl border border-white/10 p-4"><span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-lime-300"><Mail size={19}/></span><div><p className="text-sm font-bold">Email</p><p className="muted text-sm">Add your email address here</p></div></div><div className="flex items-center gap-4 rounded-xl border border-white/10 p-4"><span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-lime-300"><Github size={19}/></span><div><p className="text-sm font-bold">GitHub</p><p className="muted text-sm">Add your GitHub profile link</p></div></div></div></div>
            <form onSubmit={handleContact} className="panel rounded-2xl p-6 sm:p-8"><h3 className="text-xl font-bold">Send a message</h3><p className="muted mt-2 text-sm">All fields are required.</p><div className="mt-6 grid gap-5"><label className="grid gap-2 text-sm font-semibold">Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-lime-300" placeholder="Enter your name" /></label><label className="grid gap-2 text-sm font-semibold">Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-lime-300" placeholder="you@example.com" /></label><label className="grid gap-2 text-sm font-semibold">Message<textarea rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-lime-300" placeholder="Write your message..."/></label><button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-bold text-zinc-950 transition hover:bg-lime-200">Submit message <Send size={17}/></button>{status && <p role="status" className="rounded-xl border border-lime-300/20 bg-lime-300/5 p-3 text-sm text-lime-200">{status}</p>}</div></form>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 px-5 py-7 text-center"><p className="text-sm text-zinc-400">© {new Date().getFullYear()} Kerwin B. Madronal. Built with ReactJS & Tailwind CSS.</p><p className="muted mt-2 text-xs">Student e-portfolio · Keep learning, keep building.</p></footer>
    </div>
  );
}

export default App;