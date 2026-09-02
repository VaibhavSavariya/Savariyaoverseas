import { Link } from 'react-router-dom';
import Icon from './Icon';
import { Logo } from './ui';
import { company, navLinks, services } from '../lib/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 pb-28 pt-20 text-white/70 md:pb-16" data-testid="site-footer">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs font-display text-[15px] font-semibold leading-relaxed text-white/85">
              “Connecting Global Markets. Delivering Business Solutions.”
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Rajkot', 'Ahmedabad', 'Gujarat', 'India'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-overline text-gold-400">
              Navigate
            </h3>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-nav-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[14px] text-white/65 transition-colors hover:text-gold-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-overline text-gold-400">
              Services
            </h3>
            <ul className="mt-6 space-y-3.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    data-testid={`footer-service-${s.slug}`}
                    className="text-[14px] text-white/65 transition-colors hover:text-gold-300"
                  >
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-overline text-gold-400">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-[14px]">
              <li>
                <a
                  href={company.phoneHref}
                  data-testid="footer-phone-link"
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-gold-300"
                >
                  <Icon name="Phone" className="h-4 w-4 text-gold-400" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  data-testid="footer-email-link"
                  className="flex items-center gap-3 break-all text-white/75 transition-colors hover:text-gold-300"
                >
                  <Icon name="Mail" className="h-4 w-4 shrink-0 text-gold-400" />
                  {company.email}
                </a>
              </li>
              {company.offices.map((o) => (
                <li key={o.city} className="flex gap-3 leading-relaxed text-white/55">
                  <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span>
                    <span className="block font-semibold text-white/80">{o.city}</span>
                    {o.lines.join(' ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Savariya Overseas. All Rights Reserved.</p>
          <p>India-based international trade &amp; business services company.</p>
        </div>
      </div>
    </footer>
  );
}
