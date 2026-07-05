# Iron John's Brewing Company — Website Redesign

**Live site:** [ironjohnstaphouse.netlify.app](https://ironjohnstaphouse.netlify.app)

A ground-up redesign of the Iron John's Brewing Company website — a Tucson craft brewery with two locations. The original site failed to represent the brand. My intention was to build this from scratch to deliver a modern, responsive, performance-optimized frontend that reflects the brand and supports business and customer needs. Iron John's Brewing closed in 2025; the project has continued as a portfolio piece. 

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks
- **Netlify** — static site hosting with CI/CD via GitHub
- **Netlify Serverless Functions** — secure API key delivery for Google Maps
- **Maps JavaScript API** — custom dark map styling with dual location pins
- **Font Awesome** — iconography
- **Google Fonts** — Playfair Display, Crimson Text

---

## Features

### Architecture
- Component injection system
- Dynamic menu system with hash-based routing
- Custom CSS design token system (BEM)

### Maps & Location
- Dual-location homepage map (Google Maps JavaScript API, custom dark styling)
- Order page modal — map location and restaurant details on demand

### Performance
- WebP images with <picture> element fallbacks throughout
- LCP hero image preloaded; fetchpriority="high" on first paint image

### UX & Interactivity
- Reviews carousel — auto-advance, touch swipe, dot navigation, hover pause
- Smooth scroll effects and hero parallax
- Responsive layout across mobile, tablet, and desktop
- Photo collage section with CSS Grid

### Infrastructure
- GitHub → Netlify CI/CD pipeline
- Netlify Serverless Function securing Maps API key
