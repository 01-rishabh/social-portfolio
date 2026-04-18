import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export default function CTABanner() {
  return (
    <section>
      <div className="container">
        <Reveal>
          <div className="cta-banner">
            <h2>
              <span className="line-white">Ready to build something</span><br />
              <span className="line-gradient-warm">worth talking about?</span>
            </h2>
            <p className="muted">From growth sprints to cinematic brand films — let's start a conversation.</p>
            <div className="btns">
              <Link to="/contact" className="btn btn-primary">Start a conversation</Link>
              <Link to="/services" className="btn">See my services</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
