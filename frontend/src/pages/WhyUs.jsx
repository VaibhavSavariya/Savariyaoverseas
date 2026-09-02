import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import { PageHero, SectionHeading } from '../components/ui';
import { images, whyUs } from '../lib/content';

export default function WhyUs() {
  return (
    <>
      <Seo
        title="Why Choose Savariya Overseas | International Trade Partner in India"
        description="10+ years of experience, India-based sourcing advantage, integrated services, a business-focused approach, cross-functional coordination and long-term relationships."
        path="/why-us"
      />
      <PageHero
        overline="Why Choose Us"
        title="Why Businesses Choose Savariya Overseas"
        intro="Experience, integrated capability and a partnership-oriented approach to international business."
        image={images.truckContainers}
        alt="Container haulage prepared for international freight movement"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div
                  data-testid={`why-card-${w.title.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  className="card group h-full"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-canvas text-royal transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-400">
                    <Icon name={w.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="mt-6 h3">{w.title}</h3>
                  <p className="mt-3.5 body">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-canvas py-16 sm:py-20">
        <div className="container-x">
          <Stats />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={images.boardroom}
                alt="Business team coordinating an international trade requirement"
                loading="lazy"
                className="h-[320px] w-full object-cover transition-transform duration-[900ms] hover:scale-105 sm:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              overline="Our Difference"
              title="One team across sourcing, trade, logistics and technology"
              intro="Instead of coordinating separate vendors for each stage of an international transaction, our clients work with a single team that understands the commercial requirement and the practical execution."
            />
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-4">
                {[
                  'Requirement-led solutions rather than fixed packages',
                  'Transparent communication with buyers and suppliers',
                  'Coordination across manufacturers, forwarders and service partners',
                  'Focus on repeat business and long-term relationships',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[14.5px] text-slate-700">
                    <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <Link to="/contact" data-testid="whyus-cta-btn" className="btn-primary mt-9">
                Discuss Your Requirement
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
