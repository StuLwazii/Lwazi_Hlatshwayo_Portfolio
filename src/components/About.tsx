import { Lightbulb, BookOpen, Bot, Briefcase, Eye, Target, Download } from 'lucide-react';

const stories = [
  {
    icon: Lightbulb,
    title: 'The Spark of Curiosity',
    description:
      'Coming from a background with zero tech exposure, my entire journey was sparked by an inspiring high school teacher who opened the door to IT. What began as curiosity quickly became a lifelong passion for understanding how technology shapes the world around us.',
  },
  {
    icon: BookOpen,
    title: 'Academic Foundations & Loving Networks',
    description:
      'At Nelson Mandela University, I pursued a Diploma in IT: Communication Networks. I became deeply fascinated by the way data flows across distributed systems, the elegance of redundancy, and the logic behind resilient infrastructure that keeps the world connected.',
  },
  {
    icon: Bot,
    title: 'Pushing into AI Engineering',
    description:
      'I began designing custom AI chatbots from scratch, diving deep into LLM structures, prompt engineering, and feedback loops. This hands-on exploration gave me a powerful, practical understanding of how artificial intelligence is architected and deployed.',
  },
  {
    icon: Briefcase,
    title: 'My Present: The Internship',
    description:
      'Today I am actively connecting university network theory with real-world corporate applications through a professional internship. Every day I am bridging the gap between academic knowledge and production systems, building the infrastructure that the future will depend on.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-400 font-semibold text-sm tracking-wider uppercase mb-3">
            About Me
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-50 mb-4">
            Origin Story, Vision & Mission
          </h2>
          <div className="w-16 h-1 bg-slate-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Story Cards */}
          <div className="space-y-6">
            {stories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-slate-800 border border-slate-700/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-50 mb-2 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Vision & Mission Cards */}
          <div className="space-y-6">
            <div className="p-8 rounded-xl bg-slate-800 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                  <Eye size={20} />
                </div>
                <h3 className="font-semibold text-slate-50 text-xl">Vision</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To architect the next generation of intelligent, hyper-secure, and high-performance network infrastructures where AI and connectivity seamlessly converge.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-800 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                  <Target size={20} />
                </div>
                <h3 className="font-semibold text-slate-50 text-xl">Mission</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To relentlessly master network engineering principles while deeply investigating AI model architectures, combining structured technical execution with creative, curiosity-driven development.
              </p>
            </div>

            <a
              href="/Lwazi_Hlatshwayo_CV.pdf"
              download="Lwazi_Hlatshwayo_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-600 text-white font-semibold hover:bg-slate-500 transition-colors duration-200 w-full justify-center"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
