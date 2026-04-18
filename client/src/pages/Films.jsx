import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import CTABanner from '../components/CTABanner.jsx';
import { api } from '../api.js';

export default function Films() {
  const items = api.films();
  const [active, setActive] = useState(null);

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Films &amp; Podcasts</span>
            <h1>
              <span className="line-white">Stories worth</span><br />
              <span className="line-gradient">remembering.</span>
            </h1>
            <p className="hero-sub">
              Short films, talks, and conversations. Award-recognized at Dada Saheb Phalke International Film Festival.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="grid-2">
            {items.map((f, idx) => (
              <Reveal key={f.id} delay={idx * 70}>
                <div className="card" onClick={() => f.youtubeUrl && setActive(f)} style={{ cursor: f.youtubeUrl ? 'pointer' : 'default' }}>
                  <div className="meta">{f.year} · {f.kind[0].toUpperCase() + f.kind.slice(1)}</div>
                  <h3>{f.title}</h3>
                  {f.role && <div style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: 8 }}>{f.role}</div>}
                  {f.synopsis && <p>{f.synopsis}</p>}
                  {f.awards?.length > 0 && (
                    <ul style={{ paddingLeft: 18, color: 'var(--accent)', fontSize: '0.9rem' }}>
                      {f.awards.map((a) => <li key={a}>🏆 {a}</li>)}
                    </ul>
                  )}
                  <div className="tags">
                    {f.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  {f.youtubeUrl && (
                    <div style={{ marginTop: 16, color: 'var(--accent)', fontSize: '0.9rem' }}>
                      ▶ Watch
                    </div>
                  )}
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
            <div className="video-wrap">
              <iframe
                src={active.youtubeUrl}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="modal-body">
              <h3>{active.title}</h3>
              <div className="meta">{active.year} · {active.role}</div>
              {active.synopsis && <p style={{ marginTop: 8 }}>{active.synopsis}</p>}
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
