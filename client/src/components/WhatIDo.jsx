import Reveal from './Reveal.jsx';

const identities = [
  {
    icon: '⚡',
    title: 'Growth Operator',
    description:
      "Funnels, lifecycle, WhatsApp automation, and experiment-driven growth. Scale marketing revenue 16x and manage 2Cr+ monthly ad spend.",
    tags: [
      { label: 'Lifecycle', variant: 'tag-violet' },
      { label: 'Funnels', variant: 'tag-teal' },
      { label: 'Automation', variant: 'tag-amber' }
    ]
  },
  {
    icon: '🎬',
    title: 'Filmmaker',
    description:
      'Co-Founder, Producer & Lead Actor at Dusk N Dawn Entertainment. DSPIFF jury-mention recipient. Stories worth remembering.',
    tags: [
      { label: 'DSPIFF Award-Winning', variant: 'tag-teal' },
      { label: 'Producer', variant: 'tag-violet' },
      { label: 'Short Films', variant: 'tag-white' }
    ]
  },
  {
    icon: '🚀',
    title: 'Builder',
    description:
      'From launching new brands to going independent as a consultant — ideas from zero to one with sprint cadence and clear execution.',
    tags: [
      { label: '0-to-1 Consulting', variant: 'tag-amber' },
      { label: 'AI-First', variant: 'tag-violet' },
      { label: 'GTM', variant: 'tag-teal' }
    ]
  }
];

export default function WhatIDo() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What I do</span>
          <h2>
            <span className="line-white">Three identities.</span><br />
            <span className="line-gradient">One operator.</span>
          </h2>
          <p>Growth &amp; Lifecycle · Filmmaker · WhatsApp Automation · 0-to-1 Initiatives · GTM Storytelling</p>
        </div>
        <div className="identity-grid">
          {identities.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 100}>
              <div className="identity">
                <div className="identity-icon">{i.icon}</div>
                <h3>{i.title}</h3>
                <p>{i.description}</p>
                <div className="pill-list">
                  {i.tags.map((t) => (
                    <span key={t.label} className={`tag ${t.variant}`}>{t.label}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
