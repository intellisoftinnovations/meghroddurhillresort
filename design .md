# Megh Roddur Hill Resort — Design System
**File:** `design.md`  
**Project:** Resort website for Megh Roddur Hill Resort, Sajek Valley, Rangamati, Bangladesh  
**Design direction:** Contemporary nature luxury, cinematic storytelling, glassmorphism, accessible motion

---

## 1. Design vision

Create a premium, immersive digital experience that makes visitors feel the mist, quiet, and scale of Sajek Valley before they arrive. The website should feel calm and confident rather than crowded or overly decorative.

**Core principles**
- **Nature first:** photography, open space, and restrained typography carry the experience.
- **Glass, used with purpose:** translucent surfaces sit over imagery for navigation, booking prompts, and selected cards. Do not apply glass to every surface.
- **Clear conversion path:** every major page makes it easy to call, message, or send a booking inquiry.
- **Motion with meaning:** animations guide attention and reveal content; they must never block access to information.
- **Mobile first:** assume many visitors arrive from social media on a phone with variable network speed.
- **Truthful details:** do not invent room types, rates, policies, facilities, or availability. Mark unconfirmed content for resort approval.

## 2. Brand personality

Keywords: misty, intimate, restorative, welcoming, refined, grounded, local.

Avoid: neon colors, heavy gradients on every component, excessive blur, tiny low-contrast text, aggressive popups, autoplay audio, fake scarcity, and unverified “luxury” claims.

Suggested headline: **Wake up above the clouds.**  
Supporting copy: **Find your quiet corner in the hills of Sajek Valley.**  
Use as draft marketing copy and confirm with the resort before publishing.

## 3. Color theory and tokens

The palette is inspired by forest foliage, cloud mist, cool mountain air, and the warm light of sunrise. Forest green provides a stable natural anchor; blue-grey supports calm; amber is a small action accent. Light neutrals protect readability.

| Token | Hex | Purpose |
|---|---|---|
| `--forest-950` | `#142A25` | Deep backgrounds, footer, strong text |
| `--forest-800` | `#24483D` | Primary brand color |
| `--forest-650` | `#376B59` | Hover states and secondary emphasis |
| `--mist-100` | `#F4F7F4` | Main light surface |
| `--mist-200` | `#E4ECE7` | Borders and soft section backgrounds |
| `--cloud-500` | `#8FA9B5` | Cool secondary accent |
| `--sky-100` | `#EAF2F4` | Pale blue surface |
| `--sunrise-500` | `#D99A55` | Small highlights and selected CTA details |
| `--ink-900` | `#18221E` | Primary text |
| `--ink-600` | `#58645E` | Secondary text |
| `--white-glass` | `rgba(255,255,255,0.16)` | Glass surfaces over dark imagery |
| `--border-glass` | `rgba(255,255,255,0.28)` | Glass borders |
| `--shadow-soft` | `0 20px 60px rgba(13,34,27,0.16)` | Elevated surfaces |

### Color application rules
- Use forest green for the primary action and important brand moments.
- Use sunrise amber sparingly—around 5% of the interface—to draw attention to a booking action or small accent.
- Use mist and white for reading surfaces; do not place long body copy directly on a busy photo.
- Text on glass must pass contrast checks. If a photo makes text difficult to read, strengthen the overlay or use a more opaque panel.
- Never communicate status by color alone.
- Verify contrast with WCAG 2.2 AA tools before release; aim for 4.5:1 for normal text and 3:1 for large text and key UI graphics.

## 4. Typography

Suggested web-safe loading strategy: use **Manrope** for UI/body and **DM Serif Display** for expressive headings, with system fallbacks. Load fonts locally or through a privacy-approved font service; avoid blocking first render.

- Display heading: DM Serif Display, regular; fluid size `clamp(2.8rem, 7vw, 6.5rem)`, line-height 0.98–1.08.
- Section heading: DM Serif Display, `clamp(2rem, 4vw, 3.8rem)`.
- Body: Manrope, 16–18px, line-height 1.6–1.75.
- Labels and navigation: Manrope, 12–14px, medium/semibold, slight letter spacing.
- Buttons: Manrope, 14–16px, semibold.
- Avoid all-caps for long labels and body content.

