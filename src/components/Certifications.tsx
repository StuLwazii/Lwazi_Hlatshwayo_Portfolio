import { useState } from 'react';
import { Award, FileCheck, ExternalLink, X } from 'lucide-react';

interface Cert {
  id: number;
  icon: typeof Award;
  title: string;
  issuer: string;
  description: string;
  badge?: string;
  file?: string;
  status: string;
  skills: string[];
}

interface VaultCert {
  title: string;
  issuer: string;
  completed: string;
  verifyUrl: string;
}

const certs: Cert[] = [
  {
    id: 1,
    icon: Award,
    title: 'Google AI Essentials',
    issuer: 'Google',
    description: 'Covers prompt strategies, responsible AI boundaries, and practical applications of generative AI tools in professional workflows.',
    file: 'Lwazi_Hlatshwayo_GoogleAIEssentials.pdf',
    status: 'Verified',
    skills: ['Prompt Engineering', 'Responsible AI', 'Generative AI', 'Workflow Automation'],
  },
  {
    id: 2,
    icon: FileCheck,
    title: 'AI Bootcamp Milestone',
    issuer: 'Coursera',
    description: 'Comprehensive AI bootcamp covering foundational machine learning, neural network architectures, and hands-on model deployment.',
    badge: 'https://www.coursera.org/account/accomplishments/badge/8tZy8QgBS4CWcvEIASuArw',
    status: 'Verified',
    skills: ['Machine Learning', 'Neural Networks', 'Model Deployment', 'Python'],
  },
  {
    id: 3,
    icon: Award,
    title: 'Professional Development Vault',
    issuer: 'Coursera',
    description: 'A curated collection of 10 verified interpersonal competency certificates covering professional communication, leadership, time management, and emotional intelligence.',
    status: '10 Verified',
    skills: ['Communication', 'Leadership', 'Time Management', 'Emotional Intelligence'],
  },
];

const vaultCerts: VaultCert[] = [
  { title: 'Developing Interpersonal Skills', issuer: 'IBM (Authorized on Coursera)', completed: 'May 29, 2026', verifyUrl: 'https://coursera.org/verify/1SC46GVE9QDQ' },
  { title: 'Introduction to Personal Branding', issuer: 'University of Virginia (Authorized on Coursera)', completed: 'June 16, 2026', verifyUrl: 'https://coursera.org/verify/1TGCMAR0WCWG' },
  { title: 'Finding Your Professional Voice: Confidence & Impact', issuer: 'University of London & Royal Central School of Speech and Drama (Authorized on Coursera)', completed: 'June 10, 2026', verifyUrl: 'https://coursera.org/verify/ADH5MZVRR1MR' },
  { title: 'Financial Planning for Young Adults', issuer: 'University of Illinois Urbana-Champaign (Authorized on Coursera)', completed: 'June 16, 2026', verifyUrl: 'https://coursera.org/verify/E0DMXFZVCCBP' },
  { title: 'Active Listening: Enhancing Communication Skills', issuer: 'Starweaver (Authorized on Coursera)', completed: 'May 27, 2026', verifyUrl: 'https://coursera.org/verify/EGJG8Z0B7OQ7' },
  { title: 'Work Smarter, Not Harder: Time Management for Personal & Professional Productivity', issuer: 'University of California, Irvine (Authorized on Coursera)', completed: 'May 29, 2026', verifyUrl: 'https://coursera.org/verify/ESDT23I9VVB2' },
  { title: 'Verbal Communications and Presentation Skills', issuer: 'Starweaver (Authorized on Coursera)', completed: 'May 25, 2026', verifyUrl: 'https://coursera.org/verify/N6187AVJPTDH' },
  { title: 'Leading with Impact: Team Dynamics, Strategy and Ethics', issuer: 'Starweaver (Authorized on Coursera)', completed: 'June 16, 2026', verifyUrl: 'https://coursera.org/verify/NFPYFL5M7VRD' },
  { title: 'Write Professional Emails in English', issuer: 'Georgia Institute of Technology (Authorized on Coursera)', completed: 'May 16, 2026', verifyUrl: 'https://coursera.org/verify/QA26JZTGHN4J' },
  { title: 'Emotional Intelligence in the Workplace', issuer: 'LearnKartS (Authorized on Coursera)', completed: 'June 1, 2026', verifyUrl: 'https://coursera.org/verify/S20V7X2FVQZ4' },
];

export default function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null);
  const [vaultOpen, setVaultOpen] = useState(false);

  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-50 mb-4">
            Verified Certifications
          </h2>
          <div className="w-16 h-1 bg-slate-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => {
            const Icon = cert.icon;
            return (
              <button
                key={cert.id}
                onClick={() => {
                  if (cert.id === 3) {
                    setVaultOpen(true);
                  } else {
                    setSelected(cert);
                  }
                }}
                className="text-left p-6 rounded-xl bg-slate-800 border border-slate-700/30 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-50 text-lg mb-1">{cert.title}</h3>
                <p className="text-slate-400 text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  {cert.status}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Single Cert Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg bg-slate-800 border border-slate-700/50 rounded-2xl shadow-2xl p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-400 mb-4">
              <selected.icon size={28} />
            </div>

            <h3 className="font-semibold text-slate-50 text-2xl mb-1">{selected.title}</h3>
            <p className="text-slate-400 font-medium mb-4">{selected.issuer}</p>

            <p className="text-slate-300 leading-relaxed mb-6">{selected.description}</p>

            <div className="mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                Skills Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-slate-400 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              <span className="text-slate-500 text-sm font-medium">{selected.status}</span>
            </div>

            {selected.badge && (
              <a
                href={selected.badge}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-600 text-white text-sm font-semibold hover:bg-slate-500 transition-colors"
              >
                View Credential Badge
                <ExternalLink size={16} />
              </a>
            )}

            {selected.file && (
              <p className="text-slate-500 text-sm mt-4">
                Credential file: <span className="text-slate-300">{selected.file}</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Vault Modal */}
      {vaultOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setVaultOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-slate-800 border border-slate-700/50 rounded-2xl shadow-2xl p-8 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVaultOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-400 mb-4">
              <Award size={28} />
            </div>

            <h3 className="font-semibold text-slate-50 text-2xl mb-1">Professional Development Vault</h3>
            <p className="text-slate-400 font-medium mb-2">10 Verified Interpersonal Competencies</p>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              <span className="text-slate-500 text-sm font-medium">All Verified on Coursera</span>
            </div>

            <div className="space-y-4">
              {vaultCerts.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-700/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-slate-400">{idx + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-50 text-sm mb-1">{cert.title}</h4>
                      <p className="text-slate-400 text-xs mb-2">{cert.issuer}</p>
                      <p className="text-slate-500 text-xs font-medium mb-3">Completed: {cert.completed}</p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-600 text-white text-xs font-semibold hover:bg-slate-500 transition-colors"
                        >
                          <ExternalLink size={12} />
                          Verify on Coursera
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
