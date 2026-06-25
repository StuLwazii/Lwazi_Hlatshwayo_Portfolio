import { Linkedin, Github } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/50 bg-[#0b111e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="font-display font-bold text-xl text-slate-50 tracking-tight mb-4 inline-block"
            >
              LH<span className="text-slate-400">.</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lwazi Hlatshwayo — Networks & AI. Building the infrastructure of tomorrow at the intersection of connectivity and intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-50 font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-slate-50 font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0659542748"
                  className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                >
                  +27 65 954 2748
                </a>
              </li>
              <li>
                <a
                  href="mailto:lwazihla14@gmail.com"
                  className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                >
                  lwazihla14@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-slate-50 font-semibold text-sm uppercase tracking-wider mb-4">
              Social
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/lwazi-hlatshwayo-7169031b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-600/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/StuLwazii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-600/50 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-slate-500 text-sm">
            &copy; 2026 Lwazi Hlatshwayo. All rights reserved. Crafted at the intersection of Networks & AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
