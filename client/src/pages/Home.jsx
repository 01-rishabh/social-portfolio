import { Link } from 'react-router-dom';
import Metrics from '../components/Metrics.jsx';
import WhatIDo from '../components/WhatIDo.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABanner from '../components/CTABanner.jsx';
import Reveal from '../components/Reveal.jsx';
import { api } from '../api.js';

const specialties = [
  { label: 'Growth & Lifecycle', variant: 'tag-violet' },
  { label: 'Filmmaker', variant: 'tag-teal' },
  { label: 'WhatsApp Automation', variant: 'tag-amber' },
  { label: '0-to-1 Initiatives', variant: 'tag-white' },
  { label: 'GTM Storytelling', variant: 'tag-violet' }
];

export default function Home() {
  const ventures = api.ventures('active').slice(0, 4);
  const talk = api.films('talk')[0];

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <div className="hero-tagline">
              Lawyer by education<span className="dot">•</span>
              Marketer by profession<span className="dot">•</span>
              Filmmaker by passion
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1>
              <span className="line-white">Growth, engineered.</span><br />
              <span className="line-gradient">Stories, crafted.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-sub">
              250Cr+ in revenue generated. Award-winning filmmaker. I bring strategy and storytelling to everything I build — from scaling funnels 16x to producing films at Dada Saheb Phalke Film Festival.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">Let's build together</Link>
              <Link to="/about" className="btn">My story</Link>
              <Link to="/films" className="btn">Watch my films</Link>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="hero-specialties">
              {specialties.map((s) => (
                <span key={s.label} className={`tag ${s.variant}`}>{s.label}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Metrics />

      <section className="tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Currently building</span>
            <h2>
              <span className="line-white">Ventures &amp;</span>{' '}
              <span className="line-gradient">specialties.</span>
            </h2>
          </div>
          <div className="grid-2">
            {ventures.map((v, idx) => (
              <Reveal key={v.id} delay={idx * 80}>
                <Link to="/ventures" className="card" style={{ display: 'block' }}>
                  <div className="meta">{v.period}</div>
                  <h3>{v.name}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{v.role}</p>
                  <div className="tags">
                    {v.tags?.map((t, i) => <span key={t} className={`tag ${tagVariant(i)}`}>{t}</span>)}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatIDo />
      <Testimonials />

      {talk?.youtubeUrl && (
        <section>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Featured</span>
              <h2>
                <span className="line-white">{talk.title.split(' — ')[0]}</span>
                {talk.title.includes(' — ') && (
                  <>
                    {' — '}
                    <span className="line-gradient">{talk.title.split(' — ')[1]}</span>
                  </>
                )}
              </h2>
              <p>{talk.synopsis}</p>
            </div>
            <Reveal>
              <div className="video-wrap">
                <iframe
                  src={talk.youtubeUrl}
                  title={talk.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}

function tagVariant(i) {
  return ['tag-violet', 'tag-teal', 'tag-amber', 'tag-white'][i % 4];
}
