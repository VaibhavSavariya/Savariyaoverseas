import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import { SectionHeading } from '../components/ui';
import { company, images, industries, services, whyUs } from '../lib/content';

export default function Home() {
  return (
    <>
      <Seo
        title="Savariya Overseas | International Trade, Sourcing & Logistics Company in Gujarat, India"
        description="Savariya Overseas is an India-based international trade and business services company offering product sourcing, import & export, shipping and logistics, IT service export and project cargo management from Rajkot and Ahmedabad."
        path="/"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-0 lg:pt-0">
        <div className="container-x relative grid items-center gap-14 lg:min-h-[92vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24">
          <div className="absolute inset-0 -z-10 grid-lines opacity-30" />
          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-gold-300">
                <Icon name="BadgeCheck" className="h-3.5 w-3.5" />
                10+ Years of Global Market Experience
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-8 h1 !text-white">
                Connecting Global Markets.
                <span className="block text-gold-300">Delivering Business Solutions.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl lead !text-white/70">
                Savariya Overseas provides integrated international trade, sourcing, logistics,
                technology, and project management solutions to help businesses operate confidently
                across borders.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" data-testid="hero-request-quote-btn" className="btn-gold">
                  Request a Quote
                  <Icon name="ArrowUpRight" className="h-4 w-4" />
                </Link>
                <Link to="/services" data-testid="hero-explore-services-btn" className="btn-ghost-light">
                  Explore Our Services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
                {[
                  { k: 'Sourcing', v: 'Supplier identification' },
                  { k: 'Trade', v: 'Import & export' },
                  { k: 'Logistics', v: 'Cargo movement' },
                  { k: 'Technology', v: 'IT service export' },
                ].map((it) => (
                  <div key={it.k}>
                    <dt className="font-display text-[11px] font-bold uppercase tracking-overline text-gold-400">
                      {it.k}
                    </dt>
                    <dd className="mt-1.5 text-[13.5px] text-white/55">{it.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative lg:h-[92vh]">
            <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[440px] lg:h-full lg:rounded-none">
              <img
                src={images.heroPort}
                alt="Container vessel carrying international cargo across the ocean"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/25 lg:to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/12 bg-navy-900/75 p-5 backdrop-blur-md lg:bottom-14 lg:left-auto lg:right-8 lg:max-w-[300px]">
                <p className="font-display text-[11px] font-bold uppercase tracking-overline text-gold-400">
                  Operating From
                </p>
                <p className="mt-3 font-display text-[15px] font-bold text-white">
                  Rajkot &amp; Ahmedabad, Gujarat
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                  Positioned within one of India's important industrial and manufacturing regions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-slate-200/80 bg-white py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeading
              overline="Who We Are"
              title="Your Partner for Global Trade & Business Services"
            />
            <Reveal delay={0.16}>
              <div className="mt-7 space-y-5 body">
                <p>
                  International business involves more than moving goods from one country to
                  another. It requires dependable suppliers, efficient logistics, regulatory
                  coordination, commercial understanding, and reliable execution.
                </p>
                <p>
                  Savariya Overseas brings these capabilities together under one roof, helping
                  international buyers and business partners connect with trusted Indian suppliers
                  and manufacturers while supporting the movement of goods and services across
                  borders.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <Link to="/contact" data-testid="intro-talk-experts-btn" className="btn-primary mt-9">
                Talk to Our Trade Experts
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.slice(0, 4).map((w, i) => (
              <Reveal key={w.title} delay={0.1 + i * 0.07}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-canvas p-6 transition-colors duration-300 hover:border-royal/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-royal shadow-card">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[15.5px] font-bold tracking-tight text-navy">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-canvas py-20 sm:py-28" id="services">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              overline="Our Services"
              title="Integrated capabilities across the trade lifecycle"
              intro="Six connected service lines covering sourcing, trade, logistics, technology, and project coordination."
            />
            <Reveal delay={0.2}>
              <Link to="/services" data-testid="services-view-all-btn" className="btn-outline shrink-0">
                View All Services
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200/80 bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="overline">Experience & Presence</p>
          </Reveal>
          <div className="mt-10">
            <Stats />
          </div>
        </div>
      </section>

      {/* Global trade */}
      <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
        <img
          src={images.containerYard}
          alt="Container terminal handling import and export freight"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy/95 to-navy-600/60" />
        <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              overline="Global Trade"
              title="Connecting International Buyers with Indian Capabilities"
              intro="India offers a diverse ecosystem of manufacturers, suppliers, technology professionals, and service providers. Savariya Overseas helps international businesses navigate this ecosystem by identifying relevant opportunities and coordinating the process from requirement to execution."
              light
            />
            <Reveal delay={0.2}>
              <Link to="/contact" data-testid="global-trade-cta-btn" className="btn-gold mt-9">
                Start a Sourcing Conversation
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:mt-6">
            {[
              { icon: 'Factory', t: 'Manufacturing depth', d: 'Engineering, industrial and consumer product clusters.' },
              { icon: 'Ship', t: 'Port connectivity', d: 'Coordinated movement through sea, air and inland routes.' },
              { icon: 'Code2', t: 'Technology talent', d: 'Software, web, telecom and network capabilities.' },
              { icon: 'Handshake', t: 'Commercial clarity', d: 'Transparent coordination between buyers and suppliers.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={0.1 + i * 0.07}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40">
                  <Icon name={c.icon} className="h-5 w-5 text-gold-400" />
                  <h3 className="mt-5 font-display text-[15px] font-bold tracking-tight text-white">
                    {c.t}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            overline="Industries & Product Categories"
            title="Sectors we work across"
            intro="Representative categories we support. Actual sourcing and export feasibility depends on product specifications, destination-country regulations, documentation, and applicable trade requirements."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 3).map((ind, i) => (
              <IndustryCard key={ind.name} industry={ind} delay={i * 0.08} />
            ))}
            {industries.slice(3).map((ind, i) => (
              <IndustryCard
                key={ind.name}
                industry={ind}
                delay={i * 0.08}
                className="lg:col-span-1 md:col-span-1"
              />
            ))}
            <Reveal delay={0.16}>
              <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-dashed border-navy/20 bg-white p-7">
                <div>
                  <Icon name="Info" className="h-5 w-5 text-royal" />
                  <h3 className="mt-5 h3">Have a different requirement?</h3>
                  <p className="mt-3 body">
                    Share your product or service specification and we will confirm feasibility,
                    supplier options, and the applicable trade requirements.
                  </p>
                </div>
                <Link
                  to="/contact"
                  data-testid="industries-inquiry-btn"
                  className="mt-7 inline-flex items-center gap-2 font-display text-[13px] font-bold tracking-tight text-navy transition-colors hover:text-royal"
                >
                  Start a Sourcing Inquiry
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-slate-200/80 bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            overline="How We Work"
            title="A structured five-step process"
            intro="From understanding your requirement to delivery and ongoing support, every engagement follows a clear sequence."
          />
          <ProcessTimeline />
          <Reveal delay={0.2}>
            <Link to="/how-we-work" data-testid="process-learn-more-btn" className="btn-outline mt-14">
              See How We Work
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact snapshot */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              overline="Our Offices"
              title="Two locations in Gujarat, one global outlook"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {company.offices.map((o, i) => (
                <Reveal key={o.city} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card">
                    <Icon name="Building2" className="h-5 w-5 text-royal" />
                    <h3 className="mt-5 font-display text-[15px] font-bold tracking-tight text-navy">
                      {o.label}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                      {o.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-2xl">
              <img
                src={images.warehouse}
                alt="Warehouse operations supporting international cargo movement"
                loading="lazy"
                className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-[11px] font-bold uppercase tracking-overline text-gold-400">
                  Get in touch
                </p>
                <a
                  href={company.phoneHref}
                  data-testid="home-phone-link"
                  className="mt-2 block font-display text-xl font-extrabold tracking-tight text-white"
                >
                  {company.phone}
                </a>
                <a
                  href={company.emailHref}
                  data-testid="home-email-link"
                  className="mt-1 block break-all text-[13.5px] text-white/70 underline-offset-4 hover:underline"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
