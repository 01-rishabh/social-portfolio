import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/ventures', label: 'Ventures' },
  { to: '/films', label: 'Films & Podcasts' },
  { to: '/thoughts', label: 'Thoughts' },
  { to: '/gallery', label: 'Gallery' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">RB</Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta">Work with me</Link>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
