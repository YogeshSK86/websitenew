# Uninova Trade — Website Source

A clean, fast, multi-page website for three business lines: **Auto Spares Export**, **Pharmaceutical Export**, and **Logistics Services**, plus **About Us** and **Contact Us** pages.

Built with plain HTML, CSS and JavaScript — no external UI libraries, no CDN-fetched fonts, no framework lock-in. This means it loads fast and will never break because a library went offline.

## File Structure

```
uninovatrade-site/
├── index.html              Home page
├── about.html               About Us
├── spares-export.html       Auto Spares Export
├── pharma-export.html       Pharmaceutical Export
├── logistics-services.html  Logistics Services
├── contact.html             Contact Us (with enquiry form)
├── css/style.css            All styling
├── js/main.js                Navigation, page transitions, animations
├── images/                  Put your real photos/logo here
├── robots.txt
├── sitemap.xml
└── package.json             For Parcel bundler
```

## 1. Replace the Google AI Studio Banner Issue

This is plain static HTML — there is no AI Studio branding anywhere in this code, so once you deploy this, that top banner disappears completely. Your browser tab and Google search results will only ever show "Uninova Trade" — title and description tags are already set per page (see the `<title>` and `<meta name="description">` tags at the top of each file). That is also what makes "Auto Spares Export", "Pharmaceutical Export", "Logistics Services" etc. show up as separate listings in Google search results over time, once Google indexes them.

## 2. About the Images

This package now ships with **6 original SVG illustrations** already wired into every page (no broken placeholder boxes left):

- `images/logo.svg` — used as the header logo + browser favicon on all pages
- `images/hero-banner.svg` — homepage hero (cargo ship & containers)
- `images/about-team.svg` — About Us page (partnership/global network)
- `images/spares-warehouse.svg` — Auto Spares Export page (warehouse shelving)
- `images/pharma-coldchain.svg` — Pharmaceutical Export page (cold-chain storage)
- `images/logistics-port.svg` — Logistics Services page (port/crane/truck)

These are flat vector illustrations in your brand colors (navy + orange) — lightweight, load instantly, and there is zero licensing risk since they're original artwork, not stock photos.

**If you'd rather use real photography instead:** search royalty-free sites like Pexels or Unsplash for "container ship," "auto spare parts warehouse," "pharmaceutical cold storage," etc. Download the photo, drop it into `images/` as a `.jpg`, then in the relevant `.html` file replace the existing `<img src="images/xxx.svg" ...>` tag with your new filename. No other code changes needed.

## 3. Connect the Contact Form to Your Email (santosh@uninovatrade.com)

The form in `contact.html` is wired to use **Formspree**, a free service that forwards form submissions straight to your inbox — no backend server needed, works perfectly with a static site on GitHub/Parcel.

Steps:
1. Go to https://formspree.io and create a free account using `santosh@uninovatrade.com`
2. Create a new form — Formspree gives you an endpoint like `https://formspree.io/f/abcd1234`
3. Open `contact.html`, find this line:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your real endpoint ID
4. Check your inbox — Formspree sends a one-time confirmation email; click to verify
5. That's it. Every form submission will now land in `santosh@uninovatrade.com` automatically

(Free tier allows 50 submissions/month, which is enough to start. Paid plans remove the limit if needed later.)

## 4. WhatsApp Link

Every page has a floating WhatsApp button (bottom-right) and buttons across the site, all pointing to:
```
https://wa.me/919168006432
```
If the number changes, search-and-replace `919168006432` across all files.

## 5. Page Transition Animation

`js/main.js` adds a smooth fade/slide transition whenever you click between internal pages (similar to the feel of the previous site) — no animation library required, it is done with plain CSS keyframes (`pageEnter` / `pageLeave` in `style.css`).

## 6. Running Locally with Parcel

```bash
npm install
npm start
```
This opens the site at `http://localhost:1234` with hot-reload.

To build a production-ready static bundle:
```bash
npm run build
```
Output goes to the `dist/` folder — that is what you deploy.

## 7. Deploying via GitHub

1. Push this whole folder to a GitHub repository
2. Connect that repo to your hosting (GitHub Pages, Netlify, Vercel, or your existing host)
3. If using GitHub Pages directly without Parcel, you can deploy the raw files as-is (Pages serves plain HTML/CSS/JS fine) — Parcel build is only needed if you want bundling/minification
4. Point your domain `uninovatrade.com` to the deployment as you did before

## 8. Editing Text Content

All copy is plain text inside the `.html` files — search for the heading or paragraph you want to change and edit directly. No templating engine, no build step required to change text.

## 9. Brand Logos (Mahindra / Tata / TVS / Skoda / Bajaj)

These currently appear as styled text tags (`.partner-tag`) in the "Trusted Network" sections on the homepage and Auto Spares Export page — this avoids any trademark/logo usage concerns. If you have written permission or an existing distributor relationship that allows using their official logos, you can replace the text tags with `<img>` logo files in the same `.partner-tag` div.
