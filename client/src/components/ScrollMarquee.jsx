import Reveal from './Reveal.jsx';

const rowOne = [
  'Creator films',
  'Always-on UGC',
  'Founder POV cuts',
  'WhatsApp funnels',
  'Performance ads',
  'Launch sprints',
  'Brand documentaries',
  'Partnership decks'
];

const rowTwo = [
  'D2C launches',
  'Beauty & wellness',
  'B2B founders',
  'Travel & lifestyle',
  'Hospitality',
  'Edtech rollouts',
  'Fintech storytelling',
  'Food creators'
];

function Track({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}>
      {doubled.map((label, idx) => (
        <span className="marquee__chip" key={`${label}-${idx}`}>
          <span className="marquee__dot" />
          {label}
        </span>
      ))}
    </div>
  );
}

export default function ScrollMarquee() {
  return (
    <section className="brand-marquee">
      <div className="container">
        <Reveal>
          <div className="brand-marquee__head">
            <span className="eyebrow">A studio brands trust with their launch</span>
            <h2>
              <span className="line-white">Modern brands ship faster</span>{' '}
              <span className="line-gradient">when creators run point.</span>
            </h2>
            <p>
              We pair brand owners with the right creators, build the campaign system,
              and stay on the dashboard until the numbers move.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="marquee" aria-hidden="true">
        <Track items={rowOne} />
        <Track items={rowTwo} reverse />
      </div>
    </section>
  );
}
