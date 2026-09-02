import { Link } from 'react-router-dom';
import Icon from './Icon';
import Reveal from './Reveal';
import { images } from '../lib/content';

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-28" data-testid="cta-section">
      <img
        src={images.freightAerial}
        alt="Aerial view of freight containers awaiting international shipment"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/92 to-navy-700/70" />
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="overline">Let's Work Together</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 h2 !text-white">
              Looking for a reliable partner for your international business?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 lead !text-white/70">
              Whether you are looking to source products from India, import or export goods,
              coordinate international logistics, access technology services, or manage a complex
              project cargo requirement, our team is ready to understand your requirements.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" data-testid="cta-request-quote-btn" className="btn-gold">
                Request a Quote
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </Link>
              <Link to="/contact#offices" data-testid="cta-contact-btn" className="btn-ghost-light">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