## 5. Glassmorphism specification

Use glass panels selectively over the hero, image overlays, floating booking widget, and navigation.

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 16px 48px rgba(13, 34, 27, 0.16);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  backdrop-filter: blur(18px) saturate(140%);
  border-radius: 24px;
}
```

Guidelines:
- Keep the glass background opaque enough for readable text.
- Use 12–20px blur for large panels; 8–12px for small controls.
- Add a subtle top-edge highlight and soft shadow, not a thick glowing outline.
- Provide a solid-color fallback when `backdrop-filter` is unsupported.
- Do not use blur for every card; alternate glass panels with solid mist surfaces.
- Reduce blur on low-power devices if profiling shows rendering cost.

## 6. Layout and responsive grid

- Main content maximum width: 1240px.
- Desktop horizontal padding: 48–72px.
- Tablet padding: 28–36px.
- Mobile padding: 18–22px.
- Use a 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid.
- Section spacing: 112–144px desktop; 72–96px tablet; 56–72px mobile.
- Cards: 20–28px radius; buttons: 999px pill or 14px radius depending on hierarchy.
- Avoid horizontal overflow and text clipped by fixed heights.

## 7. Page composition

### A. Home page
1. **Announcement / contact strip:** optional; only show verified information.
2. **Floating glass navigation:** logo/name, Rooms, Experience, Gallery, Location, Contact, and “Check availability” CTA.
3. **Cinematic hero:** full-bleed verified resort/Sajek image; dark-to-transparent overlay; eyebrow “SAJEK VALLEY · RANGAMATI”; headline; concise intro; primary booking CTA and secondary explore CTA.
4. **Trust row:** Google rating only if regularly verified; display “4.7 · 137 Google reviews” only after confirming it remains accurate and linking to the live review listing. Do not imply Google endorses the resort.
5. **Welcome story:** a short resort introduction paired with a large image.
6. **Stay / room highlights:** approved room cards with image, room name, guest capacity, facilities, and verified rate if supplied.
7. **Experience section:** hills, clouds, sunrise, balcony views, local culture, and nearby attractions only where the resort can support the claims.
8. **Gallery:** responsive masonry or editorial grid; click opens an accessible lightbox.
9. **Amenities:** icon list of confirmed amenities only.
10. **Location & arrival:** Sajek Valley, Rangamati, map embed or directions link; add practical travel notes only after confirmation.
11. **Booking callout:** clear phone and WhatsApp options plus inquiry form.
12. **FAQ:** booking, check-in/out, payment, cancellation, road access, families/couples, and other questions with answers approved by the resort.
13. **Footer:** contact, location, social links, policies, copyright, and a clear final inquiry CTA.

### B. Rooms / stay page
- Room listing grid with confirmed room names and photographs.
- Detail view with photo gallery, occupancy, bed type, included amenities, rules, and rate validity.
- Availability is inquiry-based unless a real booking/inventory system is connected.
- Clearly distinguish “Send inquiry” from a confirmed reservation.

### C. Gallery page
- Filter by approved categories such as Rooms, Views, Resort, and Experiences.
- Responsive grid, keyboard-operable lightbox, descriptive alt text.
- Use optimized images and lazy loading below the fold.

### D. Contact / booking page
- Phone: `+880 1511-670068` (provided by the requester; verify before launch).
- Additional number from supplied content: `+880 1712-547800` (verify before launch).
- Official Facebook page supplied: `https://www.facebook.com/meghroddurresort/` (confirm page identity and URL).
- Form fields: name, phone, arrival date, departure date, guest count, room preference (optional), and message.
- Consent note: information is used to respond to the inquiry.
- Validation errors must be specific and accessible; never expose form submissions in public logs.

## 8. Motion and transition system

Motion should feel cinematic but restrained.

