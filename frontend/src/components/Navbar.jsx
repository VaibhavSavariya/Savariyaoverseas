import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { Logo } from './ui';
import { navLinks } from '../lib/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-[0_2px_20px_-12px_rgba(11,25,44,0.4)] backdrop-blur-xl'
          : 'border-b border-slate-200/60 bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="container-x flex h-[74px] items-center justify-between gap-6">
        <Link to="/" data-testid="nav-logo-link" aria-label="Savariya Overseas home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={({ isActive }) =>
                `relative rounded-full px-3.5 py-2 text-[13.5px] font-semibold tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-navy' : 'text-slate-500 hover:text-navy'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.name}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-request-quote-btn"
            className="btn-primary hidden !px-5 !py-3 md:inline-flex"
          >
            Request a Quote
            <Icon name="ArrowUpRight" className="h-4 w-4" />
          </Link>
          <button
            type="button"
            data-testid="mobile-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-navy transition-colors hover:border-navy/40 lg:hidden"
          >
            <Icon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        data-testid="mobile-menu-panel"
        className={`overflow-hidden border-t border-slate-200/80 bg-white lg:hidden ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        } transition-[max-height] duration-500 ease-in-out`}
      >
        <nav className="container-x flex flex-col gap-1 py-5" aria-label="Mobile">
          {navLinks.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`mobile-nav-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{ animationDelay: `${i * 40}ms` }}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-[15px] font-bold tracking-tight transition-colors ${
                  isActive ? 'bg-navy text-white' : 'text-navy hover:bg-slate-50'
                }`
              }
            >
              {l.name}
              <Icon name="ArrowRight" className="h-4 w-4 opacity-50" />
            </NavLink>
          ))}
          <Link to="/contact" data-testid="mobile-request-quote-btn" className="btn-gold mt-3">
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
