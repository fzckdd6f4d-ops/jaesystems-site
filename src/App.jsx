const competencies = [
  'Technical operations',
  'Operational workflow support',
  'Cross-functional collaboration',
  'Process improvement',
  'Operational readiness',
  'SOP development and rollout',
  'Workflow troubleshooting',
  'SAP EAM / CMMS',
  'Root cause analysis',
  'Technical documentation',
  'Automation systems',
  'AI-assisted workflow tools',
];

const experience = [
  {
    company: 'CBRE at Amazon',
    role: 'Senior Mechatronics & Reliability Technician',
    location: 'Atlanta Metro Area',
    dates: 'Mar 2024 - Present',
    summary:
      'Supports large-scale automated fulfillment operations, reliability workflows, and process continuity across robotics, conveyors, sensors, and material handling systems.',
    highlights: [
      'Partners with operations, maintenance, engineering, and leadership teams to troubleshoot issues and protect workflow continuity.',
      'Coordinates maintenance priorities, operational readiness activities, and workflow execution across automated systems.',
      'Documents corrective actions and workflow updates in SAP/CMMS systems for visibility and tracking.',
      'Uses AI-assisted workflow and research tools to improve troubleshooting, communication, and operational understanding.',
    ],
  },
  {
    company: 'Elite Line Services / Jervis B Webb',
    role: 'Maintenance Technician II',
    location: 'Atlanta Metro Area',
    dates: 'Mar 2023 - Mar 2024',
    summary:
      'Supported automated logistics systems serving large-scale fulfillment operations with a focus on workflow consistency and uptime.',
    highlights: [
      'Collaborated across operations and maintenance teams to troubleshoot workflow disruptions and restore continuity.',
      'Supported reliability-focused operational activities for automated material handling environments.',
      'Maintained clear communication between technical teams and operations during active production support.',
    ],
  },
  {
    company: 'PepsiCo / Gatorade',
    role: 'Operations Technician 3 / Maintenance Support',
    location: 'Atlanta Metro Area',
    dates: 'Jan 2016 - Jun 2023',
    summary:
      'Supported food and beverage manufacturing operations, process standardization, and production line readiness in a GMP-regulated environment.',
    highlights: [
      'Collaborated with Process Improvement Engineers and cross-functional teams on workflow optimization and process standardization.',
      'Supported startup, commissioning, and readiness of the Line 7 12oz/20oz Gatorade production line.',
      'Helped develop and roll out SOPs and workflow processes for production line team members.',
      'Assisted with process stabilization, operational testing, troubleshooting, and production ramp-up activities.',
    ],
  },
  {
    company: 'ConMed Distribution Center (Kelly Services)',
    role: 'Warehouse Associate / Material Handling',
    location: 'Lithia Springs, GA',
    dates: 'Feb 2011 - Sep 2014',
    summary:
      'Supported warehouse operations, inventory movement, and distribution workflows in a structured material handling environment.',
    highlights: [
      'Maintained accuracy across receiving, staging, picking, packing, shipping, and replenishment activities.',
      'Supported operational flow by following standardized warehouse processes and production priorities.',
      'Built early experience with warehouse systems, material handling discipline, and team-based execution.',
    ],
  },
];

const tools = [
  'SAP EAM / CMMS',
  'Microsoft Office and Excel',
  'Oracle WMS',
  'Automated material handling systems',
  'Robotics and conveyor systems',
  'AI-assisted workflow and research tools',
  'LLM familiarity',
  'Process automation interest',
];

const values = [
  'Integrity',
  'Accountability',
  'Adaptability',
  'Teamwork',
  'Resilience',
  'Calm execution',
];

const education = {
  credential: 'Associate of Computer Science',
  school: 'Georgia Perimeter College',
};

