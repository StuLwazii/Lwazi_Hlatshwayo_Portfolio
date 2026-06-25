import { GraduationCap, Users, School, Award, Compass } from 'lucide-react';

const timeline = [
  {
    icon: School,
    title: 'High School Milestone',
    subtitle: 'Masithwalisane Secondary School',
    date: 'Grade 12 / Matric (Maths & Physical Sciences)',
    highlights: [
      'Elected Head Boy — a position of leadership, discipline, and service',
      'Discovered a passion for technology through an inspiring teacher',
      'Developed strong foundations in problem-solving and analytical thinking',
    ],
  },
  {
    icon: Users,
    title: 'Leadership in Action',
    subtitle: 'Front of House Manager at Doppio Zero',
    date: 'Operational Management',
    highlights: [
      'Managed high-pressure service environments and shift coordination',
      'Developed client conflict resolution and professional communication skills',
      'Led teams with operational efficiency and a people-first mindset',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Academic Foundations',
    subtitle: 'Nelson Mandela University',
    date: 'Diploma in IT: Communication Networks',
    highlights: [
      'Deep-dive into communication networks, distributed systems, and infrastructure',
      'Mastered network configuration, redundancy, and resilient topology design',
      'Built a strong theoretical foundation for enterprise infrastructure',
    ],
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    subtitle: 'Cisco Networking Basics & CCNA',
    date: 'Professional Certification',
    highlights: [
      'Mastered routing mechanisms, IP subnets, and enterprise parameters',
      'Completed CCNA Introduction to Networks with hands-on lab experience',
      'Gained real-world understanding of Cisco CLI and network architecture',
    ],
  },
  {
    icon: Compass,
    title: 'The Present Day',
    subtitle: 'CapaCiti GQ Hub — Digital Associate Internship',
    date: 'Current Internship',
    highlights: [
      'Actively exploring AI integrations and automation tools in technical projects',
      'Applying network theory to corporate infrastructure and real-world systems',
      'Mastering workplace collaboration, agile processes, and professional delivery',
    ],
  },
];

export default function JourneyTimeline() {
  return (
    <section id="journey" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-400 font-semibold text-sm tracking-wider uppercase mb-3">
            My Journey
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-50 mb-4">
            Chronological Path
          </h2>
          <div className="w-16 h-1 bg-slate-500 rounded-full mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700/50 -translate-x-1/2" />
          {/* Vertical line — mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-slate-700/50" />

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center"
                >
                  {/* Desktop: alternate left/right */}
                  <div className={`hidden md:block ${isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                    <div className={`p-6 rounded-xl bg-slate-800 border border-slate-700/30`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                          <Icon size={20} />
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <h3 className="font-semibold text-slate-50 text-lg">{item.title}</h3>
                          <p className="text-slate-400 text-sm font-medium">{item.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                        {item.date}
                      </p>
                      <ul className="space-y-2">
                        {item.highlights.map((h, hi) => (
                          <li key={hi} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-slate-500 mt-1.5">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center node — desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-slate-500 border-4 border-[#0b111e]" />
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden pl-16">
                    <div className="p-6 rounded-xl bg-slate-800 border border-slate-700/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-50 text-lg">{item.title}</h3>
                          <p className="text-slate-400 text-sm font-medium">{item.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                        {item.date}
                      </p>
                      <ul className="space-y-2">
                        {item.highlights.map((h, hi) => (
                          <li key={hi} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-slate-500 mt-1.5">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Mobile node */}
                    <div className="absolute left-6 top-6 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-slate-500 border-4 border-[#0b111e]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
