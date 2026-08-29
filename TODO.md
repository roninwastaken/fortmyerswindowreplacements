# Launch Checklist — Fort Myers Window Replacements

## Must-fix before going live

- [x] **Phone number** — (239) 933-4610 is live across the site.
- [x] **Email address** — info@fortmyerswindowreplacements.com is live across the site.
- [ ] **Business address / service area** — currently set up as service-area-only (no public street address). If you get a storefront/warehouse address later, add it to the `PostalAddress` schema block in `<head>` and consider a dedicated "About" section.
- [ ] **License number** — replace `[ADD LICENSE NUMBER]` in the footer with your Florida contractor license number (required by FL law for advertising).
- [ ] **Real customer reviews** — the "What Our Clients Say" section has 3 placeholder review cards clearly flagged "Placeholder — replace before launch." Swap in real Google/Yelp/Facebook reviews once you have them. Don't publish fake reviews — real ones are also better for trust and SEO.
- [x] **Real photos** — 7 real project photos are now live across the service blocks (`images/` folder) with descriptive alt text. The Commercial Window Replacement block still uses a placeholder gradient — no commercial-project photo was available yet; swap one in when you have it.
- [ ] **Front-door photo not used** — one photo you sent (front double door, CWS sticker) clearly shows the house number "2630" on the wall, identifying a specific customer's address. Skipped it for privacy. If you want it on the site, crop/blur the house number first, or confirm the homeowner is fine with it being public, then send it back.
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
