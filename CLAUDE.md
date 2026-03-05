# CLAUDE.md - KD Ltd Website Project

## Project Overview

This is the **KD Ltd** website - a custom carpentry and home renovations business in Ontario, Canada. The site uses a **hybrid architecture** with Vercel (static landing page) and Wix (dynamic content).

## Tech Stack

- **Frontend**: Static HTML, CSS, JavaScript
- **Hosting**: Vercel (landing page) + Wix (content hub)
- **Domain**: kdltd.ca

## Architecture Goal

```
kdltd.ca (Vercel)          →  Premium landing page, fast, custom
projects.kdltd.ca (Wix)    →  Projects gallery + project pages
contact.kdltd.ca (Wix)     →  Contact forms + Wix chat/AI
blog.kdltd.ca (Wix)        →  Renovation tips/blog
reviews.kdltd.ca (Wix)     →  Reviews (optional)
```

## Color Scheme

- **Header/Navigation**: Gold (#D4AF37)
- **Hero Banner**: Black/Dark (#1a1a1a)
- **Page Background**: Off-white/Cream (#FAF8F5)
- **Accent**: Gold (#D4AF37)
- **Text**: Black (#000000)

## File Structure

```
/
├── index.html              # Homepage (Vercel landing)
├── services.html           # Services overview
├── projects.html           # Featured projects (links to Wix)
├── before-after.html       # Gallery preview
├── about.html              # About page
├── reviews.html            # Reviews preview
├── blog.html               # Blog preview
├── contact.html            # Contact (will redirect to Wix)
├── assets/
│   ├── styles.css          # Main stylesheet
│   ├── main.js             # JavaScript
│   └── img/                # Images and SVGs
├── services/               # Individual service pages
├── projects/               # Individual project pages
└── blog/                   # Individual blog posts
```

## Vercel Landing Page Structure

The landing page (index.html) follows this conversion-optimized order:

1. **Hero** - Headline + subheadline + 2 CTAs
2. **Services** - 4 service cards
3. **Featured Projects** - 3-6 project cards
4. **Why Choose Us** - 4 trust bullets with icons
5. **Process** - 4 steps
6. **Before/After Preview** - 1-2 transformations
7. **Testimonials Preview** - 3 reviews
8. **CTA Strip** - "Ready to start?"
9. **Footer** - Links + contact summary

## Important URLs to Configure

### On Vercel (buttons should point to Wix):
- "View Projects" → https://projects.kdltd.ca
- "Get a Free Estimate" → https://contact.kdltd.ca
- "Gallery" → https://projects.kdltd.ca/before-after
- "Contact" → https://contact.kdltd.ca

### On Wix (include Home link back):
- "Home" → https://kdltd.ca

## DNS Configuration

### Root Domain → Vercel
- `kdltd.ca` → Vercel project
- A record or ALIAS/ANAME for apex
- CNAME for www to Vercel

### Subdomains → Wix
- `projects.kdltd.ca` → CNAME to Wix
- `contact.kdltd.ca` → CNAME to Wix
- `blog.kdltd.ca` → CNAME to Wix

### WWW Handling
- Redirect `www.kdltd.ca` → `kdltd.ca` (canonical)

## Development Commands

```bash
# Local preview (use any static server)
npx serve .

# Or Python
python -m http.server 8000
```

## Deployment

Push to `main` branch - Vercel auto-deploys.

```bash
git add -A
git commit -m "Update message"
git push
```

## Key Reminders

1. **Navigation links** - Update to point to correct subdomains before launch
2. **Visual consistency** - Wix must match: logo, colors (#D4AF37 gold, #000 black, #FAF8F5 cream), fonts
3. **CTAs** - All "Free Estimate" and "Contact" buttons must go to Wix contact
4. **Analytics** - Add Google Analytics to both Vercel and Wix
5. **Mobile** - Test responsive layout before launch

## Wix Chat/AI

- Keep Wix chat only on Wix pages (projects/contact/blog)
- On Vercel, add "Chat with us" button → contact.kdltd.ca
- Do NOT embed Wix chat directly in Vercel

## SEO Checklist

- One canonical domain (kdltd.ca)
- No duplicate homepages on Wix
- Proper page titles on Wix: "Projects | KD Ltd", "Contact | KD Ltd", etc.
