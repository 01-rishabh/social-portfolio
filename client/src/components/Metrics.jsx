import { api } from '../api.js';
import Reveal from './Reveal.jsx';

export default function Metrics() {
  const metrics = api.metrics();
  if (!metrics.length) return null;

  return (
    <section className="tight">
      <div className="container">
        <Reveal>
          <div className="metrics-grid">
            {metrics.map((m) => (
              <div key={m.id} className="metric">
                <div className="metric-value">
                  {m.value}
                  {m.suffix && <span className="metric-suffix">{m.suffix}</span>}
                </div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
