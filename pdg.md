# Megh Roddur Hill Resort — Product Development Guide
**File:** `pdg.md`  
**Document type:** Product Development Guide (PDG)  
**Version:** 1.0  
**Status:** Initial specification; confirm operational details with resort management before launch

---

## 1. Product overview

Build a modern, responsive website for **Megh Roddur Hill Resort**, located in Sajek Valley, Rangamati, Bangladesh. The site should help visitors discover the property, understand available stays, view authentic photographs, and contact the resort to ask about dates and rates.

The experience combines editorial travel storytelling with modern glassmorphism and restrained motion. The website is not considered a live reservation system unless availability, room inventory, payment, and booking confirmation are implemented and tested.

### Supplied property information (verify before publishing)
- Name: Megh Roddur Hill Resort
- Location text supplied: Valley, Sajek 4590, Rangamati, Bangladesh
- Google rating supplied: 4.7 from 137 reviews (may change; verify and link to the current listing)
- Phone supplied: `+880 1511-670068`
- Additional phone supplied: `+880 1712-547800`
- Facebook page supplied: `https://www.facebook.com/meghroddurresort/`
- Check-in and check-out supplied in third-party summary: check-in between 14:00 and 20:30; check-out by 11:00. Confirm with management before publication.
- Supplied amenities to verify: private balconies, attached washrooms, 24-hour front desk, children's play area.

No rate, room count, room type, cancellation policy, payment method, or live availability has been confirmed in this brief.

## 2. Product goals

1. Turn high-intent visitors into phone, WhatsApp, or form-based booking inquiries.
2. Present the resort and its surroundings with accurate, high-quality visuals.
3. Make essential information easy to find on mobile.
4. Build visitor confidence through transparent contact details and clearly stated policies.
5. Provide a maintainable foundation for future online availability and booking features.
6. Make the site fast and accessible despite rich visuals and animation.

### Success metrics
Measure after analytics and consent/privacy requirements are approved:
- Booking CTA click-through rate.
- Click-to-call and WhatsApp click count.
- Booking form starts, submissions, and validation failures.
- Gallery engagement and room-detail views.
- Mobile Core Web Vitals and accessibility audit outcomes.
- Inquiry response time, if tracked by the resort.

Do not set fabricated baseline values. Establish a baseline after launch.

## 3. Target users

- Families and groups planning a Sajek trip.
- Couples and leisure travelers comparing stays.
- Visitors arriving from Facebook, Google Search/Maps, or shared links.
- Travelers on mobile data who need quick access to the phone number and booking information.

### Main user needs
- Is this the correct resort, and where is it?
- What do the actual rooms and views look like?
- What is the rate for my dates and group size?
- How do I contact the resort quickly?
- What are the check-in, check-out, and cancellation rules?
- What travel and access details should I confirm before arrival?

## 4. Scope

### MVP — required for first release
- Responsive home page.
- Navigation and clear contact/booking CTAs.
- About / resort introduction.
- Room or stay section populated only with approved data.
- Authentic image gallery with accessible lightbox.
- Confirmed amenities.
- Location and directions.
- Booking inquiry form.
- Click-to-call and WhatsApp links (WhatsApp number must be verified).
- FAQ with management-approved answers.
- Footer with contact, social links, privacy notice, and terms/policies where applicable.
- SEO metadata, social sharing metadata, sitemap, robots file, analytics only if approved.
- Error, loading, empty, success, and form-validation states.
- Basic security, spam protection, backup, and deployment checklist.

### Later enhancements
- CMS/admin interface for room content, gallery, FAQs, and contact details.
- Room/date availability calendar.
- Booking management dashboard.
- Online payment, only after requirements, provider support, reconciliation, and security review.
- Bangla/English language switch.
- Reviews integration with source attribution and policy compliance.
- Travel guide and nearby attractions.
- CRM or notification integration for inquiries.

## 5. Information architecture

```text
Home
├── About the Resort
├── Stay / Rooms
│   └── Room Detail (optional for MVP)
├── Gallery
├── Experience / Around Sajek
├── Location & Directions
├── FAQs
└── Contact / Booking Inquiry
    ├── Phone
    ├── WhatsApp
    └── Inquiry Form

Footer
├── Contact details
├── Facebook
├── Privacy notice
└── Policies
```

