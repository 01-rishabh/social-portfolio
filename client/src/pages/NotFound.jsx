import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container text-center">
        <span className="eyebrow">404</span>
        <h1>
          <span className="line-white">Nothing</span>{' '}
          <span className="line-gradient">here yet.</span>
        </h1>
        <p className="hero-sub" style={{ margin: '20px auto' }}>
          The page you're looking for doesn't exist — or hasn't been built.
        </p>
        <Link to="/" className="btn btn-primary">Back home</Link>
      </div>
    </section>
  );
}
