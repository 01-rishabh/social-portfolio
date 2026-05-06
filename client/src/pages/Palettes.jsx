const palettes = [
  {
    id: 1,
    name: 'Midnight Studio',
    tag: 'Current — premium operator',
    audience: 'Balanced · brand + creator',
    mood: 'Modern, tech-leaning, cinematic dark',
    colors: {
      bg: '#0a0a1a',
      surface: '#0f0f22',
      ink: '#ffffff',
      mute: '#a0a0b8',
      a1: '#7c5cff',
      a2: '#22d3ee',
      cta: '#f4a261'
    },
    grad: 'linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%)',
    ctaGrad: 'linear-gradient(135deg, #f4a261 0%, #c5a3e0 100%)'
  },
  {
    id: 2,
    name: 'Studio Sunset',
    tag: 'Cinematic, creator-warm',
    audience: 'Creator energy with brand polish',
    mood: 'Launch trailer, production house, hot',
    colors: {
      bg: '#1a0e1c',
      surface: '#241324',
      ink: '#fff5ec',
      mute: '#b9a3ad',
      a1: '#ff5d8f',
      a2: '#ffb86b',
      cta: '#7c5cff'
    },
    grad: 'linear-gradient(135deg, #ff5d8f 0%, #ffb86b 100%)',
    ctaGrad: 'linear-gradient(135deg, #7c5cff 0%, #ff5d8f 100%)'
  },
  {
    id: 3,
    name: 'Neon Reel',
    tag: 'Loud, TikTok / Y2K',
    audience: 'Hard creator tilt',
    mood: 'Playful, high-contrast, risky for B2B',
    colors: {
      bg: '#000000',
      surface: '#0a0a0a',
      ink: '#ffffff',
      mute: '#9a9a9a',
      a1: '#c5ff3a',
      a2: '#ff2bd6',
      cta: '#22d3ee'
    },
    grad: 'linear-gradient(135deg, #c5ff3a 0%, #22d3ee 100%)',
    ctaGrad: 'linear-gradient(135deg, #ff2bd6 0%, #c5ff3a 100%)'
  },
  {
    id: 4,
    name: 'Editorial Cream',
    tag: 'Vogue / Stripe trust',
    audience: 'Hard brand-owner tilt',
    mood: 'Magazine, confident, light theme',
    colors: {
      bg: '#f4f1ea',
      surface: '#ffffff',
      ink: '#0e0e16',
      mute: '#5a5a66',
      a1: '#d4451f',
      a2: '#c89b3c',
      cta: '#0e0e16'
    },
    grad: 'linear-gradient(135deg, #d4451f 0%, #c89b3c 100%)',
    ctaGrad: 'linear-gradient(135deg, #0e0e16 0%, #d4451f 100%)'
  },
  {
    id: 5,
    name: 'Mono Mint',
    tag: 'Linear / Vercel minimal',
    audience: 'Trust-first, dev-savvy brands',
    mood: 'Quiet, modern, confidence in restraint',
    colors: {
      bg: '#0b0b0e',
      surface: '#15151b',
      ink: '#fafafa',
      mute: '#8a8a94',
      a1: '#00ffb2',
      a2: '#5cf2c1',
      cta: '#fafafa'
    },
    grad: 'linear-gradient(135deg, #00ffb2 0%, #5cf2c1 100%)',
    ctaGrad: 'linear-gradient(135deg, #fafafa 0%, #00ffb2 100%)'
  },
  {
    id: 6,
    name: 'Forest Cinema',
    tag: 'Premium / nature-cinematic',
    audience: 'Hospitality · wellness · travel brands',
    mood: 'Warm, earthy, brass-on-emerald',
    colors: {
      bg: '#0c1814',
      surface: '#122620',
      ink: '#f1efe5',
      mute: '#9aa89e',
      a1: '#d4a85a',
      a2: '#5fb78c',
      cta: '#d4a85a'
    },
    grad: 'linear-gradient(135deg, #5fb78c 0%, #d4a85a 100%)',
    ctaGrad: 'linear-gradient(135deg, #d4a85a 0%, #f1efe5 100%)'
  },
  {
    id: 7,
    name: 'Tropical Pop',
    tag: 'Lifestyle creator energy',
    audience: 'Travel · food · wellness creators',
    mood: 'Coral + ocean + sun, summery',
    colors: {
      bg: '#021a2a',
      surface: '#052a40',
      ink: '#fefae0',
      mute: '#9bbacc',
      a1: '#ff6b6b',
      a2: '#4ecdc4',
      cta: '#ffd93d'
    },
    grad: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
    ctaGrad: 'linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%)'
  },
  {
    id: 8,
    name: 'Punk Magenta',
    tag: 'Bold beauty / fashion',
    audience: 'D2C beauty · streetwear · launches',
    mood: 'Hot magenta + chrome, in-your-face',
    colors: {
      bg: '#0a000a',
      surface: '#1a081a',
      ink: '#ffffff',
      mute: '#a48aa4',
      a1: '#ff006e',
      a2: '#fb5607',
      cta: '#ffbe0b'
    },
    grad: 'linear-gradient(135deg, #ff006e 0%, #fb5607 100%)',
    ctaGrad: 'linear-gradient(135deg, #ffbe0b 0%, #ff006e 100%)'
  },
  {
    id: 9,
    name: 'Lavender Bloom',
    tag: 'Soft, dreamy, beauty-led',
    audience: 'Beauty · wellness · femme creators',
    mood: 'Pastel-on-deep, romantic and gentle',
    colors: {
      bg: '#14101e',
      surface: '#1f1830',
      ink: '#fff5fa',
      mute: '#b6a8c4',
      a1: '#c8a2ff',
      a2: '#ffb4d8',
      cta: '#fff0c2'
    },
    grad: 'linear-gradient(135deg, #c8a2ff 0%, #ffb4d8 100%)',
    ctaGrad: 'linear-gradient(135deg, #fff0c2 0%, #c8a2ff 100%)'
  },
  {
    id: 10,
    name: 'Solar Indigo',
    tag: 'Cosmic / aspirational',
    audience: 'Edtech · fintech · founder ads',
    mood: 'Deep indigo with solar-yellow signal',
    colors: {
      bg: '#0a0a2a',
      surface: '#101040',
      ink: '#ffffff',
      mute: '#9a9ec8',
      a1: '#4361ee',
      a2: '#ffba08',
      cta: '#f72585'
    },
    grad: 'linear-gradient(135deg, #4361ee 0%, #f72585 100%)',
    ctaGrad: 'linear-gradient(135deg, #ffba08 0%, #f72585 100%)'
  },
  {
    id: 11,
    name: 'Atelier Beige',
    tag: 'Light · premium agency',
    audience: 'Brand owners · enterprise',
    mood: 'Studio paper, terracotta + sage',
    colors: {
      bg: '#ede4d3',
      surface: '#faf6ec',
      ink: '#1a1a1a',
      mute: '#6a665c',
      a1: '#b85042',
      a2: '#6b8e7f',
      cta: '#1a1a1a'
    },
    grad: 'linear-gradient(135deg, #b85042 0%, #6b8e7f 100%)',
    ctaGrad: 'linear-gradient(135deg, #1a1a1a 0%, #b85042 100%)'
  },
  {
    id: 12,
    name: 'Espresso Brutalist',
    tag: 'Brutalist agency',
    audience: 'Independent brands · bold launches',
    mood: 'Burnt orange + electric blue on espresso',
    colors: {
      bg: '#0e0d0a',
      surface: '#18160f',
      ink: '#fafa00',
      mute: '#9c9788',
      a1: '#ff5e1a',
      a2: '#2962ff',
      cta: '#fafa00'
    },
    grad: 'linear-gradient(135deg, #ff5e1a 0%, #2962ff 100%)',
    ctaGrad: 'linear-gradient(135deg, #fafa00 0%, #ff5e1a 100%)'
  }
];