For the MVP, these can be sections on a single-page site if the content is modest. Use separate pages when room details, gallery filters, or SEO needs justify them.

## 6. Functional requirements

### FR-01 — Navigation
- Desktop navigation links to all key sections/pages.
- Mobile navigation opens and closes with keyboard and touch.
- Header can transition to a more opaque glass surface on scroll.
- Current page/section is indicated accessibly.
- Booking CTA remains easy to find.

### FR-02 — Hero
- Display a verified resort/landscape image with a readable overlay.
- Show resort name, location, a concise value proposition, and two actions: “Check availability” and “Explore the resort.”
- Hero CTA scrolls to or opens the inquiry form; it must not claim a booking is confirmed.

### FR-03 — Room information
- Show only room types and facilities confirmed by management.
- Each room entry may include name, images, guest capacity, bed configuration, amenities, and rate information.
- If rates are not published, say “Contact us for rates” rather than inventing prices.
- Indicate when seasonal or date-dependent rates apply, if confirmed.

### FR-04 — Gallery
- Display approved photographs with responsive image sizing.
- Open images in a lightbox that supports keyboard navigation, Escape to close, and screen-reader labels.
- Prevent layout shifts while images load.
- Do not use generated/stock images in a way that misrepresents the property.

### FR-05 — Amenities and experiences
- Show only facilities confirmed by resort management.
- Any nearby destination, travel time, road condition, or activity claim must be checked and dated where appropriate.

### FR-06 — Location
- Present the supplied location and a link to a verified Google Maps listing/directions.
- Map embed is optional and should load lazily.
- Do not publish exact coordinates unless verified.

### FR-07 — Booking inquiry form
Fields:
- Full name (required)
- Phone number (required)
- Arrival date (required)
- Departure date (required and later than arrival)
- Number of guests (required; minimum 1)
- Room preference (optional; only use approved options)
- Message (optional)
- Consent checkbox or clear notice describing how inquiry information is used

Behavior:
- Client-side and server-side validation.
- Prevent departure date from being before or equal to arrival date.
- Show accessible errors next to the relevant fields.
- Show a clear confirmation state after successful submission.
- Do not promise availability until resort staff confirms it.
- Add server-side spam mitigation, request throttling, and safe logging.
- Do not collect payment card data in this form.

### FR-08 — Phone and WhatsApp
- Phone action uses `tel:` with the verified number.
- WhatsApp action uses a valid wa.me link with country code and digits only; verify which number accepts WhatsApp before enabling.
- Provide a human-readable fallback number for visitors who cannot open the link.

### FR-09 — Contact and policy content
- Publish only management-approved contact numbers, opening/front-desk information, payment options, cancellation rules, check-in/out, guest policies, and child/family rules.
- Include privacy notice explaining form data use and retention.
- Ensure the resort has access to the inbox or system receiving inquiry submissions.

### FR-10 — SEO and sharing
- Unique title and description.
- Canonical URL after domain selection.
- Open Graph/social sharing image using approved property imagery.
- Sitemap and robots.txt.
- Structured data only for facts that can be verified; avoid fake review markup or unsupported aggregate ratings.
- Use meaningful page headings and descriptive image alt text.

## 7. Visual and motion requirements

Follow `design.md` as the design source of truth.

- Nature-inspired forest, mist, cloud-blue, and restrained sunrise palette.
- Editorial display typography paired with highly legible sans-serif body text.
- Glassmorphism for navigation and selected overlays—not every card.
- Large landscape imagery, generous spacing, rounded corners, and soft shadows.
- Reveal transitions, gentle image hover, smooth accordions, and polished mobile menu.
- Respect `prefers-reduced-motion`; keep essential actions immediate.
- No autoplay audio, intrusive modal, scroll-jacking, or animation that prevents reading.

## 8. Suggested technology

