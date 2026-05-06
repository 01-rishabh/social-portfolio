import { Link } from 'react-router-dom';
import Metrics from '../components/Metrics.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABanner from '../components/CTABanner.jsx';
import ScrollMarquee from '../components/ScrollMarquee.jsx';
import ScrollServices from '../components/ScrollServices.jsx';
import Reveal from '../components/Reveal.jsx';
import useTilt from '../hooks/useTilt.js';
import { api } from '../api.js';

const specialties = [
  { label: 'Creator Films', variant: 'tag-violet' },
  { label: 'Always-on UGC', variant: 'tag-teal' },
  { label: 'Founder Voice', variant: 'tag-amber' },
  { label: 'WhatsApp Funnels', variant: 'tag-white' },
  { label: 'Performance Loop', variant: 'tag-violet' }
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
              Creator marketing studio<span className="dot">•</span>
              Brand storytelling<span className="dot">•</span>
              Revenue-led content
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1>
              <span className="line-white">Turn creators into</span><br />
              <span className="line-gradient">brand growth engines.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-sub">
              We pair brand owners with the right creators, build the campaign system, and stay on the
              dashboard until the numbers move. Launch films, always-on UGC, founder voice, lead funnels,
              performance media — one studio, every layer.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-ctas">
              <Link
                to="/contact"
                className="btn btn-primary is-magnetic"
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
              >
                Book a brand call
              </Link>
              <Link to="/about" className="btn">Our story</Link>
              <Link to="/films" className="btn">Watch campaigns</Link>
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

      <ScrollMarquee />

      <ScrollServices />

      <Metrics />

      <section className="tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Currently building</span>
            <h2>
              <span className="line-white">Ventures &amp;</span>{' '}
              <span className="line-gradient">growth systems.</span>
            </h2>
            <p>
              A mix of campaigns, content products, and service layers designed to make brands feel bigger,
              sharper, and easier to buy from.
            </p>
          </div>
          <div className="grid-2">
            {ventures.map((v, idx) => (
              <Reveal key={v.id} delay={idx * 80}>
                <VentureCard venture={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

function VentureCard({ venture }) {
  const ref = useTilt({ max: 6, scale: 1.012 });
  return (
    <Link
      to="/ventures"
      ref={ref}
      className="card tilt-card"
      style={{ display: 'block' }}
    >
      <div className="meta">{venture.period}</div>
      <h3>{venture.name}</h3>
      <p style={{ fontSize: '0.95rem' }}>{venture.role}</p>
      <div className="tags">
        {venture.tags?.map((t, i) => (
          <span key={t} className={`tag ${tagVariant(i)}`}>{t}</span>
        ))}
      </div>
    </Link>
  );
}

function handleMagnetic(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const px = ((e.clientX - rect.left) / rect.width) * 100;
  const py = ((e.clientY - rect.top) / rect.height) * 100;
  const dx = (px - 50) * 0.18;
  const dy = (py - 50) * 0.18;
  el.style.setProperty('--mag-x', `${px}%`);
  el.style.setProperty('--mag-y', `${py}%`);
  el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
}

function resetMagnetic(e) {
  const el = e.currentTarget;
  el.style.transform = '';
  el.style.setProperty('--mag-x', '50%');
  el.style.setProperty('--mag-y', '50%');
}

function tagVariant(i) {
  return ['tag-violet', 'tag-teal', 'tag-amber', 'tag-white'][i % 4];
}
