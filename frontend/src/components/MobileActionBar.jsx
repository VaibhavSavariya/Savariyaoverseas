import { Link } from 'react-router-dom';
import Icon from './Icon';
import { company } from '../lib/content';

export default function MobileActionBar() {
  const items = [
    { label: 'Call Us', icon: 'Phone', href: company.phoneHref, testid: 'sticky-call-btn' },
    { label: 'Email Us', icon: 'Mail', href: company.emailHref, testid: 'sticky-email-btn' },
  ];

  return (
    <div
      data-testid="mobile-sticky-bar"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-900/95 backdrop-blur-lg md:hidden"
    >
      <div className="grid grid-cols-3">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            data-testid={it.testid}
            className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors active:text-gold-300"
          >
            <Icon name={it.icon} className="h-[18px] w-[18px] text-gold-400" />
            {it.label}
          </a>
        ))}
        <Link
          to="/contact"
          data-testid="sticky-quote-btn"
          className="flex flex-col items-center gap-1 bg-gold-400 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-navy-900"
        >
          <Icon name="Send" className="h-[18px] w-[18px]" />
          Request Quote
        </Link>
      </div>
    </div>
  );
}
