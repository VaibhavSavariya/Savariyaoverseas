import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';
import { PageHero, SectionHeading } from '../components/ui';
import { images } from '../lib/content';

export default function HowWeWork() {
  return (
    <>
      <Seo
        title="Global Trade & How We Work | Savariya Overseas"
        description="Our five-step process for international trade: understand the requirement, source and identify suppliers, coordinate stakeholders, execute trade and logistics, then deliver and support."
        path="/how-we-work"
      />
      <PageHero
        overline="Global Trade / How We Work"
        title="A Clear Process from Requirement to Delivery"
        intro="Structured coordination across suppliers, logistics providers and service partners — with communication maintained at every stage."
        image={images.heavyLift}
        alt="Project cargo being loaded onto a heavy lift vessel at port"
      />

      <section className="bg-navy py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading overline="Our Process" title="Five steps, one accountable point of contact" light />
          <ProcessTimeline light />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              overline="Global Trade"
              title="Connecting International Buyers with Indian Capabilities"
              intro="India offers a diverse ecosystem of manufacturers, suppliers, technology professionals, and service providers. Savariya Overseas helps international businesses navigate this ecosystem by identifying relevant opportunities and coordinating the process from requirement to execution."
            />
            <Reveal delay={0.18}>
              <Link to="/contact" data-testid="howwework-sourcing-cta-btn" className="btn-primary mt-9">
                Start a Sourcing Conversation
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={images.assemblyLine}
                alt="Production line inside an Indian manufacturing plant"
                loading="lazy"
                className="h-[340px] w-full object-cover transition-transform duration-[900ms] hover:scale-105 sm:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-canvas py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            overline="What You Can Expect"
            title="Coordination that keeps every stakeholder aligned"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: 'Network',
                t: 'Single point of coordination',
                d: 'One team coordinating suppliers, logistics providers and service partners so requirements do not get lost between parties.',
              },
              {
                icon: 'ClipboardList',
                t: 'Documentation support',
                d: 'Support with the commercial and transport documentation required for each shipment or engagement.',
              },
              {
                icon: 'CheckCircle2',
                t: 'Progress communication',
                d: 'Regular updates through sourcing, production, shipment and delivery stages.',
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold-400">
                    <Icon name={c.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="mt-6 h3">{c.t}</h3>
                  <p className="mt-3.5 body">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
