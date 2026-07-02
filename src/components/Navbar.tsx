import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0b111e]/80 backdrop-blur-md border-b border-slate-800/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#home');
            }}
            className="flex items-center gap-1 font-display font-bold text-xl text-slate-50 tracking-tight"
          >
            LH<span className="text-slate-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0659542748"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30 text-slate-300 hover:bg-slate-700/50 border border-slate-600/30 text-sm font-medium transition-colors duration-200"
            >
              <Phone size={16} />
              Quick Call
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-700/30 text-slate-300 hover:bg-slate-700/50 border border-slate-600/30 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-slate-50 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 bg-[#0b111e]/95 backdrop-blur-lg transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="text-lg font-medium text-slate-200 hover:text-slate-100 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0659542748"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-700/30 text-slate-300 hover:bg-slate-700/50 border border-slate-600/30 text-base font-medium transition-colors duration-200 mt-4"
          >
            <Phone size={18} />
            Quick Call
          </a>
        </div>
      </div>
    </nav>
  );
}