Choose the stack that fits the existing repository. If starting fresh:
- Frontend: React + Vite or Next.js, with TypeScript if the team is comfortable.
- Styling: CSS modules or a maintainable utility/CSS system; define design tokens centrally.
- Motion: CSS transitions first; use a motion library only when it adds clear value.
- Backend (optional for MVP): Django with a small inquiry endpoint and admin workflow.
- Data storage: PostgreSQL for production if the site stores inquiries or room content.
- Media: optimized AVIF/WebP in a reliable object store or image CDN.
- Hosting: deploy frontend and backend on a supported production host with HTTPS.
- Email: verified transactional email provider for inquiry notifications; do not rely on local development email in production.
- Monitoring: error tracking and uptime checks with approved privacy settings.

If the website is static and the resort handles inquiries directly by phone/WhatsApp, do not add an unnecessary backend. A form, however, requires a secure delivery destination and a tested operational process.

## 9. Suggested data model (if using Django)

### Room
- `id`
- `name`
- `slug`
- `summary`
- `description`
- `max_guests` (nullable until verified)
- `bed_configuration` (nullable)
- `amenities` (structured list or related table)
- `published_rate` (nullable; include currency and validity rules if used)
- `is_published`
- `display_order`

### GalleryImage
- `id`
- `image`
- `alt_text`
- `category`
- `caption` (optional)
- `is_published`
- `display_order`

### BookingInquiry
- `id`
- `full_name`
- `phone`
- `arrival_date`
- `departure_date`
- `guest_count`
- `room_preference` (optional)
- `message` (optional)
- `consent_at` or equivalent record, if appropriate
- `status` (new, contacted, confirmed, declined, closed)
- `created_at`
- `updated_at`

Store only information required to respond. Define retention and access rules before production. Never expose inquiries through public APIs.

## 10. Security and privacy

- Enforce HTTPS.
- Validate all input server-side.
- Use CSRF protection where applicable and safe framework defaults.
- Apply rate limits and spam controls to the inquiry endpoint.
- Keep secrets in environment variables/secret manager; never commit secrets.
- Restrict admin access; use strong authentication and least privilege.
- Escape user-generated content and use ORM parameterization.
- Limit access to guest inquiries and keep sensitive data out of logs.
- Establish backups and a restore test if data is stored.
- Configure email SPF/DKIM/DMARC if sending from a custom domain.
- Publish a plain-language privacy notice and follow applicable laws/policies.

## 11. Non-functional requirements

### Performance
- Responsive images and modern formats.
- Lazy-load below-the-fold images, maps, and embeds.
- Reserve image dimensions to prevent cumulative layout shift.
- Avoid large dependencies and excessive blur/parallax.
- Test on mid-range Android devices and slower connections.

### Accessibility
- WCAG 2.2 AA target.
- Semantic HTML, correct heading order, keyboard access, visible focus, and accessible forms.
- Minimum 44 × 44 CSS pixel touch targets where practical.
- Contrast testing on glass surfaces over every hero/gallery image.
- Reduced-motion support and usable 200% zoom.

### Reliability
- Custom not-found and error states.
- Monitor inquiry delivery and notify staff when submissions fail.
- Back up database/media when applicable.
- Provide a clear fallback phone/WhatsApp contact if the form is unavailable.

### Compatibility
- Current Chrome, Edge, Firefox, Safari, Android browsers, and iOS Safari.
- Test at 360px, 390px, 768px, 1024px, and 1440px widths.

## 12. Acceptance criteria

The MVP is ready when:
- [ ] All pages/sections work on mobile and desktop.
- [ ] Every CTA leads to the correct section, phone, or verified messaging destination.
- [ ] Inquiry form validates dates and required fields.
- [ ] Successful inquiries reach the intended staff inbox/dashboard in a real production test.
- [ ] No fake room data, prices, ratings, amenities, or availability are shown.
- [ ] Resort contact details and social link have been verified.
- [ ] Images are approved, correctly described, and optimized.
- [ ] Motion respects reduced-motion preferences and never blocks navigation.
- [ ] Keyboard-only use and screen-reader labels have been tested.
- [ ] Lighthouse/Core Web Vitals and accessibility audits have been run and issues reviewed.
- [ ] SEO metadata, sitemap, canonical URL, and social preview have been checked.
- [ ] HTTPS, spam protection, secret handling, backups (if needed), and error monitoring are configured.

## 13. Delivery plan

