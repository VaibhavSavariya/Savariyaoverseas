# Savariya Overseas — Corporate Website (PRD)

## Original problem statement
Build a premium, professional, globally oriented corporate website for **Savariya Overseas**, an India-based international trade & services company (product sourcing, import/export, IT service export, shipping & logistics, project cargo management, international business support). Rewrite/polish all copy, build trust with international B2B buyers, no exaggerated or invented claims. Frontend only — no backend.

## User choices (2026-06)
- Contact form: mailto (opens visitor's email client with prefilled inquiry) — MOCKED delivery
- Theme: Light corporate (deep navy #0B192C, royal blue #1E56A0, warm gold #D4AF37, off-white canvas)
- Scope: core 7 pages only
- Logo: generated text/monogram wordmark (SO badge)
- Google Maps: skipped

## Architecture
- React 19 + Vite 8 + Tailwind 3 + react-router-dom 7 + framer-motion + lucide-react + react-helmet-async
- Frontend only. `/app/backend/server.py` is a placeholder FastAPI app exposing `/api/health` (unused by the site).
- Content centralised in `/app/frontend/src/lib/content.js`
- Reusable components: Navbar, Footer, MobileActionBar, Hero (in Home), ServiceCard, IndustryCard, Stats (animated counters), ProcessTimeline, CTASection, ContactForm, Seo, Reveal, ui.jsx (Logo, SectionHeading, PageHero)

## Core requirements (static)
- 7 pages: Home, About, Services, Industries, How We Work (Global Trade), Why Us, Contact
- 6 services, 5 industry categories, 5-step process, 5 core values, 6 why-us reasons
- Factual claims only: 10+ years, 2 locations (Rajkot & Ahmedabad), multiple capabilities. Testimonials shown as a clearly marked placeholder.
- SEO: per-page titles/descriptions/canonical/OG, Organization schema, semantic HTML, alt text
- Mobile-first responsive, sticky mobile action bar (Call / Email / Request Quote)

## Implemented (2026-06)
- All 7 pages + 404, full navigation (desktop + mobile drawer), sticky mobile bar
- Home: hero, intro, 6 service cards, animated stats, global trade band, industries, process timeline, offices, dark CTA
- Services page with per-service deep-linked sections (`/services#<slug>`) and CTAs
- Contact page: office cards, tel/mailto links, B2B inquiry form with validation + arithmetic anti-spam + mailto submission + success panel
- Tested end-to-end by testing agent (iteration_1.json): 100% of requested frontend scenarios passed; 3 low-priority polish items fixed afterwards (contrast, spam-question regeneration, testid forwarding)

## Backlog
- P1: FAQ page and dedicated "Request a Quote" page/modal
- P1: Real form delivery (Resend/SendGrid/Formspree) instead of mailto
- P2: Google Maps embeds for both offices (needs verified listings)
- P2: Location landing pages for Rajkot / Ahmedabad local SEO
- P2: Downloadable company profile PDF, sitemap.xml, testimonials once verified
