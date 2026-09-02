import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import { PageHero, SectionHeading } from '../components/ui';
import { company, images } from '../lib/content';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Savariya Overseas | Import Export Company in Rajkot & Ahmedabad, Gujarat"
        description="Contact Savariya Overseas for product sourcing from India, import and export, shipping and logistics coordination, IT service export and project cargo management. Offices in Rajkot and Ahmedabad, Gujarat. Call +91 79904 96099."
        path="/contact"
      />
      <PageHero
        overline="Contact Us"
        title="Let's Build Your Next Global Business Connection"
        intro="Share your requirement with our team in Rajkot or Ahmedabad and we will respond with practical next steps."
        image={images.freightAerial}
        alt="Aerial view of freight containers at an international port"
      />

      <section className="bg-white py-20 sm:py-28" id="offices">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="scroll-mt-24">
            <SectionHeading overline="Reach Us" title="Offices & direct contact" />

            <div className="mt-10 space-y-5">
              <Reveal>
                <a
                  href={company.phoneHref}
                  data-testid="contact-phone-link"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-canvas p-5 transition-colors duration-300 hover:border-navy/30"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold-400">
                    <Icon name="Phone" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[11px] font-bold uppercase tracking-overline text-gold">
                      Phone
                    </span>
                    <span className="mt-1 block font-display text-[16px] font-bold tracking-tight text-navy">
                      {company.phone}
                    </span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.08}>
                <a
                  href={company.emailHref}
                  data-testid="contact-email-link"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-canvas p-5 transition-colors duration-300 hover:border-navy/30"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold-400">
                    <Icon name="Mail" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[11px] font-bold uppercase tracking-overline text-gold">
                      Email
                    </span>
                    <span className="mt-1 block break-all font-display text-[15px] font-bold tracking-tight text-navy">
                      {company.email}
                    </span>
                  </span>
                </a>
              </Reveal>

              {company.offices.map((o, i) => (
                <Reveal key={o.city} delay={0.16 + i * 0.08}>
                  <div
                    data-testid={`office-card-${o.city.toLowerCase()}`}
                    className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="h-5 w-5 text-royal" />
                      <h3 className="font-display text-[15px] font-bold tracking-tight text-navy">
                        {o.label}
                      </h3>
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                      {o.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </p>
                    <p className="mt-4 font-display text-[11px] font-bold uppercase tracking-overline text-slate-600">
                      Savariya Overseas — {o.city}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="scroll-mt-24">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-canvas py-16 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            {
              icon: 'ClipboardList',
              t: 'Share the requirement',
              d: 'Product or service details, destination market, quantity and timelines.',
            },
            {
              icon: 'Search',
              t: 'We review feasibility',
              d: 'Supplier options, applicable trade requirements and logistics approach.',
            },
            {
              icon: 'Send',
              t: 'You receive next steps',
              d: 'A clear response with the commercial and operational path forward.',
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold-400">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-[15px] font-bold tracking-tight text-navy">
                  {c.t}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
