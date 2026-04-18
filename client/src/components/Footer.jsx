const socials = [
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: 'in' },
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: 'IG' },
  { href: 'https://x.com/', label: 'X', icon: 'X' },
  { href: 'https://www.youtube.com/', label: 'YouTube', icon: 'YT' }
];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">RB</div>
          <div className="muted">© {new Date().getFullYear()} Portfolio. Built with creative obsession.</div>
        </div>
        <div className="social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <span>{s.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
