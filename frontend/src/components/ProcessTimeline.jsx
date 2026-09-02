import Icon from './Icon';
import Reveal from './Reveal';
import { processSteps } from '../lib/content';

export default function ProcessTimeline({ light = false }) {
  return (
    <div data-testid="process-timeline" className="relative mt-14">
      <div
        className={`absolute left-[27px] top-3 hidden h-[calc(100%-2rem)] w-px lg:left-0 lg:top-[27px] lg:h-px lg:w-full ${
          light ? 'bg-white/15' : 'bg-slate-200'
        } max-lg:block lg:block`}
      />
      <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
        {processSteps.map((s, i) => (
          <Reveal
            key={s.step}
            delay={i * 0.08}
            as="li"
            data-testid={`process-step-${s.step}`}
            className="relative flex gap-6 lg:block"
          >
            <div className="relative z-10 shrink-0">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl border font-display text-[13px] font-extrabold tabular-nums transition-colors duration-300 ${
                  light
                    ? 'border-white/15 bg-navy-900 text-gold-400'
                    : 'border-slate-200 bg-white text-navy shadow-card'
                }`}
              >
                {s.step}
              </span>
            </div>
            <div className="lg:mt-7 lg:pr-6">
              <div className="flex items-center gap-2.5">
                <Icon name={s.icon} className={`h-4 w-4 ${light ? 'text-gold-400' : 'text-royal'}`} />
                <h3
                  className={`font-display text-[16.5px] font-bold tracking-tight ${
                    light ? 'text-white' : 'text-navy'
                  }`}
                >
                  {s.title}
                </h3>
              </div>
              <p className={`mt-3 text-[14px] leading-relaxed ${light ? 'text-white/60' : 'text-slate-600'}`}>
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
