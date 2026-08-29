# Launch Checklist — Fort Myers Window Replacements

## Must-fix before going live

- [ ] **Phone number** — replace every `[ADD PHONE NUMBER]` in `index.html` (appears in: top bar, header, hero, sticky mobile call bar, CTA band, footer) and update the `tel:+10000000000` links to the real number.
- [ ] **Email address** — replace every `[ADD EMAIL ADDRESS]` (footer, LocalBusiness schema, form `action="mailto:..."`) with your real business email.
- [ ] **Business address / service area** — currently set up as service-area-only (no public street address). If you get a storefront/warehouse address later, add it to the `PostalAddress` schema block in `<head>` and consider a dedicated "About" section.
- [ ] **License number** — replace `[ADD LICENSE NUMBER]` in the footer with your Florida contractor license number (required by FL law for advertising).
- [ ] **Real customer reviews** — the "What Our Clients Say" section has 3 placeholder review cards clearly flagged "Placeholder — replace before launch." Swap in real Google/Yelp/Facebook reviews once you have them. Don't publish fake reviews — real ones are also better for trust and SEO.
- [ ] **Real photos** — service blocks currently use solid-color placeholder panels instead of project photos. Replace with real before/after photos of your installs (huge trust + SEO win — add descriptive `alt` text like "impact window installation Fort Myers FL").
- [ ] **Lead form backend** — the estimate form currently submits via a `mailto:` placeholder, which is unreliable on many browsers/devices. Wire it to a real form service (Formspree, Netlify Forms, Google Forms, or your CRM) before launch.
- [ ] **Domain name** — pick and register your real domain (e.g. fortmyerswindowreplacements.com) and update `canonical`, Open Graph `url`, and the LocalBusiness/sitemap URLs to match.

## Strongly recommended for SEO ranking

- [ ] **Google Business Profile** — create/claim one with your real name, address (or service area), phone, and hours. This matters as much as the website itself for local map-pack rankings.
- [ ] **Submit sitemap.xml to Google Search Console** and Bing Webmaster Tools once the domain is live.
- [ ] **NAP consistency** — make sure Name/Address/Phone match exactly across the website, Google Business Profile, and any directory listings (Yelp, Angi, BBB, Nextdoor).
- [ ] **og-image.jpg** — add a real 1200×630 social share image; the schema currently references `/og-image.jpg`, which doesn't exist yet.
- [ ] **Consider dedicated landing pages** per city (Cape Coral, Bonita Springs, Estero, etc.) and per service (impact windows, hurricane windows) once the core site is live — separate indexable pages generally outrank one long page for competitive local terms. I can build these next if you want.
- [ ] **Blog guide pages** — the 6 "guide" cards link to `#` placeholders. Either write those articles as real pages or remove the cards until you have content — dead links hurt SEO.
- [ ] **HTTPS + hosting** — deploy to a real host (e.g. Netlify, Vercel, GoDaddy, Bluehost) with SSL enabled.

## Reminder

You asked me to remind you once the site is complete to fill in: **phone number, email, address, and reviews.** That's the list above — nothing goes live until those are real.
