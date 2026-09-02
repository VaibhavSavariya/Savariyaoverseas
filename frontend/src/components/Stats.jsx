import { useEffect, useRef, useState } from 'react';
import { stats } from '../lib/content';

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export default function Stats({ light = false }) {
  return (
    <div
      data-testid="stats-strip"
      className={`grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${
        light ? 'divide-white/10' : 'divide-slate-200'
      }`}
    >
      {stats.map((s) => (
        <div key={s.label} className="px-2 py-8 sm:px-8 sm:py-2 first:sm:pl-0 last:sm:pr-0">
          <p
            className={`font-display text-[2.6rem] font-extrabold leading-none tracking-tight sm:text-5xl ${
              light ? 'text-white' : 'text-navy'
            }`}
          >
            {s.value === null ? s.display : <Counter target={s.value} suffix={s.suffix} />}
          </p>
          <p className="mt-3 font-display text-[12px] font-bold uppercase tracking-overline text-gold">
            {s.label}
          </p>
          <p className={`mt-2 text-[14px] ${light ? 'text-white/60' : 'text-slate-500'}`}>{s.sub}</p>
        </div>
      ))}
    </div>
  );
}
