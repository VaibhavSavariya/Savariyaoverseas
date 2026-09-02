import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import { PageHero, SectionHeading } from '../components/ui';
import { company, images, values } from '../lib/content';

export default function About() {
  return (
    <>
      <Seo
        title="About Savariya Overseas | International Trade Services Company in Rajkot & Ahmedabad"
        description="Savariya Overseas is an India-based international trade and business services company with more than a decade of experience across global markets, operating from Rajkot and Ahmedabad, Gujarat."
        path="/about"
      />
      <PageHero
        overline="About Us"
        title="Building Connections Across Global Markets"
        intro="An India-based international trade and business services company with more than a decade of experience working across global markets."
        image={images.portCranes}
        alt="International port terminal with container handling cranes"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading overline="Our Company" title="A decade of cross-border business coordination" />
            <Reveal delay={0.16}>
              <div className="mt-7 space-y-5 body">
                <p>
                  Savariya Overseas is an India-based international trade and business services
                  company with more than a decade of experience working across global markets. We
                  help businesses connect with sourcing opportunities, suppliers, manufacturers,
                  logistics partners, and technology capabilities to facilitate international trade
                  and cross-border business.
                </p>
                <p>
                  Our approach combines commercial understanding with practical execution. From
                  identifying suitable suppliers and coordinating import and export requirements to
                  supporting logistics, technology service delivery, and project cargo, we aim to
                  simplify complex international business processes for our clients and partners.
                </p>
                <p>
                  With operations in Rajkot and Ahmedabad, Gujarat, we are strategically positioned
                  within one of India's important industrial and manufacturing regions while
                  maintaining a global business outlook.
                </p>
                <p>
                  Our goal is simple: build reliable business connections, create long-term
                  partnerships, and help our clients move products and services across markets with
                  greater confidence.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="sticky top-28 space-y-5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={images.factoryLine}
                  alt="Industrial manufacturing facility in India"
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-canvas p-7">
                <p className="overline">Offices</p>
                <div className="mt-6 space-y-6">
                  {company.offices.map((o) => (
                    <div key={o.city}>
                      <p className="font-display text-[14.5px] font-bold tracking-tight text-navy">
                        {o.label}
                      </p>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                        {o.lines.join(' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-canvas py-16 sm:py-20">
        <div className="container-x">
          <Stats />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: 'Target',
              overline: 'Our Mission',
              text: 'To make international business simpler, more connected, and more reliable by providing practical trade, sourcing, logistics, technology, and project management solutions.',
            },
            {
              icon: 'Globe',
              overline: 'Our Vision',
              text: 'To become a trusted global business partner connecting Indian capabilities with international opportunities and helping businesses build sustainable cross-border relationships.',
            },
          ].map((b, i) => (
            <Reveal key={b.overline} delay={i * 0.1}>
              <div
                data-testid={`about-${b.overline.toLowerCase().replace(/\s+/g, '-')}`}
                className="h-full rounded-2xl bg-navy p-9 text-white"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/12 bg-white/5 text-gold-400">
                  <Icon name={b.icon} className="h-[22px] w-[22px]" />
                </span>
                <p className="mt-7 overline">{b.overline}</p>
                <p className="mt-4 font-display text-[19px] font-semibold leading-relaxed text-white/90 sm:text-[21px]">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-canvas py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            overline="Core Values"
            title="The principles behind every engagement"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.08}>
                <div
                  data-testid={`value-card-${v.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card group h-full"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-canvas text-royal transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-400">
                    <Icon name={v.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="mt-6 h3">{v.title}</h3>
                  <p className="mt-3.5 body">{v.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-navy/20 bg-white p-7">
                <div>
                  <p className="overline">Client Feedback</p>
                  <p className="mt-5 body">
                    [Client testimonials can be added here once verified testimonials are
                    available.]
                  </p>
                </div>
                <Link
                  to="/contact"
                  data-testid="about-contact-link"
                  className="mt-7 inline-flex items-center gap-2 font-display text-[13px] font-bold tracking-tight text-navy hover:text-royal"
                >
                  Discuss Your Requirement
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
