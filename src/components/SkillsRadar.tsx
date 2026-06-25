const labels = [
  'Network Config',
  'Distributed Systems',
  'Infra Automation',
  'Cisco Architecture',
  'Chatbot Eng',
  'Model Architectures',
  'Automation Workflows',
  'System Design',
];

const networkData = [90, 85, 80, 85, 0, 0, 0, 0];
const aiData = [0, 0, 0, 0, 90, 75, 80, 80];

const size = 420;
const cx = size / 2;
const cy = size / 2;
const maxR = size / 2 - 60;
const levels = 5;
const n = labels.length;

function getPoints(data: number[]) {
  return data.map((val, i) => {
    const angle = ((i * 2 * Math.PI) / n) - Math.PI / 2;
    const r = (maxR * val) / 100;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
}

const networkPoints = getPoints(networkData);
const aiPoints = getPoints(aiData);

const networkPath = networkPoints.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z';
const aiPath = aiPoints.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z';

export default function SkillsRadar() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-400 font-semibold text-sm tracking-wider uppercase mb-3">
            Capabilities
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-50 mb-4">
            Skills Radar
          </h2>
          <div className="w-16 h-1 bg-slate-500 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[420px] flex justify-center">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto">
              {/* Grid levels */}
              {Array.from({ length: levels }).map((_, i) => {
                const r = (maxR * (i + 1)) / levels;
                const points = Array.from({ length: n }).map((_, j) => {
                  const angle = ((j * 2 * Math.PI) / n) - Math.PI / 2;
                  return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
                }).join(' ');
                return <polygon key={i} points={points} fill="none" stroke="rgba(148,163,184,0.12)" strokeWidth={1} />;
              })}

              {/* Axes */}
              {Array.from({ length: n }).map((_, i) => {
                const angle = ((i * 2 * Math.PI) / n) - Math.PI / 2;
                const x = cx + maxR * Math.cos(angle);
                const y = cy + maxR * Math.sin(angle);
                return (
                  <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(148,163,184,0.12)" strokeWidth={1} />
                );
              })}

              {/* Labels */}
              {labels.map((label, i) => {
                const angle = ((i * 2 * Math.PI) / n) - Math.PI / 2;
                const lx = cx + (maxR + 28) * Math.cos(angle);
                const ly = cy + (maxR + 28) * Math.sin(angle);
                return (
                  <text key={i} x={lx} y={ly} fill="#94a3b8" fontSize="12" textAnchor="middle" dominantBaseline="middle">
                    {label}
                  </text>
                );
              })}

              {/* Network polygon */}
              <path d={networkPath} fill="rgba(148,163,184,0.15)" stroke="#94a3b8" strokeWidth={2} />
              {networkPoints.map((p, i) => (
                networkData[i] > 0 && <circle key={`n-${i}`} cx={p.x} cy={p.y} r={4} fill="#94a3b8" />
              ))}

              {/* AI polygon */}
              <path d={aiPath} fill="rgba(100,116,139,0.15)" stroke="#64748b" strokeWidth={2} />
              {aiPoints.map((p, i) => (
                aiData[i] > 0 && <circle key={`a-${i}`} cx={p.x} cy={p.y} r={4} fill="#64748b" />
              ))}

              {/* Center dot */}
              <circle cx={cx} cy={cy} r={3} fill="#94a3b8" />
            </svg>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-slate-400" />
              <span className="text-slate-300 text-sm font-medium">Network Core</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-slate-500" />
              <span className="text-slate-300 text-sm font-medium">AI Frameworks</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
            {[
              { label: 'Network Config', value: 90 },
              { label: 'Distributed Systems', value: 85 },
              { label: 'Infra Automation', value: 80 },
              { label: 'Cisco Architecture', value: 85 },
              { label: 'Chatbot Eng', value: 90 },
              { label: 'Model Architectures', value: 75 },
              { label: 'Automation Workflows', value: 80 },
              { label: 'System Design', value: 80 },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-800 border border-slate-700/30"
              >
                <p className="text-xs text-slate-400 mb-2">{item.label}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-slate-500"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-300 font-semibold">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
