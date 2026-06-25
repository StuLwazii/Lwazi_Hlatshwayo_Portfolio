import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Connect
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-50 mb-4">
            Let's Build Something Together
          </h2>
          <div className="w-16 h-1 bg-slate-500 rounded-full mx-auto" />
        </div>

        <div className="max-w-xl mx-auto space-y-6">
          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700/30">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Email</p>
                <a
                  href="mailto:lwazihla14@gmail.com"
                  className="text-slate-200 hover:text-slate-100 transition-colors font-medium"
                >
                  lwazihla14@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700/30">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Phone</p>
                <a
                  href="tel:0659542748"
                  className="text-slate-200 hover:text-slate-100 transition-colors font-medium"
                >
                  +27 65 954 2748
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700/30">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Location</p>
                <p className="text-slate-200 font-medium">South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
