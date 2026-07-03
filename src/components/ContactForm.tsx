import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, User, MessageSquare } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzzgqkgr';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lwazihla14@gmail.com',
    href: 'mailto:lwazihla14@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+27 65 954 2748',
    href: 'tel:0659542748',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'South Africa',
    href: null,
  },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setStatusMessage(
          data?.errors?.[0]?.message ||
            'Something went wrong. Please try again or email me directly.'
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-400 dark:text-slate-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Connect
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-slate-50 mb-4">
            Let's Build Something Together
          </h2>
          <div className="w-16 h-1 bg-slate-300 dark:bg-slate-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/30 transition-colors duration-200 h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">
                        {item.label}
                      </p>
                      <p className="text-slate-800 dark:text-slate-200 font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block hover:scale-[1.02] transition-transform duration-200"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/30 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-3 top-3.5 text-slate-400 pointer-events-none"
                  />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800 dark:bg-slate-700 text-white font-semibold hover:bg-slate-700 dark:hover:bg-slate-600 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                    Send Message
                  </>
                )}
              </button>

              {/* Status message */}
              {status === 'success' && (
                <div className="animate-status-in flex items-start gap-2.5 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-sm">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="animate-status-in flex items-start gap-2.5 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
