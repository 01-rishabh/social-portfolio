import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import CTABanner from '../components/CTABanner.jsx';
import { api } from '../api.js';

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function Thoughts() {
  const items = api.thoughts();
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Thoughts</span>
            <h1>
              <span className="line-white">Notes on growth,</span><br />
              <span className="line-gradient">stories, and building.</span>
            </h1>
            <p className="hero-sub">
              Working notes. Frameworks. Teardowns. Lessons from scaling funnels, shipping films, and going independent.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="grid-2">
            {items.map((t, idx) => (
              <Reveal key={t.id} delay={idx * 70}>
                <div className="card" style={{ cursor: 'pointer' }} onClick={() => setActive(t)}>
                  <div className="meta">{formatDate(t.publishedAt)} · {t.readTime}</div>
                  <h3>{t.title}</h3>
                  <p>{t.excerpt}</p>
                  <div className="tags">
                    {t.tags?.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <div className="modal-body" style={{ padding: '36px' }}>
              <div className="meta">{formatDate(active.publishedAt)} · {active.readTime}</div>
              <h2 style={{ marginTop: 8 }}>{active.title}</h2>
              <p style={{ color: 'var(--text)', fontSize: '1.05rem', marginTop: 20 }}>{active.excerpt}</p>
              <div className="divider" />
              <p>{active.body}</p>
              <div className="tags">
                {active.tags?.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
