import { Link } from 'react-router-dom';
import Icon from './Icon';
import Reveal from './Reveal';

export default function ServiceCard({ service, index, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        data-testid={`service-card-${service.slug}`}
        className="card group flex h-full flex-col"
      >
        <span className="absolute right-6 top-6 font-display text-[13px] font-bold tabular-nums text-slate-200 transition-colors duration-300 group-hover:text-gold-300">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold-400 transition-transform duration-300 group-hover:scale-105">
          <Icon name={service.icon} className="h-[22px] w-[22px]" />
        </span>
        <p className="mt-6 font-display text-[10.5px] font-bold uppercase tracking-overline text-royal">
          {service.tag}
        </p>
        <h3 className="mt-2.5 h3 leading-snug">{service.title}</h3>
        <p className="mt-4 body flex-1">{service.description}</p>
        <Link
          to={`/services#${service.slug}`}
          data-testid={`service-learn-more-${service.slug}`}
          className="mt-7 inline-flex items-center gap-2 font-display text-[13px] font-bold tracking-tight text-navy transition-colors hover:text-royal"
        >
          Learn More
          <Icon
            name="ArrowRight"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </article>
    </Reveal>
  );
}
