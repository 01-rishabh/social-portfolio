import Reveal from './Reveal.jsx';

const variants = ['tag-violet', 'tag-teal', 'tag-amber', 'tag-white'];

export default function VenturesList({ items }) {
  if (!items?.length) return null;
  return (
    <div>
      {items.map((v, idx) => (
        <Reveal key={v.id} delay={idx * 60}>
          <div className="venture">
            <div>
              <h3>{v.name}</h3>
              <div className="venture-role">{v.role}</div>
              {v.description && <p style={{ marginTop: 10 }}>{v.description}</p>}
              {v.outcomes?.length > 0 && (
                <ul>
                  {v.outcomes.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              )}
              <div className="pill-list" style={{ marginTop: 12 }}>
                {v.tags?.map((t, i) => (
                  <span key={t} className={`tag ${variants[i % variants.length]}`}>{t}</span>
                ))}
                {v.website && (
                  <a className="tag tag-teal" href={v.website} target="_blank" rel="noreferrer">
                    Website ↗
                  </a>
                )}
              </div>
            </div>
            <div className="venture-period">{v.period}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
