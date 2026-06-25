import { ExternalLink, Network, Bot } from 'lucide-react';

const projects = [
  {
    icon: Bot,
    title: 'Aspire AI Support Ticketing Platform',
    description:
      'Automates support routing and processes requests using Python, OpenAI API, and Lovable. A production-ready AI-powered ticketing system that intelligently categorizes, routes, and resolves support requests with minimal human intervention.',
    tags: ['Python', 'OpenAI API', 'Lovable', 'Automation'],
    link: 'https://aspire-ai-v2.lovable.app/dashboard',
  },
  {
    icon: Network,
    title: '3-Tier Enterprise Resilient Topology',
    description:
      'Built and automated secure network configurations using Cisco, implementing VLANs, OSPF, and STP routing architectures to prevent single failure vectors. Designed for enterprise resilience with layered redundancy and fault-tolerant paths.',
    tags: ['Cisco', 'VLANs', 'OSPF', 'STP', 'Enterprise'],
    link: null,
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-50 mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-slate-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-slate-800 border border-slate-700/30 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-400 mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="font-semibold text-slate-50 text-xl mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-600 text-white text-sm font-semibold hover:bg-slate-500 transition-colors w-fit"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
