# AUTOPILOT AI — Kaizen change log

## 2026-11-13 — Original scope-creep guide (reversible)
- **Baseline:** Connected Gumroad analytics for 2026-11-01 through 2026-11-13 (creator timezone: Pacific) showed 0 recorded product views, 0 paid sales, 0 free downloads and no referrer rows. Zero recorded views may reflect reporting lag; it does not establish zero visits to the separate Render website.
- **Change:** Published `scope-creep-guide.html`, an original, practical guide covering five steps, a hypothetical change-request message and a free checklist. Linked it from `catalog.html`, added its canonical URL to `sitemap.xml`, and included one clearly priced, UTM-tagged optional link to the relevant Gumroad product. No buyer files, pricing, account settings or payment settings changed.
- **Hypothesis:** A useful free guide targeting a specific freelancer problem can attract qualified organic readers and help interested visitors discover the matching toolkit.
- **Measurement:** Verify GitHub commit, successful Render deployment and publicly reachable page. Compare Gumroad product views, referrer rows and paid/free conversions over subsequent runs. Search indexing and traffic are not guaranteed.
- **Rollback:** Remove the catalog link and sitemap entry, then delete the guide or revert the associated commits.
- **Guardrails:** No forum posting, unsolicited outreach, fake testimonials or claims of buyer checkout verification.

## 2026-11-13 — Owner-approved premium repositioning
- Updated all nine paid Gumroad prices to approved USD amounts: Rate Floor $39; Pipeline $29; Invoice $29; Scope $39; Profit $49; Proposal $49; Onboarding $39; Content $29; AI Pilot $79. Free calculator remains $0.
- Corrected product-description price mentions and Rate Floor detail metadata. Updated GitHub catalog, homepage, Rate Floor landing page, pricing guide and scope-creep guide to match. Refined shared color tokens to charcoal, ivory and muted gold; no fake scarcity, claims or testimonials.
- Verified connected Gumroad list_products readback and catalog source price strings. Public Render deployment and visual browser QA still need verification.
- Rollback: revert website commits and restore prior Gumroad prices ($19, $15, $15, $15, $19, $19, $15, $12, $24). Higher prices are an untested hypothesis, not a guarantee of greater revenue.

## 2026-11-14 — Free-first homepage conversion test
- **Baseline:** Gumroad Nov 1–14 (Pacific seller timezone): 1 recorded product view (AI Automation Discovery & Pilot Kit; direct referrer), 0 sales, $0 revenue, and 0 recorded free-product views. No free downloads verified. The previous site deployment was live at commit `ac1ad874`.
- **Change:** Swapped the two existing homepage hero buttons: the UTM-tagged free Floor Rate Calculator is now the first, primary button; the 10-product catalog remains available as the secondary button. No prices, products, assets or checkout settings changed.
- **Hypothesis:** Lowering the first-click commitment from browsing paid products to a free useful tool may increase qualified free-product visits and eventual downloads.
- **Measurement:** Compare Gumroad free-product views and referrers over the next week; downloads cannot be inferred from page views. Verify Render serves commit `15a534a` before attributing any change. The existing auto-deploy integration has not reliably deployed commits; manual deploy may be required.
- **Rollback:** Revert the homepage CTA-order commit `15a534a`.
