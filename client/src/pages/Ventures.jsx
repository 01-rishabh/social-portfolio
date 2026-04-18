import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import VenturesList from '../components/VenturesList.jsx';
import CTABanner from '../components/CTABanner.jsx';
import { api } from '../api.js';

export default function Ventures() {
  const [filter, setFilter] = useState('all');
  const items = api.ventures();

  const groups = {
    active: items.filter((i) => i.category === 'active'),
    past: items.filter((i) => i.category === 'past'),
    advisory: items.filter((i) => i.category === 'advisory')
  };

  const visible =
    filter === 'all' ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Ventures</span>
            <h1>
              <span className="line-white">Things I've built,</span><br />
              <span className="line-gradient">run, and advised.</span>
            </h1>
            <p className="hero-sub">
              Nine years of building — across film, education, D2C, and consulting. Here's the full map.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="pill-list" style={{ marginBottom: 32 }}>
            {['all', 'active', 'past', 'advisory'].map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`btn btn-sm ${isActive ? 'btn-primary' : ''}`}
                >
                  {f[0].toUpperCase() + f.slice(1)}
                  <span style={{ opacity: 0.7, fontSize: '0.78rem' }}>
                    {f === 'all' ? items.length : groups[f]?.length || 0}
                  </span>
                </button>
              );
            })}
          </div>
          <VenturesList items={visible} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
