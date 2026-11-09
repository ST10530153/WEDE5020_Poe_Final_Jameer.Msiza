# Nexus Tech Website — WEDE5020 Portfolio of Evidence (Final)

## Student Information
- Full name: Mbusi Manqoba Jameer Msiza
- Student number: [ST10530153]
- Module: Web Development (Introduction)
- Module code: WEDE5020
- Institution: The Independent Institute of Education
- Year: 2026

---

## 1. Project Overview and Organisation Choice

**Nexus Tech** is a fictional but realistic independent electronics retailer with two physical stores in Johannesburg:

- **Sandton flagship** — Shop U24, Nelson Mandela Square, Sandton, 2196  
- **Midrand branch** — Unit 6, Waterfall View, Magwa Crescent, Midrand, 1685  

The business sells laptops, smartphones and audio accessories, and operates an on-site repair workshop. It was chosen because:

- It is a realistic South African small business that would genuinely benefit from a professional website.
- It has two locations, which allowed practice with local SEO, maps and multi-store contact forms.
- The product range (laptops, phones, accessories) and service offering (repairs) provided clear opportunities for catalogue pages, specification tables, and enquiry forms.
- The target customers (students, small businesses and individual buyers in Gauteng) are easy to write for in clear, practical language.

**Website goals** established in the original proposal:
- Present a clear product catalogue with honest specifications and stock notes.
- Make the repair desk visible and bookable.
- Capture product, bulk, trade-in and repair enquiries.
- Show both store locations with maps and contact options.
- Work well on desktop, tablet and mobile.

---

## 2. Original Proposal (Foundation for the Project)

The project began with a formal business proposal that defined:

- Organisation overview, mission and vision.
- Website goals and success indicators.
- Current analysis (no existing professional website).
- Proposed features (catalogue, repairs page, enquiry and contact forms, two locations).
- Design direction (navy, electric blue and ice-grey palette; clean, trustworthy look).
- Technical requirements (HTML5, CSS3, JavaScript; responsive design).
- Realistic timeline and budget considerations for a South African small business (hosting, domain, payment options such as PayFast).
- Harvard-style references.

The proposal also included low-fidelity wireframes for the homepage and product pages. These wireframes guided the later HTML structure and visual design.

---

## 3. Part 1 — Preparation, Assets and HTML Structure

Part 1 produced the foundational website:

### Pages created (six pages total)
- `index.html` — Homepage with hero, category cards and calls to action.
- `about.html` — History, mission and vision.
- `products.html` — Product cards and specification table.
- `repairs.html` — Repair services (extra page justified because the workshop is a core offering).
- `enquiry.html` — Enquiry form for products, bulk quotes, trade-ins and repairs.
- `contact.html` — Two store locations with addresses, phones, emails and OpenStreetMap embeds.

### Technical decisions
- Semantic HTML5 structure (`header`, `nav`, `main`, `footer`, `section`, `article`).
- Shared navigation and footer on every page.
- Skip link and `id="main"` landmark for accessibility.
- Consistent file and folder structure (`css/`, `js/`, `images/`).
- Content researched and written specifically for the Nexus Tech brand (not generic placeholder text).
- Images sourced from Unsplash with proper attribution planned.
- Visual sitemap created to document the site hierarchy.

### Challenges in Part 1
- One image download returned a broken/placeholder file (only 29 bytes). This was identified and replaced with a correct asset.
- Ensuring all pages used the same navigation and footer without duplication errors.
- Balancing academic requirements (minimum five pages, forms, multiple locations) with a realistic business site.

---

## 4. Part 2 — CSS Styling and Responsive Design

Part 2 transformed the structured HTML into a professionally styled, responsive website.

### Styling approach
- Single external stylesheet: `css/style.css`.
- CSS reset for consistent cross-browser behaviour.
- Design tokens in `:root` custom properties (colours, spacing, type scale).
- Typography: IBM Plex Sans with a modular rem-based scale.
- Layout: Flexbox for header/navigation; CSS Grid for hero, cards, contact columns and footer.
- Interactive states: `:hover`, `:focus-visible` and `:active` on links and buttons.
- Mobile navigation using a checkbox hack (no JavaScript required for the menu toggle).