| Interaction | Motion | Duration / easing |
|---|---|---|
| Initial hero content | Fade + translate up 18px, stagger children | 650–900ms, `cubic-bezier(.2,.7,.2,1)` |
| Scroll reveal | Opacity + translate up 20px | 500–700ms |
| Navigation glass on scroll | Background opacity and shadow change | 220ms ease |
| Buttons | Translate up 1–2px, subtle shadow | 160–220ms ease-out |
| Image hover | Scale to 1.025 with overlay fade | 400–600ms ease |
| Gallery lightbox | Fade + scale from .98 | 220–320ms |
| Accordion | Height/opacity transition | 200–280ms |
| Booking panel | Fade + translate up 12px | 240–320ms |

Implementation rules:
- Prefer CSS transitions and IntersectionObserver for scroll reveals.
- Animate `transform` and `opacity`; avoid animating layout-heavy properties.
- Reveal each item once; do not make the entire page constantly move.
- Respect `prefers-reduced-motion: reduce`; disable parallax, large transforms, and nonessential animation.
- Never delay access to navigation, phone number, or booking form for an animation.
- Do not use scroll-jacking or forced smooth scrolling.
- Keep parallax subtle and disable it on touch devices or reduced-motion settings.

## 9. Photography and image direction

- Prioritize authentic, permission-cleared photos of the actual resort, room interiors, balconies, landscape, and local surroundings.
- Hero image: wide landscape crop with a clear text-safe region; use a dark gradient overlay behind text.
- Use a consistent cool-green / warm-sunlight grade; preserve natural skin tones and real scenery.
- Do not present stock or AI-generated resort imagery as actual property photos.
- Generate AVIF/WebP variants; use responsive `srcset` and meaningful alt text.
- Hero: preload only the actual LCP image; other images lazy-load.
- Target sensible file sizes and visual quality; test on mobile data.

## 10. Component inventory

- `SiteHeader`, `MobileMenu`, `GlassNav`
- `HeroSection`, `PrimaryButton`, `TextLink`
- `RatingSummary` (verified data only)
- `SectionHeading`, `RevealOnScroll`
- `RoomCard`, `RoomGallery`
- `ImageGrid`, `AccessibleLightbox`
- `AmenityList`, `LocationPanel`
- `BookingInquiryForm`, `WhatsAppLink`, `ClickToCall`
- `FAQAccordion`, `SiteFooter`, `BackToTop` (optional)

All interactive components need visible focus states, keyboard support, and accessible labels.

## 11. Accessibility requirements

- Target WCAG 2.2 AA.
- Semantic landmarks and a correct heading hierarchy.
- Keyboard-operable menus, dialogs, gallery, and form.
- Visible focus rings; never remove outlines without replacement.
- Minimum practical touch target 44 × 44 CSS pixels.
- Form labels must remain visible; placeholders are not labels.
- Images use appropriate alt text; decorative images use empty alt.
- No essential text embedded only in images.
- Support reduced motion and 200% zoom.
- Ensure glass surfaces preserve contrast across all background images.

## 12. Performance targets

- Target good Core Web Vitals on representative mobile devices and networks.
- Avoid shipping animation libraries if CSS and small utilities are sufficient.
- Lazy-load below-fold media, split large bundles, and minimize third-party scripts.
- Reserve image dimensions to avoid layout shifts.
- Keep maps and social embeds lazy-loaded where practical.
- Test Lighthouse, keyboard navigation, reduced motion, and real mobile performance before launch.


## 14. Reference-inspired cinematic destination carousel

The supplied Globe Express references define the homepage's primary interaction pattern. Reinterpret the pattern for Megh Roddur Hill Resort—do not copy the travel brand, its text, or its destination content.

### Visual composition
- Use a full-viewport landscape photograph as the background, cropped with `cover`.
- Place a subtle dark gradient overlay over the image so white text stays legible.
- Keep a compact resort wordmark at top-left and a restrained navigation row at top-right.
- Place the active slide's location eyebrow, large condensed headline, short description, and primary CTA in the left third.
- Place a horizontal row of tall, rounded destination/property image cards across the lower-right area.
- The active card should be larger/brighter or positioned prominently; inactive cards remain visible but slightly subdued.
- Add previous/next controls, a slim progress indicator, and a clear slide count near the bottom.
- Use glassmorphism on navigation, controls, and selected overlays only. Let the photography remain the main visual.
- On mobile, retain the full-screen image and readable title, but move the card rail lower or make it horizontally scrollable so it never obscures the main CTA.

