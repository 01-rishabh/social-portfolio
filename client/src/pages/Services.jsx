import Reveal from '../components/Reveal.jsx';
import CTABanner from '../components/CTABanner.jsx';
import { api } from '../api.js';

const iconMap = {
  bolt: '⚡',
  funnel: '🌀',
  chat: '💬',
  rocket: '🚀',
  film: '🎬',
  spark: '✨'
};

export default function Services() {
  const items = api.services();

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1>
              <span className="line-white">Pick a partnership,</span><br />
              <span className="line-gradient">not a package.</span>
            </h1>
            <p className="hero-sub">
              Every engagement is scoped to your stage and outcomes. Retainers, sprints, and workshops — choose the shape that fits.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="grid-2">
            {items.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 80}>
                <div className="card">
                  <div className="identity-icon" style={{ marginBottom: 16 }}>{iconMap[s.icon] || '•'}</div>
                  <h3>{s.title}</h3>
                  {s.tagline && <div className="meta">{s.tagline}</div>}
                  <p>{s.description}</p>
                  {s.deliverables?.length > 0 && (
                    <ul style={{ paddingLeft: 18, color: 'var(--text-dim)' }}>
                      {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  )}
                  <div className="tags">
                    {s.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Approach</span>
            <h2>How I work</h2>
          </div>
          <div className="grid-3">
            <Reveal><div className="card"><h3>01. Discover</h3><p>Context, constraints, goals. Honest conversation before commitment.</p></div></Reveal>
            <Reveal delay={100}><div className="card"><h3>02. Scope</h3><p>Outcome-led scope with milestones and measurement.</p></div></Reveal>
            <Reveal delay={200}><div className="card"><h3>03. Ship</h3><p>Weekly cadence. Show-the-work updates. Learn and iterate fast.</p></div></Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
