import Reveal from '../components/Reveal.jsx';
import CTABanner from '../components/CTABanner.jsx';
import { api } from '../api.js';

export default function About() {
  const timeline = api.timeline();

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About</span>
            <h1>
              <span className="line-white">Small town kid.</span><br />
              <span className="line-gradient">Big bet operator.</span>
            </h1>
            <p className="hero-sub" style={{ marginTop: 20 }}>
              From Hisar, Haryana to an award-winning filmmaker and growth leader — I believe execution beats everything. Legal training, marketing rigor, cinematic storytelling, and an AI-first operating style.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="grid-2">
            <Reveal>
              <div>
                <span className="eyebrow">Origin</span>
                <h2 style={{ fontSize: '2rem' }}>Where I come from</h2>
                <p>
                  Hisar, Haryana. School President, NCC Squadron Cadet Commander, state-level athlete. Then BA LLB (Hons) from Christ University, Bangalore — combining legal frameworks with marketing execution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <span className="eyebrow">Operating Philosophy</span>
                <h2 style={{ fontSize: '2rem' }}>AI-first. Sprint cadence. Ship fast.</h2>
                <p>
                  I use AI to accelerate research, creative work, and automation — without losing quality. Every sprint has a clear outcome. Every experiment has a next step.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Timeline</span>
            <h2>The journey so far</h2>
          </div>
          <Reveal>
            <div className="timeline">
              {timeline.map((t) => (
                <div key={t.id} className="timeline-item">
                  <div className="timeline-year">{t.year}</div>
                  <h4>{t.title}</h4>
                  {t.description && <p>{t.description}</p>}
                  <div className="pill-list">
                    {t.tags?.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Education</span>
            <h2>Always compounding</h2>
          </div>
          <div className="grid-3">
            <Reveal>
              <div className="card">
                <h3>BA LLB (Hons)</h3>
                <div className="meta">Christ University, Bangalore</div>
                <p>Legal frameworks, negotiation, structured thinking.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card">
                <h3>Digital Marketing</h3>
                <div className="meta">Purdue University</div>
                <p>Formal training in the discipline I live and breathe.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="card">
                <h3>20+ Certifications</h3>
                <div className="meta">Yale · ISB · Duke · Others</div>
                <p>Ongoing coursework across strategy, leadership, and execution.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