function pickInk(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((x) => x + x).join('') : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.55 ? '#0e0e16' : '#ffffff';
}

function Swatch({ hex, label }) {
  return (
    <div className="palettes-swatch" style={{ background: hex, color: pickInk(hex) }}>
      <span className="palettes-swatch__label">{label}</span>
      <span className="palettes-swatch__hex">{hex}</span>
    </div>
  );
}

function PaletteCard({ p }) {
  const { colors: c, grad, ctaGrad } = p;
  const onDark = pickInk(c.bg) === '#ffffff';
  const ctaInk = pickInk(c.cta);
  return (
    <article
      className="palettes-card"
      style={{
        background: c.bg,
        color: c.ink,
        borderColor: onDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
      }}
    >
      <header className="palettes-card__head">
        <div>
          <span className="palettes-card__tag" style={{ color: c.a2 }}>
            Option {String(p.id).padStart(2, '0')} · {p.tag}
          </span>
          <h3 style={{ color: c.ink }}>{p.name}</h3>
          <p style={{ color: c.mute }}>{p.mood}</p>
        </div>
        <div
          className="palettes-card__chip"
          style={{
            background: onDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
            color: c.mute,
            borderColor: onDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }}
        >
          {p.audience}
        </div>
      </header>

      <div className="palettes-swatches">
        <Swatch hex={c.bg} label="bg" />
        <Swatch hex={c.surface} label="surface" />
        <Swatch hex={c.ink} label="ink" />
        <Swatch hex={c.a1} label="accent 1" />
        <Swatch hex={c.a2} label="accent 2" />
        <Swatch hex={c.cta} label="cta" />
      </div>

      <div
        className="palettes-mock"
        style={{
          background: c.surface,
          borderColor: onDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
        }}
      >
        <span className="palettes-mock__eyebrow" style={{ color: c.a2 }}>
          Creator marketing studio
        </span>
        <h4 style={{ color: c.ink }}>
          Turn creators into{' '}
          <span
            style={{
              background: grad,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            brand growth engines.
          </span>
        </h4>
        <p style={{ color: c.mute }}>
          Launch films, always-on UGC, founder voice, lead funnels — one studio, every layer.
        </p>
        <div className="palettes-mock__row">
          <button
            type="button"
            className="palettes-mock__cta"
            style={{
              background: ctaGrad,
              color: ctaInk,
              borderColor: 'transparent'
            }}
          >
            Book a brand call
          </button>
          <button
            type="button"
            className="palettes-mock__btn"
            style={{
              borderColor: onDark ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.16)',
              color: c.ink,
              background: 'transparent'
            }}
          >
            See services
          </button>
        </div>
        <div className="palettes-mock__tags">
          <span style={{ background: hexAlpha(c.a1, 0.14), color: c.a1, borderColor: hexAlpha(c.a1, 0.3) }}>
            Creator films
          </span>
          <span style={{ background: hexAlpha(c.a2, 0.14), color: c.a2, borderColor: hexAlpha(c.a2, 0.3) }}>
            UGC
          </span>
          <span style={{ background: hexAlpha(c.cta, 0.14), color: c.cta, borderColor: hexAlpha(c.cta, 0.3) }}>
            Performance
          </span>
        </div>
      </div>

      <div
        className="palettes-mock palettes-mock--gradient"
        style={{ background: grad, color: pickInk(c.a1), borderColor: 'transparent' }}
      >
        <span
          className="palettes-mock__eyebrow"
          style={{ color: pickInk(c.a1) === '#ffffff' ? 'rgba(255,255,255,0.7)' : 'rgba(14,14,22,0.6)' }}
        >
          Identity gradient
        </span>
        <strong>{p.name} signature</strong>
        <small>{c.a1} → {c.a2}</small>
      </div>
    </article>
  );
}

function hexAlpha(hex, a) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((x) => x + x).join('') : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default function Palettes() {
  return (
    <section className="palettes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pick a direction</span>
          <h2>
            <span className="line-white">Color & design</span>{' '}
            <span className="line-gradient">options.</span>
          </h2>
          <p>
            Each card shows the palette applied to a mini hero, CTA, tags, and the identity gradient.
            Tell me the option number and I'll wire it through the whole app.
          </p>
        </div>
        <div className="palettes-grid">
          {palettes.map((p) => (
            <PaletteCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