### Responsive design
| Breakpoint | Query | Changes |
|------------|-------|---------|
| Desktop | Default (above 900 px) | 4-column cards, 2-column hero, full navigation |
| Tablet | `max-width: 56.25rem` (900 px) | 2-column cards, stacked hero |
| Mobile | `max-width: 40rem` (640 px) | Single column, Menu toggle, reduced type sizes |

### Responsive images
- `srcset` and `sizes` attributes on product and category images.
- `<picture>` element on the homepage hero.
- Multiple image widths (480 px, 800 px, 1200 px) so mobile users do not download large desktop files.

### Testing evidence
Screenshots were captured at three viewport sizes (desktop 1440 px, tablet 768 px, mobile 390 px) and are included in the `screenshots/` folder.

### Part 2 feedback received
- Feedback praised the use of CSS variables, Grid, Flexbox, modular typography, responsive navigation and accessibility considerations (skip links, focus indicators, keyboard support).
- **No specific corrections were required.** The lecturer instructed that the same standard of quality be maintained in Part 3.

---

## 5. Part 3 — Enhancing Functionality and SEO

Part 3 added interaction, dynamic content, robust form handling and search-engine foundations.

### Interactive elements
- **Lightbox** (`js/lightbox.js`): Product and repair images open in a larger overlay when clicked. Close via button, overlay click or Escape key.
- **Accordion FAQ** (`js/accordion.js`): On the repairs page, questions expand and collapse. Only one item is open at a time.
- **Live date stamp**: Every page footer displays the current date using JavaScript (`data-live-date`).
- **Maps**: Existing OpenStreetMap embeds on the contact page support local SEO.

### Dynamic content
- Product catalogue is stored in a JavaScript array and rendered into `#product-grid` on page load (`js/products.js`).
- Real-time search filters by product name or description.
- Category filter buttons (All / Laptops / Phones / Audio) update the displayed products. The active filter is visually highlighted.
- This demonstrates DOM manipulation and dynamic content loading without a backend.

### Forms and validation
Both forms use client-side JavaScript validation (`js/forms.js`):

- **Enquiry form** (`enquiry.html`):
  - Validates required fields, email format and South African cellphone number (10 digits starting with 0).
  - Displays clear inline error messages.
  - After successful validation, shows a contextual response based on the enquiry type (product availability, bulk quote timeline, trade-in instructions, or repair booking confirmation).

- **Contact form** (`contact.html`):
  - Same validation rules.
  - On success, compiles the message and opens the user’s email client with a pre-filled `mailto:` link addressed to the selected store (Sandton or Midrand).

### SEO implementation
- Unique, descriptive `<title>` tags and `<meta name="description">` on every page.
- Logical heading hierarchy (one H1 per page, supporting H2s).
- Descriptive `alt` text on all images.
- Clean internal linking between related pages.
- `robots.txt` and `sitemap.xml` created in the site root.
- Mobile-friendly layout carried forward from Part 2.
- Local SEO supported by two real Johannesburg addresses and map embeds.

### Deployment note
The official submission is the private classroom repository. Because the Netlify free plan does not support publishing from private organisation repositories, a public copy will be published on a personal GitHub account using GitHub Pages to provide a live URL. The private repository remains the marked submission.

---

## 6. Challenges Encountered Across the Project

- **Image asset quality**: Early in Part 1, one image file downloaded as a broken placeholder. It was diagnosed and replaced with a proper asset.
- **Responsive navigation**: Implementing a mobile menu that works without JavaScript (checkbox hack) required careful CSS so the Menu label only appears below the mobile breakpoint.
- **Form behaviour without a server**: The brief requires forms that feel functional. Client-side validation plus a contextual response (enquiry) and a `mailto:` action (contact) were used so the forms work as a static prototype.
- **Publishing constraints**: The initial recommendation to use Netlify with the private classroom repository could not be completed on the free plan. The solution (public GitHub Pages copy) was adopted after the lecturer issued an updated guide.
- **Maintaining consistency**: Ensuring every page used the same header, navigation, footer and stylesheet while still meeting the distinct requirements of each part required careful file organisation and repeated testing.
- **Documentation for a new marker**: Because the final marker may not have seen Parts 1 and 2, this README was expanded to record the full history, decisions and challenges.

