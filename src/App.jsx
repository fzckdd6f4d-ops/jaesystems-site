const focusAreas = [
  'Robotics integration',
  'Automation systems',
  'PLC and controls troubleshooting',
  'SAP EAM asset workflows',
  'Industrial maintenance',
  'Conveyor and material handling systems',
];

const projects = [
  {
    title: 'Automated Conveyor Systems',
    description:
      'Controls-focused automation work for production flow, uptime, and repeatable maintenance procedures.',
  },
  {
    title: 'Robotics Integration',
    description:
      'Collaborative and industrial robot support across commissioning, troubleshooting, and production readiness.',
  },
  {
    title: 'Asset Management Workflows',
    description:
      'SAP EAM process support for equipment history, maintenance planning, and operational visibility.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" className="text-lg font-semibold tracking-wide text-white">
          James Edmonds
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm text-slate-300">
          <a className="transition hover:text-white" href="#work">
            Work
          </a>
          <a className="transition hover:text-white" href="#focus">
            Focus
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100svh-88px)] w-full max-w-6xl items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Senior Mechatronics & Robotics Technician
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              James Edmonds
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Robotics, mechatronics, automation, and industrial controls work focused on keeping complex systems reliable, maintainable, and production-ready.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                View Work
              </a>
              <a
                href="https://james.edmonds.dev/"
                className="rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                https://james.edmonds.dev
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-950/20">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-sm font-medium text-slate-300">System Focus</span>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Online
              </span>
            </div>
            <dl className="grid gap-4 text-sm">
              <div className="flex items-center justify-between gap-6">
                <dt className="text-slate-400">Portfolio</dt>
                <dd className="font-semibold text-white">james.edmonds.dev</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-slate-400">Discipline</dt>
                <dd className="font-semibold text-white">Robotics and Controls</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-slate-400">Stack</dt>
                <dd className="font-semibold text-white">React + Vite</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="focus" className="border-y border-slate-800 bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="text-2xl font-semibold text-white">Focus Areas</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area) => (
                <div key={area} className="rounded-md border border-slate-800 bg-slate-900/70 p-4 text-slate-200">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-slate-800 bg-slate-950 p-5">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-slate-800 bg-slate-950/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">James Edmonds</h2>
              <p className="mt-2 text-slate-300">
                Robotics, mechatronics, automation, and industrial controls portfolio.
              </p>
            </div>
            <a
              href="https://james.edmonds.dev/"
              className="rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Visit Production Domain
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-5 py-6 text-center text-sm text-slate-500">
        (c) {new Date().getFullYear()} james.edmonds.dev
      </footer>
    </div>
  );
}

export default App;
