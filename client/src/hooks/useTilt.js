import { useEffect, useRef } from 'react';

export default function useTilt({ max = 8, scale = 1.012, perspective = 900 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let rect = null;
    let frame = 0;
    let active = false;

    const apply = (rx, ry) => {
      el.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`;
    };

    const onEnter = () => {
      rect = el.getBoundingClientRect();
      active = true;
      el.style.transition = 'transform 0.18s ease-out, box-shadow 0.18s ease-out';
    };

    const onMove = (e) => {
      if (!active || !rect) return;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const ry = (px - 0.5) * (max * 2);
        const rx = (0.5 - py) * (max * 2);
        apply(rx, ry);
        el.style.setProperty('--tilt-x', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--tilt-y', `${(py * 100).toFixed(1)}%`);
      });
    };

    const onLeave = () => {
      active = false;
      rect = null;
      el.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.setProperty('--tilt-x', '50%');
      el.style.setProperty('--tilt-y', '50%');
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [max, scale, perspective]);

  return ref;
}
