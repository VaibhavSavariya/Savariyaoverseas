import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import CTASection from '../components/CTASection';
import { PageHero, SectionHeading } from '../components/ui';
import { images, services } from '../lib/content';

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Product Sourcing, Import Export, Logistics & IT Service Export | Savariya Overseas"
        description="Product sourcing and supplier identification, import & export trade solutions, IT and technology service export, shipping and logistics coordination, project cargo management and international business support from India."
        path="/services"
      />
      <PageHero
        overline="Our Services"
        title="Integrated Trade, Sourcing, Logistics & Technology Services"
        intro="Six connected service lines that help businesses source, move, and manage products and services across borders."
        image={images.containerYard}
        alt="Aerial view of a container yard handling international trade cargo"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <nav aria-label="Service list" className="flex flex-wrap gap-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                data-testid={`services-jump-${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-canvas px-4 py-2.5 font-display text-[12.5px] font-bold tracking-tight text-navy transition-[border-color,background-color] duration-300 hover:border-navy/40 hover:bg-white"
              >
                <Icon name={s.icon} className="h-4 w-4 text-royal" />
                {s.short}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          data-testid={`service-section-${s.slug}`}
          className={`scroll-mt-24 border-t border-slate-200/80 py-20 sm:py-24 ${
            i % 2 === 0 ? 'bg-canvas' : 'bg-white'
          }`}
        >
          <div
            className={`container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? '' : ''
            }`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold-400">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="overline">
                    Service {String(i + 1).padStart(2, '0')} — {s.tag}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-6 h2">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 lead">{s.description}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              {s.note && (
                <Reveal delay={0.22}>
                  <p className="mt-7 rounded-xl border border-slate-200 bg-white/70 p-4 text-[13px] leading-relaxed text-slate-500">
                    <Icon name="Info" className="mr-2 inline h-4 w-4 -translate-y-0.5 text-royal" />
                    {s.note}
                  </p>
                </Reveal>
              )}
              <Reveal delay={0.26}>
                <Link to="/contact" data-testid={`service-cta-${s.slug}`} className="btn-primary mt-9">
                  {s.cta}
                  <Icon name="ArrowUpRight" className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.15} className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-[900ms] hover:scale-105 sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-t border-slate-200/80 bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            overline="Not sure where to start?"
            title="Tell us the requirement — we will map it to the right service"
            intro="Share your product, service, destination market or shipment details and our team will respond with practical next steps."
            align="center"
          />
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" data-testid="services-page-quote-btn" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/how-we-work" data-testid="services-page-process-btn" className="btn-outline">
                See How We Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
