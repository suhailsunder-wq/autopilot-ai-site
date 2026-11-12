# AUTOPILOT AI Landing Website

A static responsive website with no paid dependencies, external webfonts, analytics trackers, or third-party JS libraries.

## Files

- `index.html` — main storefront, product selection
- `rate-floor.html` — sales landing page and live browser-based mini rate estimator
- `feedback-manager.html` — simulated AI pilot description and demo request
- `privacy.html` — privacy information and product limitations
- `styles.css` — responsive styling
- `app.js` — mobile navigation, launch gating and estimator; no network calls
- `config.js` — Gumroad URLs, contact email and **critical shopOpen switch**
- Cover image loaded from Gumroad public-files CDN on deployed pages
- `assets/favicon.svg` — website icon

## Verified store status

User reports completing Mauritius business registration. Connected Gumroad account confirms both products are published and have downloadable buyer files and cover artwork. `config.js` sets `shopOpen: true` so links are active.

- Paid: https://suhailsonic4.gumroad.com/l/the-rate-floor
- Free: https://suhailsonic4.gumroad.com/l/floor-rate-calculator

The seller should still complete a Gumroad test purchase and file download/refund-flow review. This GitHub/Render site uses the existing public Gumroad image URL rather than committing the large image file to GitHub.

## How to preview

Extract all files and double-click `index.html`, or host locally:

    python -m http.server 8080

Open http://localhost:8080/ .

## How to deploy for free

Upload the contents of this folder (not only the ZIP) to a static hosting service such as GitHub Pages, Cloudflare Pages, Netlify, or Render Static Sites. Keep folder structure unchanged. Select no build command and use the site's root as its public directory. A hosting account may be required. There is no live public site URL until a hosting provider has accepted the upload/deployment.

## Suggested first marketing links

When hosted, send freelance-specific traffic **directly** to `https://YOUR-HOST/rate-floor.html` rather than the general homepage. Send salon business prospects to `https://YOUR-HOST/feedback-manager.html`. Replace `YOUR-HOST` with the real address provided by your hosting platform; do not use this placeholder as a real URL.

## Before public launch checklist

- [x] Owner reports Mauritius registration complete; BRN/card not independently reviewed
- [x] Gumroad paid/free product publication confirmed, seller reports payout setup complete
- [ ] Confirm actual Gumroad product file delivery and complete a legitimate platform test checkout
- [x] Both Gumroad products published via connected account
- [ ] Review store refund policy and legal/privacy notices for the final deployment
- [x] `shopOpen: true` now set
- [ ] Confirm links and calculator on mobile and desktop
- [ ] Consider privacy-first analytics only after deploying suitable notices
- [ ] Set a canonical URL and social preview URLs once a real domain exists

## Contact email

`config.js` currently uses the Gmail account previously used for AUTOPILOT AI business outreach. Because this address will be exposed in any deployed version, replace `contactEmail` if you prefer a separate business contact address. Note that the prelaunch HTML contains a matching mailto fallback, so change occurrences of the email address throughout the HTML before deploying if you switch it.

## Important limits

No testimonials, actual revenue, or guaranteed outcomes are claimed. Feedback Manager Lite is presented only as an early simulated pilot, not a production service, and no real customer data is collected by the site.