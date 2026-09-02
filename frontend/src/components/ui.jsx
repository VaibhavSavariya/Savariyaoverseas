import Reveal from './Reveal';

export function Logo({ compact = false, light = false }) {
  return (
    <span className="flex items-center gap-3" aria-label="Savariya Overseas">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[11px] bg-navy">
        <span className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_70%_20%,#1E3E62,transparent_60%)]" />
        <span className="relative font-display text-[15px] font-extrabold tracking-tight text-white">
          S<span className="text-gold-400">O</span>
        </span>
        <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gold-400/80" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[17px] font-extrabold tracking-tight ${
              light ? 'text-white' : 'text-navy'
            }`}
          >
            Savariya Overseas
          </span>
          <span
            className={`mt-1 font-display text-[9.5px] font-bold uppercase tracking-[0.2em] ${
              light ? 'text-white/50' : 'text-slate-400'
            }`}
          >
            Global Trade &amp; Services
          </span>
        </span>
      )}
    </span>
  );
}

export function SectionHeading({ overline, title, intro, align = 'left', light = false, className = '' }) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {overline && (
        <Reveal>
          <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="h-px w-8 bg-gold" />
            <span className="overline">{overline}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className={`mt-5 h2 ${light ? '!text-white' : ''}`}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className={`mt-5 lead ${light ? '!text-white/70' : ''}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

export function PageHero({ overline, title, intro, image, alt }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-16 pt-32 sm:pb-24 sm:pt-40">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60" />
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="container-x relative">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="overline">{overline}</span>
        </div>
        <h1 className="mt-6 h1 max-w-4xl !text-white animate-fade-up">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl lead !text-white/70">{intro}</p>}
      </div>
    </section>
  );
}
