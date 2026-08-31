# Launch Checklist — Fort Myers Window Replacements

## Must-fix before going live

- [x] **Phone number** — (239) 933-4610 is live across the site.
- [x] **Email address** — info@fortmyerswindowreplacements.com is live across the site.
- [x] **Domain name** — fortmyerswindowreplacements.com is live on Vercel (bare domain redirects to `www`), HTTPS included.
- [x] **Blog guide pages** — 6 real posts + a `/blog` index page are live, replacing the old dead `#` links.
- [ ] **Business address / service area** — currently set up as service-area-only (no public street address). If you get a storefront/warehouse address later, add it to the `PostalAddress` schema block in `<head>` and consider a dedicated "About" section.
- [ ] **License number** — replace `[ADD LICENSE NUMBER]` in the footer with your Florida contractor license number (required by FL law for advertising).
- [ ] **Real customer reviews** — the "What Our Clients Say" section has 3 placeholder review cards clearly flagged "Placeholder — replace before launch." Swap in real Google/Yelp/Facebook reviews once you have them. Don't publish fake reviews — real ones are also better for trust and SEO.
- [x] **Real photos** — 7 real project photos are live across the service blocks (`images/` folder) with descriptive alt text. The Commercial Window Replacement block still uses a placeholder gradient — no commercial-project photo was available yet; swap one in when you have it.
- [ ] **Front-door photo not used** — one photo you sent (front double door, CWS sticker) clearly shows the house number "2630" on the wall, identifying a specific customer's address. Skipped it for privacy. If you want it on the site, crop/blur the house number first, or confirm the homeowner is fine with it being public, then send it back.
- [x] **Lead form backend** — the estimate form now POSTs to a Vercel serverless function (`api/submit-estimate.js`) that emails submissions via Resend to John@repeatclose.com. **Still needs your setup to actually work** — see "Resend setup" below.

## Resend setup (required for the estimate form to send emails)

The code is deployed, but it won't send anything until you do these steps yourself (I can't create accounts or handle API keys on your behalf):

1. **Sign up at [resend.com](https://resend.com)** (free tier covers this site's expected volume easily).
2. **Get an API key**: Dashboard → API Keys → Create API Key. Copy it (starts with `re_`).
3. **Add it to Vercel** — do NOT send me this key or paste it in chat:
   - Vercel dashboard → your project → **Settings → Environment Variables**
   - Name: `RESEND_API_KEY`, Value: (paste your key), Environment: Production (and Preview if you want)
   - Save, then **redeploy** (Vercel → Deployments → ⋯ → Redeploy) so the function picks up the new variable.
4. **Verify your sending domain** (strongly recommended, do this before relying on it for real leads):
   - Resend dashboard → Domains → Add Domain → `fortmyerswindowreplacements.com`
   - Add the DNS records it gives you (SPF/DKIM) at your domain registrar
   - Once verified, add another Vercel env var: `RESEND_FROM` = `Fort Myers Window Replacements <leads@fortmyerswindowreplacements.com>` (or any address at your verified domain)
   - Without a verified domain, the function falls back to Resend's shared test sender (`onboarding@resend.dev`), which is fine for testing but not reliable for real lead delivery long-term — Resend restricts/deliverability-limits that shared address.
5. **Test it**: submit the form on the live site once steps 1–3 are done, and confirm John@repeatclose.com receives the email. Check spam folder on the first test.

## Strongly recommended for SEO ranking

- [x] **Submit sitemap.xml to Google Search Console** — done, 118 URLs live at `/sitemap.xml`.
- [x] **Dedicated landing pages per city and per service** — 12 city pages, 8 service pages, and a full 104-page service×city combo matrix are live.
- [ ] **Google Business Profile** — create/claim one with your real name, address (or service area), phone, and hours. This matters as much as the website itself for local map-pack rankings.
- [ ] **NAP consistency** — make sure Name/Address/Phone match exactly across the website, Google Business Profile, and any directory listings (Yelp, Angi, BBB, Nextdoor).
- [ ] **og-image.jpg** — add a real 1200×630 social share image; the schema currently references `/og-image.jpg`, which doesn't exist yet.
- [ ] **Bing Webmaster Tools** — submit the same sitemap there too, it's a quick win.

## Reminder

You asked me to remind you once the site is complete to fill in: **phone number, email, address, and reviews.** Phone and email are done — address, license number, and real reviews are still open above.