---

## 7. Sitemap

```
index.html
├── about.html
├── products.html
│     ├── Search and category filters (JavaScript)
│     └── Lightbox on product images
├── repairs.html
│     └── FAQ accordion
├── enquiry.html
│     └── Validated form with contextual response
└── contact.html
      ├── Sandton store + map
      ├── Midrand store + map
      └── Validated contact form (mailto)
```

---

## 8. File and Folder Structure

```
nexus-tech/
  index.html
  about.html
  products.html
  repairs.html
  enquiry.html
  contact.html
  README.md
  robots.txt
  sitemap.xml
  css/
    style.css          ← Main stylesheet (Parts 2 and 3)
    styles.css         ← Legacy import (Part 1 compatibility)
  js/
    main.js            ← Shared helpers + live date
    products.js        ← Dynamic catalogue, search and filters
    lightbox.js        ← Image lightbox
    accordion.js       ← FAQ accordion
    forms.js           ← Form validation and responses
  images/
  screenshots/
```

---

## 9. Changelog

- **2026-08-31** — Part 1 initial structure: six HTML pages, starter CSS, form helper, README, sitemap image, Unsplash assets.
- **2026-10-05** — Part 1 improvements for Part 2 readiness:
  - Added skip link and `id="main"` landmark on every page.
  - Added visible Menu control for small screens.
  - Replaced single large images with width-specific files and `srcset` / `sizes`.
  - Standardised stylesheet name to `css/style.css`.
- **2026-10-05** — Part 2 visual system and responsive design:
  - CSS reset, `:root` colour tokens, rem type scale (IBM Plex Sans).
  - Flexbox and Grid layouts.
  - Hover, focus-visible and active states.
  - Tablet (900 px) and mobile (640 px) media queries.
  - Screenshots captured at three viewport sizes.
- **2026-11-08** — Part 2 feedback recorded. No specific corrections required. Instruction was to maintain the same standard in Part 3.
- **2026-11-08** — Part 3 AJAX form submission.
  - Updated `js/forms.js` so both the enquiry and contact forms submit asynchronously using the Fetch API (`fetch` to a test endpoint).
  - A loading state (“Sending…”) is shown on the button while the request is in progress.
  - On success the enquiry form displays a contextual response; the contact form opens a pre-filled mailto after the AJAX call completes.
  - Error handling shows a message if the request fails.
- **2026-11-09** — Part 3 functionality and SEO:
  - Added lightbox for product and repair images.
  - Added FAQ accordion on repairs page.
  - Added live date stamp in every footer.
  - Rebuilt products page with dynamic JavaScript catalogue, search and category filters.
  - Implemented proper client-side form validation with inline error messages.
  - Enquiry form shows contextual response after validation.
  - Contact form opens pre-filled `mailto:` to the selected store.
  - Added unique title tags and meta descriptions to all pages.
  - Created `robots.txt` and `sitemap.xml`.
  - Expanded this README to document the full project history for the final marker.

---

## 10. References

IBM, 2026. IBM Plex Sans. [online] Available at: https://fonts.google.com/specimen/IBM+Plex+Sans [Accessed 5 October 2026].

MDN Web Docs, 2026. CSS media queries. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries [Accessed 5 October 2026].

MDN Web Docs, 2026. Responsive images. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images [Accessed 5 October 2026].

MDN Web Docs, 2026. Client-side form validation. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 9 November 2026].

MDN Web Docs, 2026. The DOM. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model [Accessed 9 November 2026].

Google, 2026. Search Engine Optimization (SEO) Starter Guide. [online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 9 November 2026].

OpenStreetMap, 2026. OpenStreetMap. [online] Available at: https://www.openstreetmap.org [Accessed 9 November 2026].

The Independent Institute of Education, 2026. WEDE5020POE Web Development (Introduction) Portfolio of Evidence. Johannesburg: The IIE.

Unsplash, 2026. Free photographs used on product and about pages. [online] Available at: https://unsplash.com [Accessed 5 October 2026].

W3C, 2023. Web Content Accessibility Guidelines (WCAG) 2.2. [online] Available at: https://www.w3.org/TR/WCAG22/ [Accessed 5 October 2026].

---

**End of README**