### Phase 1 — Discovery and content confirmation
- Confirm correct resort name, address, phone numbers, WhatsApp number, Facebook URL.
- Collect approved room names, photographs, rates (if public), facilities, rules, and booking process.
- Decide whether inquiry form submissions go to email, a dashboard, or both.

### Phase 2 — Design
- Apply `design.md` tokens and page composition.
- Build responsive wireframes and a clickable prototype.
- Review with resort management before full implementation.

### Phase 3 — MVP development
- Implement navigation, hero, stay section, gallery, amenities, location, FAQ, contact, and form.
- Add responsive image optimization, motion, reduced-motion support, and accessible states.
- Add backend only if needed for form delivery or content management.

### Phase 4 — QA and launch
- Test form delivery end-to-end.
- Verify all property facts and contact links.
- Test mobile performance, accessibility, SEO, and browser compatibility.
- Configure domain, HTTPS, monitoring, backups, and staff ownership.
- Obtain final approval before publishing.

### Phase 5 — Post-launch improvements
- Review real inquiry conversion and user behavior.
- Improve photography, copy, and booking flow based on evidence.
- Consider a CMS, availability calendar, and booking management only after the operational process is defined.

## 14. Open questions for resort management

These items must be confirmed; do not fill them with guesses:
1. What are the official room names, capacities, and current rates?
2. Which phone number should be the primary booking contact, and which number supports WhatsApp?
3. Are the supplied check-in/check-out times correct?
4. Which amenities are currently available?
5. What are the cancellation, advance payment, refund, and guest policies?
6. Which photos may be published, and who owns usage rights?
7. Should inquiries be delivered by phone/WhatsApp, email, dashboard, or a combination?
8. Is a Bangla/English language switch required for launch?
9. Is there an official domain and hosting account already available?
10. Who will update rates, room information, gallery images, and policies after launch?

---

**Development rule:** accuracy beats decoration. A visually impressive website must still provide trustworthy property information and a booking process that works.


## 15. Reference-inspired homepage carousel requirement

The supplied visual references establish a full-screen, image-led destination slider as the homepage hero. This is a core requirement, not an optional decorative section.

### Required composition
- Full-viewport photographic background.
- Compact top navigation with the resort name/wordmark.
- Left-side location label, large headline, short description, and CTA.
- Lower-right horizontal rail of tall destination/property cards.
- Previous/next controls, progress line, and slide counter.
- Restrained glass surfaces and gradient overlays for contrast.
- Responsive layout: on small screens the card rail may become a horizontal swipe rail beneath the headline.

### Slide content
Use five initial slide concepts:
1. Megh Roddur Hill Resort (signature property view).
2. Wake Above the Clouds (Sajek landscape).
3. A Balcony in the Hills (approved room/balcony photograph).
4. Golden Hour in Sajek (approved sunrise/sunset photograph).
5. The Quiet of the Hills (approved landscape/experience).

All property-specific claims and images must be approved by the resort. Use clearly labelled placeholders until actual images are supplied.

### Behavior
- Selecting a card makes it the active slide.
- Active slide state updates background, eyebrow/location, headline, description, CTA, active card, progress, and slide count.
- Background crossfades; text transitions out/in; the card rail shifts smoothly.
- Previous/next buttons and swipe gestures control the same carousel state.
- The card's image-preview affordance may open a separate accessible lightbox with close/previous/next actions.
- The main CTA goes to the relevant section or booking inquiry form.
- Keyboard arrows work when focus is not in a form field; Escape closes the lightbox.
- If autoplay is used, include pause controls and disable it for reduced-motion preference. Manual interaction must always remain available.
- Preload the first hero image; optimize and reserve dimensions for all image assets.
- Use reduced-motion fallbacks and ensure controls remain usable with keyboard and screen readers.

### Carousel-specific acceptance tests
- [ ] All slide elements update together without mismatched title/background.
- [ ] First/last slide navigation wraps correctly.
- [ ] Active/inactive card states are visually clear.
- [ ] Lightbox open/close and keyboard controls work.
- [ ] Swipe does not prevent normal vertical page scrolling.
- [ ] The mobile headline and primary CTA remain visible.
- [ ] Each background image has a contrast-safe overlay.
- [ ] Performance is tested on a mid-range phone and a slower connection.

