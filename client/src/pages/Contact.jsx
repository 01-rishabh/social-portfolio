import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { api } from '../api.js';

const categories = [
  'Growth & Marketing',
  'WhatsApp Automation',
  'New Initiative Launch',
  'Creative Production / Film',
  'Workshop or Advisory',
  'Something else'
];

const hasAccessKey = Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', category: 'Growth & Marketing', message: '' });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await api.submitContact(form);
      setStatus({ type: 'success', message: "Message received. I'll reply within 24–48 hours." });
      setForm({ name: '', email: '', category: 'Growth & Marketing', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong. Try again.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>
              <span className="line-white">Let's build</span><br />
              <span className="line-gradient">something together.</span>
            </h1>
            <p className="hero-sub">
              Whether you need a growth partner, a filmmaker, or someone who does both — drop a note below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          {!hasAccessKey && (
            <div className="form-status error" style={{ marginBottom: 24 }}>
              <strong>Contact form not configured.</strong> Get a free Web3Forms access key at{' '}
              <a href="https://web3forms.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                web3forms.com
              </a>{' '}
              and paste it into <code>client/.env.local</code> as{' '}
              <code>VITE_WEB3FORMS_ACCESS_KEY=...</code>, then restart <code>npm run dev</code>.
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48 }} className="contact-grid">
            <Reveal>
              <form className="form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@domain.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="category">What's this about?</label>
                  <select
                    id="category"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, stage, and goals..."
                  />
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary" disabled={submitting || !hasAccessKey}>
                    {submitting ? 'Sending…' : 'Send message'}
                  </button>
                  <a className="btn btn-ghost" href="mailto:hello@example.com">Email directly</a>
                </div>
                {status && (
                  <div className={`form-status ${status.type}`}>{status.message}</div>
                )}
              </form>
            </Reveal>

            <Reveal delay={150}>
              <div style={{ display: 'grid', gap: 18 }}>
                <div className="card">
                  <div className="meta">Email</div>
                  <h3 style={{ fontSize: '1.05rem' }}>hello@example.com</h3>
                  <p style={{ fontSize: '0.9rem' }}>Replies usually within 24–48 hours.</p>
                </div>
                <div className="card">
                  <div className="meta">Location</div>
                  <h3 style={{ fontSize: '1.05rem' }}>Delhi / NCR, India</h3>
                  <p style={{ fontSize: '0.9rem' }}>Available pan-India &amp; remote.</p>
                </div>
                <div className="card">
                  <div className="meta">Engagements</div>
                  <div className="pill-list">
                    <span className="tag">Growth Partner (hands-on)</span>
                    <span className="tag">Fractional Director</span>
                    <span className="tag">Creative Producer</span>
                    <span className="tag">Workshop / Advisory</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
