# Iron John's Brewing Company — Website Redesign

**Live site:** [ironjohnstaphouse.netlify.app](https://ironjohnstaphouse.netlify.app)

A ground-up redesign of the Iron John's Brewing Company website — a Tucson craft brewery with two locations. Built as a portfolio project to deliver a modern, responsive frontend that reflects the brand and supports the business.

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks
- **Netlify** — static site hosting with CI/CD via GitHub
- **Netlify Serverless Functions** — secure API key delivery for Google Maps
- **Google Maps Embed API** — dynamic map with HTTP referrer restrictions
- **Font Awesome** — iconography
- **Google Fonts** — Playfair Display, Crimson Text

---

## Features

- Responsive layout across mobile, tablet, and desktop
- Custom CSS architecture with a global design token system (color, typography, spacing)
- Reusable component patterns: overlay cards, button system, feature lists, nav and footer loaded via JavaScript
- Secure Google Maps integration — API key never exposed to the client, served through a serverless function
- Photo collage section with CSS Grid
- Smooth scroll effects and hero parallax
- Multi-page structure: Home, Menu, Order, Contact

---

## Running Locally

Requires [Netlify CLI](https://docs.netlify.com/cli/get-started/) to run serverless functions locally.

```bash
npm install -g netlify-cli
netlify dev
```

The site runs at `http://localhost:8888`. Plain file servers (e.g. Live Server) won't serve the Netlify functions needed for Google Maps.

**Environment variable required:**

```
GOOGLE_MAPS_API_KEY=your_key_here
```

Add this to a `.env` file at the project root (already gitignored).

---

## Project Structure

```
public/
  index.html
  home.css
  styles/
    global.css        # Design tokens, typography, buttons, layout utilities
  components/
    nav.css / footer.css
  pages/
    menu.html / menu.css
    order.html
    contact.html
  scripts/
    loadNav.js / loadFooter.js
    loadApi.js        # Fetches Maps API key from serverless function
    scrollEffects.js
  images/
netlify/
  functions/
    key.js            # Serverless function — serves API key server-side
netlify.toml
```

---

## Contact

Built by Donna Ramer — [GitHub](https://github.com/TrevorsDev)
