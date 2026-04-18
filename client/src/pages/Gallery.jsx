import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { api } from '../api.js';

export default function Gallery() {
  const items = api.gallery();
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(items.map((i) => i.category).filter(Boolean)))];
  const visible = filter === 'all' ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Gallery</span>
            <h1>
              <span className="line-white">Moments from</span><br />
              <span className="line-gradient">the journey.</span>
            </h1>
            <p className="hero-sub">
              Speaking, sets, studios, and in-between.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="pill-list" style={{ marginBottom: 28 }}>
            {categories.map((c) => {
              const isActive = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`btn btn-sm ${isActive ? 'btn-primary' : ''}`}
                >
                  {c[0].toUpperCase() + c.slice(1)}
                </button>
              );
            })}
          </div>
          <div className="gallery-grid">
            {visible.map((g) => (
              <div key={g.id} className="gallery-item" onClick={() => setActive(g)}>
                <img src={g.imageUrl} alt={g.title || ''} loading="lazy" />
                {(g.title || g.caption) && (
                  <div className="gallery-caption">
                    {g.title && <div style={{ fontWeight: 600 }}>{g.title}</div>}
                    {g.caption && <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{g.caption}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <img src={active.imageUrl} alt={active.title || ''} />
            {(active.title || active.caption) && (
              <div className="modal-body">
                {active.title && <h3>{active.title}</h3>}
                {active.caption && <p>{active.caption}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
