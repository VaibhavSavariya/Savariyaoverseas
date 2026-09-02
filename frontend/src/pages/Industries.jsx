import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import IndustryCard from '../components/IndustryCard';
import CTASection from '../components/CTASection';
import { PageHero, SectionHeading } from '../components/ui';
import { images, industries } from '../lib/content';

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries & Product Categories | Savariya Overseas"
        description="Engineering and industrial products, consumer products, automotive and vehicles, agricultural commodities, and technology and IT services — the categories Savariya Overseas supports for international trade and sourcing from India."
        path="/industries"
      />
      <PageHero
        overline="Industries & Product Categories"
        title="Categories We Support Across International Trade"
        intro="Representative product and service categories across engineering, consumer, automotive, agricultural and technology sectors."
        image={images.laserCutting}
        alt="Precision engineering process inside an industrial workshop"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            overline="Capability Map"
            title="Where our sourcing and trade experience is focused"
            intro="Each category is supported through supplier identification, commercial coordination, documentation support, and logistics planning."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <IndustryCard key={ind.name} industry={ind} delay={(i % 3) * 0.08} />
            ))}
            <Reveal delay={0.16}>
              <div className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-dashed border-navy/20 bg-canvas p-7">
                <div>
                  <Icon name="Search" className="h-5 w-5 text-royal" />
                  <h3 className="mt-5 h3">Looking for something specific?</h3>
                  <p className="mt-3 body">
                    If your requirement falls outside these categories, share the specification and
                    we will confirm feasibility and supplier availability.
                  </p>
                </div>
                <Link
                  to="/contact"
                  data-testid="industries-page-inquiry-btn"
                  className="mt-7 inline-flex items-center gap-2 font-display text-[13px] font-bold tracking-tight text-navy hover:text-royal"
                >
                  Start a Sourcing Inquiry
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-canvas py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <h2 className="h2">Feasibility is always assessed case by case</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: 'ClipboardList', t: 'Product specifications', d: 'Grade, material, tolerance, packaging and compliance detail.' },
                { icon: 'Globe2', t: 'Destination regulations', d: 'Import rules and permissions of the destination country.' },
                { icon: 'Layers', t: 'Documentation', d: 'Commercial, transport and certification documents required.' },
                { icon: 'ShieldCheck', t: 'Trade requirements', d: 'Applicable restrictions, approvals and commercial terms.' },
              ].map((c, i) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card"
                >
                  <Icon name={c.icon} className="h-5 w-5 text-royal" />
                  <h3 className="mt-4 font-display text-[14.5px] font-bold tracking-tight text-navy">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