### Megh Roddur slide set
Use these as editorial concepts, subject to availability of real, permission-cleared photographs:
1. **Megh Roddur Hill Resort** — the signature property view; CTA: “Explore the resort”.
2. **Wake Above the Clouds** — mist rolling through the Sajek hills; CTA: “Discover Sajek”.
3. **A Balcony in the Hills** — an authentic room/balcony view; CTA: “Explore the stay”.
4. **Golden Hour in Sajek** — sunrise or sunset over the ridgeline; CTA: “Plan your visit”.
5. **The Quiet of the Hills** — a wider landscape or nearby experience verified by the resort; CTA: “Get in touch”.

Do not use generated or stock landscapes as if they were photos of the actual resort. If authentic imagery is not yet available, use clearly labelled temporary placeholders during development.

### Interaction and image-opening behavior
- Selecting a card changes the active slide and animates the new background into place.
- The background image crossfades; text exits with a short fade/translate and the incoming text enters with a staggered reveal.
- The selected card grows subtly or moves into the active position while the card rail slides horizontally.
- Previous/next arrows and pagination update the same active-slide state.
- Clicking “Explore” on a card may open a full-screen image viewer/lightbox for that photograph, with close, previous, and next controls. Keep this distinct from selecting the slide.
- Clicking the main CTA navigates to the appropriate page section or booking inquiry form.
- Add keyboard support: Left/Right arrows change slides when focus is not inside a text field; Escape closes the lightbox; Tab focus remains visible.
- Touch users can swipe the hero or card rail. Avoid accidental slide changes when scrolling vertically.
- Autoplay is optional and should default to off, or use a slow interval only if the resort explicitly wants it. If enabled, include pause/stop controls and pause on hover/focus; never autoplay when reduced motion is requested.
- Preload the first hero image and load the next likely slide image in advance. Lazy-load the rest.
- Prevent layout shift by reserving image and card dimensions.

### Suggested motion sequence
1. Background crossfade: 500–800 ms.
2. Current text exits: 180–260 ms, slight upward movement.
3. Incoming eyebrow/headline/description/CTA reveal: 450–700 ms with 70–110 ms stagger.
4. Card rail shift: 450–650 ms.
5. Progress indicator: transition over 250–350 ms.
Use a consistent ease such as `cubic-bezier(.2,.7,.2,1)`. Animate `opacity` and `transform`, not width/height where avoidable. Respect `prefers-reduced-motion`.

### Implementation acceptance criteria
- [ ] Selecting any card updates the background, active card, heading, location label, description, CTA, and slide count as one coherent state.
- [ ] Previous/next controls wrap correctly from last slide to first and vice versa.
- [ ] Clicking the image-preview affordance opens an accessible full-screen viewer; selecting the card alone changes the hero slide.
- [ ] Mobile card rail works with touch and does not cover essential content.
- [ ] Image loading has graceful fallback and no sudden layout jumps.
- [ ] Contrast is checked for every slide image, not just the first.
- [ ] Keyboard, screen-reader, and reduced-motion behavior are tested.
- [ ] All displayed photographs are authentic/approved or visibly marked as temporary placeholders.


## 15. Design acceptance checklist

- [ ] Looks polished at 360px, 390px, 768px, 1024px, and 1440px.
- [ ] Glass nav remains readable on bright and dark photographs.
- [ ] All CTAs work and have clear labels.
- [ ] No unverified room, price, policy, facility, or availability claims.
- [ ] Animations are smooth and reduced-motion friendly.
- [ ] Contact details and Facebook link are verified.
- [ ] Images are authentic, licensed, compressed, and responsive.
- [ ] Accessibility and performance checks pass before release.