function App() {
  return (
    <div className="min-h-screen bg-[#070908] text-stone-100">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="text-base font-semibold text-white sm:text-lg">
            James Jr
          </a>
          <nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm text-stone-200 sm:gap-6">
            <a className="transition hover:text-cyan-200" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-cyan-200" href="#tools">
              Tools
            </a>
            <a className="transition hover:text-cyan-200" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative min-h-[88svh] overflow-hidden">
          <img
            src="/industrial-automation-hero.png"
            alt="Industrial automation floor with conveyors, controls, and robotic equipment"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,8,0.96)_0%,rgba(7,9,8,0.82)_38%,rgba(7,9,8,0.3)_72%,rgba(7,9,8,0.58)_100%)]" />
          <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 max-w-fit border-l-4 border-cyan-300 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Technical Operations | Crew Technology Support | Process Improvement
              </p>
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                James Jr
              </h1>
              <p className="mt-4 text-2xl font-semibold text-stone-100 sm:text-3xl">
                Senior Mechatronics & Reliability Technician
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
                Operations-focused technical professional supporting large-scale automated systems, workflow continuity,
                maintenance planning, SOP rollout, and cross-functional implementation work across Amazon and
                PepsiCo/Gatorade operations.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  View Experience
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-stone-500 bg-black/20 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:border-amber-300 hover:text-amber-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-800 bg-[#101411]">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 lg:grid-cols-3">
            <div className="rounded-lg border border-stone-700 bg-stone-950 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Environment</p>
              <p className="mt-3 text-2xl font-semibold text-white">High-volume automated operations</p>
            </div>
            <div className="rounded-lg border border-stone-700 bg-stone-950 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">Focus</p>
              <p className="mt-3 text-2xl font-semibold text-white">Reliability, readiness, and continuity</p>
            </div>
            <div className="rounded-lg border border-stone-700 bg-stone-950 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Location</p>
              <p className="mt-3 text-2xl font-semibold text-white">Atlanta Metro Area</p>
            </div>
          </div>
        </section>

        <section id="competencies" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Core Competencies</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              The work lives where technical systems meet operational flow.
            </h2>
            <p className="mt-4 leading-8 text-stone-300">
              The resume points to a practical blend of mechatronics, operations support, documentation, planning,
              implementation, and steady cross-team communication.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {competencies.map((competency) => (
              <div key={competency} className="rounded-md border border-stone-800 bg-[#111714] p-4 text-stone-100">
                {competency}
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="border-y border-stone-800 bg-[#0d100f]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">Professional Experience</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Automation support, production readiness, and process improvement.
              </h2>
            </div>
            <div className="mt-9 grid gap-5">
              {experience.map((job) => (
                <article key={`${job.company}-${job.dates}`} className="rounded-lg border border-stone-800 bg-stone-950 p-5 sm:p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-stone-300">{job.company}</p>
                    </div>
                    <p className="text-sm font-medium text-cyan-200 md:text-right">
                      {job.location}
                      <br />
                      {job.dates}
                    </p>
                  </div>
                  <p className="mt-5 max-w-4xl leading-8 text-stone-300">{job.summary}</p>
                  <ul className="mt-5 grid gap-3 lg:grid-cols-2">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-md border border-stone-800 bg-[#111714] p-4 leading-7 text-stone-200">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Tools & Technology</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Grounded in operations, curious about better systems.
            </h2>
            <p className="mt-4 leading-8 text-stone-300">
              The toolkit spans warehouse and production systems, maintenance planning platforms, automated handling
              equipment, and emerging AI-assisted workflows for troubleshooting and communication.
            </p>
            <div className="mt-6 rounded-lg border border-stone-800 bg-stone-950 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Education</p>
              <p className="mt-3 text-xl font-semibold text-white">{education.credential}</p>
              <p className="mt-1 text-stone-300">{education.school}</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => (
              <div key={tool} className="rounded-md border border-stone-800 bg-[#111714] p-4 text-stone-100">
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-stone-800 bg-[#101411]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Leadership & Values</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Calm execution in fast-moving environments.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value} className="rounded-md border border-stone-700 bg-stone-950 p-4 font-semibold text-stone-100">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 rounded-lg border border-stone-800 bg-stone-950 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">Contact</p>
              <h2 className="mt-3 text-3xl font-bold text-white">James Jr</h2>
              <p className="mt-4 max-w-2xl leading-8 text-stone-300">
                Senior mechatronics and reliability technician focused on technical operations, automated systems,
                process improvement, and operational readiness.
              </p>
            </div>
            <a
              href="mailto:james@edmonds.dev"
              className="rounded-md bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
            >
              Email James Jr
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 px-5 py-6 text-center text-sm text-stone-500">
        (c) {new Date().getFullYear()} james.edmonds.dev
      </footer>
    </div>
  );
}

export default App;
