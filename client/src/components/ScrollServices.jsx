import { useEffect, useRef, useState } from 'react';

const services = [
  {
    kicker: 'Creator films',
    title: 'Cinematic ad cuts brands proudly post.',
    copy: 'Concepts, casting, on-set direction, and finishing — your launch deserves story, not just shots.',
    chips: ['Concept + script', 'Direction', 'Color + sound', 'Cutdowns x6'],
    swatch: 'linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%)',
    glyph: 'film',
    metric: { label: 'Watch-thru', value: '72%' }
  },
  {
    kicker: 'Always-on UGC',
    title: 'A creator network that ships content every week.',
    copy: 'Vetted creators across niches, briefed in your tone, producing reels and shorts that actually convert.',
    chips: ['Creator casting', 'Hooks library', 'Reel pipeline', 'Usage rights'],
    swatch: 'linear-gradient(135deg, #22d3ee 0%, #c5a3e0 100%)',
    glyph: 'reel',
    metric: { label: 'Saves', value: '38.2K' }
  },
  {
    kicker: 'Founder voice',
    title: 'Podcasts, POV cuts, and founder ads that build trust.',
    copy: 'Build the founder as the brand. Studio sessions, POV edits, and short-form ads that book qualified calls.',
    chips: ['Studio shoots', 'POV edits', 'Cold-ad cuts', 'LinkedIn drops'],
    swatch: 'linear-gradient(135deg, #f4a261 0%, #c5a3e0 100%)',
    glyph: 'mic',
    metric: { label: 'Pipeline lift', value: '+62%' }
  },
  {
    kicker: 'WhatsApp funnels',
    title: 'Lead capture that closes inside the chat.',
    copy: 'WhatsApp flows tied to your CRM — qualify, nurture, and route hot leads to your sales team automatically.',
    chips: ['Click-to-chat ads', 'Auto-nurture', 'CRM sync', 'Live agents'],
    swatch: 'linear-gradient(135deg, #22d3ee 0%, #7c5cff 100%)',
    glyph: 'chat',
    metric: { label: 'CPL', value: '-41%' }
  },
  {
    kicker: 'Performance loop',
    title: 'Paid + organic running together, on one dashboard.',
    copy: 'Concept testing, media buying, weekly recuts, and a pipeline read your CMO will quote in board decks.',
    chips: ['Hook testing', 'Media buying', 'Weekly recuts', 'Pipeline reads'],
    swatch: 'linear-gradient(135deg, #7c5cff 0%, #f4a261 100%)',
    glyph: 'chart',
    metric: { label: 'ROAS', value: '4.6x' }
  }
];

function clamp(v, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v));
}

function Glyph({ name }) {
  const common = { width: 44, height: 44, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'film':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
        </svg>
      );
    case 'reel':
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="3" />
          <circle cx="12" cy="17.5" r="0.6" fill="currentColor" />
          <path d="M9 7h6" />
        </svg>
      );
    case 'mic':
      return (
        <svg {...common}>
          <rect x="9" y="2.5" width="6" height="11" rx="3" />
          <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z" />
          <path d="M8.5 9h7M8.5 12h4" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="M6 16V11M10 16V7M14 16v-6M18 16v-9" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ScrollServices() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setProgress(0.5);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      setProgress(clamp(-rect.top / travel));
    };
    const req = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    req();
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', req);
      window.removeEventListener('resize', req);
    };
  }, []);

  const N = services.length;
  const segment = 1 / N;
  const activeIdx = Math.min(N - 1, Math.floor(progress * N));

  return (
    <section className="scroll-services" ref={sectionRef} aria-labelledby="scroll-services-title">
      <div className="scroll-services__stage">
        <div className="scroll-services__shell">
          <div className="scroll-services__intro">
            <span className="eyebrow">Services for brands</span>
            <h2 id="scroll-services-title">
              <span className="line-white">A studio built for the</span>{' '}
              <span className="line-gradient">creator economy.</span>
            </h2>
            <p>
              Five engagement modes — pick one or stack them. Every service is run by a senior team
              with a creator-first lens, briefed in your brand tone, measured against pipeline.
            </p>
            <div className="scroll-services__active">
              <span className="scroll-services__active-num">
                {String(activeIdx + 1).padStart(2, '0')}
                <i>/{String(N).padStart(2, '0')}</i>
              </span>
              <div>
                <small>Now showing</small>
                <strong>{services[activeIdx].kicker}</strong>
              </div>
            </div>
            <div className="scroll-services__rail" aria-hidden="true">
              {services.map((s, i) => (
                <span key={s.kicker} className={i === activeIdx ? 'on' : ''} />
              ))}
            </div>
            <div className="scroll-services__hint" aria-hidden="true">
              <span /> Scroll to flip
            </div>
          </div>

          <div className="scroll-services__deck" aria-hidden="true">
            {services.map((s, i) => {
              const center = (i + 0.5) * segment;
              const delta = (progress - center) / segment;
              const visible = Math.abs(delta) < 0.85;
              const phase = clamp(0.5 + delta, -0.4, 1.4);
              const ty = -delta * 70;
              const rot = delta * 22;
              const rotY = -delta * 12;
              const scl = 1 - Math.min(0.28, Math.abs(delta) * 0.42);
              const opa = visible ? clamp(1 - Math.abs(delta) * 1.7) : 0;
              const blur = Math.min(8, Math.abs(delta) * 12);
              const z = 100 - Math.round(Math.abs(delta) * 40);

              return (
                <article
                  className={`srv-card ${i === activeIdx ? 'is-active' : ''}`}
                  key={s.kicker}
                  style={{
                    '--y': `${ty.toFixed(2)}vh`,
                    '--rot': `${rot.toFixed(2)}deg`,
                    '--rotY': `${rotY.toFixed(2)}deg`,
                    '--scl': scl.toFixed(3),
                    '--opa': opa.toFixed(3),
                    '--blur': `${blur.toFixed(1)}px`,
                    '--swatch': s.swatch,
                    zIndex: z,
                    pointerEvents: i === activeIdx ? 'auto' : 'none'
                  }}
                >
                  <div className="srv-card__ribbon">
                    Service {String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                  </div>
                  <div className="srv-card__preview">
                    <div className="srv-card__shimmer" />
                    <div className="srv-card__grid" />
                    <div className="srv-card__glyph">
                      <Glyph name={s.glyph} />
                    </div>
                    <div className="srv-card__waveform" aria-hidden="true">
                      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
                    </div>
                    <div className="srv-card__live">
                      <i /> LIVE
                    </div>
                    <div className="srv-card__metric">
                      <small>{s.metric.label}</small>
                      <strong>{s.metric.value}</strong>
                    </div>
                  </div>
                  <div className="srv-card__body">
                    <span className="srv-card__kicker">{s.kicker}</span>
                    <h3>{s.title}</h3>
                    <p>{s.copy}</p>
                    <div className="srv-card__chips">
                      {s.chips.map((c) => (
                        <span key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
            <div className="scroll-services__halo" />
          </div>
        </div>
      </div>
    </section>
  );
}
