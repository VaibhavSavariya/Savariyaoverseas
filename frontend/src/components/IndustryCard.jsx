import Icon from './Icon';
import Reveal from './Reveal';

export default function IndustryCard({ industry, delay = 0, className = '' }) {
  return (
    <Reveal delay={delay} className={className}>
      <article
        data-testid={`industry-card-${industry.name.toLowerCase().replace(/[^a-z]+/g, '-')}`}
        className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-navy shadow-card transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-lift"
      >
        <img
          src={industry.image}
          alt={industry.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-45 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/75 to-navy-900/25" />
        <div className="relative flex h-full min-h-[280px] flex-col justify-end p-7">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-gold-400 backdrop-blur">
            <Icon name={industry.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold leading-snug tracking-tight text-white">
            {industry.name}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-white/65">{industry.description}</p>
          <span className="mt-5 h-[2px] w-10 bg-gold-400 transition-all duration-500 group-hover:w-20" />
        </div>
      </article>
    </Reveal>
  );
}
