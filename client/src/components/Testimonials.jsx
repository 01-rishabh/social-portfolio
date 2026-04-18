import { api } from '../api.js';
import Reveal from './Reveal.jsx';

const variants = ['violet', 'teal', 'amber', 'white'];

function initials(name) {
  if (!name) return '??';
  const cleaned = name.replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, '');
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Testimonials() {
  const items = api.testimonials();
  if (!items.length) return null;

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>
            <span className="line-white">Words from those</span><br />
            <span className="line-gradient">I've worked with.</span>
          </h2>
        </div>
        <div className="testimonials-grid">
          {items.map((t, idx) => {
            const variant = variants[idx % variants.length];
            return (
              <Reveal key={t.id} delay={idx * 80}>
                <div className="testimonial">
                  <div className="testimonial-mark">“</div>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-footer">
                    <div className={`avatar avatar-${variant}`}>
                      {initials(t.author)}
                    </div>
                    <div>
                      <div className="testimonial-author">{t.author}</div>
                      <div className="testimonial-role">
                        {[t.role, t.organization].filter(Boolean).join(' · ')}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
