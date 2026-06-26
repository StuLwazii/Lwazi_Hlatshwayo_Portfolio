export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-700/30 border border-slate-600/30 text-slate-300 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
              Available for Collaborations
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-50 tracking-tight leading-tight mb-4 animate-fade-in-up-1">
              Lwazi Hlatshwayo
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 animate-fade-in-up-2">
              Capaciti Intern
            </h2>

            <p className="text-slate-400 italic mb-6 text-lg leading-relaxed animate-fade-in-up-3">
              "Building high-performance network infrastructure and exploring the architectural genius of artificial intelligence."
            </p>

            <p className="text-slate-300 leading-relaxed mb-8 text-base sm:text-lg animate-fade-in-up-4">
              An emerging IT professional specializing in network configuration, resilient infrastructure, and practical AI development. Fueled by a relentless curiosity for how complex systems work, I blend academic foundations in Communication Networks with hands-on AI engineering—including designing custom AI chatbots from scratch. Currently accelerating my skills through an active internship, applying rigorous academic knowledge to real-world systems to build the secure, intelligent infrastructure of tomorrow.
            </p>

            <a
              href="/Lwazi_Hlatshwayo_CV-1.pdf"
              download="Lwazi_Hlatshwayo_CV.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-800 border border-slate-600/50 rounded-lg text-slate-200 font-medium text-sm sm:text-base transition-all duration-300 hover:bg-slate-700 hover:border-slate-500 hover:shadow-lg hover:shadow-slate-900/30 hover:-translate-y-0.5 active:translate-y-0 animate-fade-in-up-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 3H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Right Column - Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-avatar-entrance">
            <div className="relative">
              {/* Expanding ring waves */}
              <div className="absolute inset-0 rounded-full border border-slate-500/20 animate-ring-expand pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-slate-500/15 animate-ring-expand-delay pointer-events-none" />

              {/* Avatar container with glow */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-slate-800 border border-slate-700/50 flex items-center justify-center relative overflow-hidden animate-avatar-glow animate-avatar-float">
                <div className="absolute inset-0 rounded-full bg-slate-700/20 animate-inner-glow" />
                <img
                  src="/69b5d004-0340-4b40-a6e0-4fbcfc419470.png"
                  alt="Lwazi Hlatshwayo"
                  className="relative w-full h-full object-cover"
                />
              </div>

              {/* Decorative concentric rings */}
              <div className="absolute -inset-4 rounded-full border border-slate-600/40 animate-ring-pulse pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-slate-600/20 animate-ring-pulse-delay pointer-events-none" />

              {/* Rotating gradient border effect */}
              <div className="absolute -inset-[2px] rounded-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 animate-gradient-border">
                  <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(148,163,184,0.2) 25%, transparent 50%, rgba(148,163,184,0.2) 75%, transparent 100%)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
