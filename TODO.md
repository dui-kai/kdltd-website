# KD Ltd Website Launch Checklist

## Phase 1: Deploy Vercel Landing Page

- [ ] Deploy static site to Vercel
- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile
- [ ] Confirm color scheme matches (gold header, dark hero, cream background)

---

## Phase 2: Build the Vercel Landing Page

### 2.1 Landing Page Sections (in order)
- [ ] Hero (headline + subheadline + 2 buttons)
- [ ] Services (4 cards)
- [ ] Featured Projects (3-6 cards)
- [ ] Why Choose Us (4 bullets with icons)
- [ ] Process (4 steps)
- [ ] Before/After preview (1-2 transformations)
- [ ] Testimonials preview (3)
- [ ] CTA strip ("Ready to start?")
- [ ] Footer (links + contact summary)

### 2.2 Update Button Destinations
- [ ] "View Projects" → https://projects.kdltd.ca
- [ ] "Get a Free Estimate" → https://contact.kdltd.ca
- [ ] "Gallery" link → https://projects.kdltd.ca/before-after
- [ ] All contact buttons → https://contact.kdltd.ca

---

## Phase 3: Configure Wix as Content Hub

### 3.1 Create/Verify Wix Pages
- [ ] Projects page live
- [ ] Before & After page live
- [ ] Contact page live (with forms)
- [ ] Reviews page live
- [ ] Blog page live

### 3.2 Wix Visual Consistency
- [ ] Same logo as Vercel
- [ ] Same colors (gold #D4AF37, black #000000, cream #FAF8F5)
- [ ] Similar fonts (or closest Wix equivalents)
- [ ] Same button labels ("Free Estimate", "View Projects")
- [ ] Simple menu aligned with Vercel links

### 3.3 Projects Setup in Wix
- [ ] Use Wix gallery layouts (grid/masonry)
- [ ] Each project has: Before / During / After photos
- [ ] Each project has: 5-10 lines of story
- [ ] Each project has: Materials + timeline
- [ ] Each project has: CTA button → Contact

---

## Phase 4: Domain and DNS Setup

### 4.1 Root Domain → Vercel
- [ ] Configure kdltd.ca → Vercel project
- [ ] Add A record for apex/root (or ALIAS/ANAME)
- [ ] Add CNAME for www to Vercel

### 4.2 Subdomains → Wix
- [ ] projects.kdltd.ca → CNAME to Wix
- [ ] contact.kdltd.ca → CNAME to Wix
- [ ] blog.kdltd.ca → CNAME to Wix
- [ ] reviews.kdltd.ca → CNAME to Wix (optional)

### 4.3 WWW Handling
- [ ] Set kdltd.ca as primary (canonical)
- [ ] Redirect www.kdltd.ca → kdltd.ca

---

## Phase 5: Navigation Design

### 5.1 Vercel Navigation Menu
- [ ] Services (scroll section on landing)
- [ ] Projects → projects.kdltd.ca
- [ ] Gallery → projects.kdltd.ca/before-after
- [ ] Reviews → reviews.kdltd.ca (or section preview + link)
- [ ] Contact → contact.kdltd.ca

### 5.2 Wix Navigation Menu
- [ ] Add "Home" link → https://kdltd.ca
- [ ] Consistent menu items across all Wix pages

---

## Phase 6: AI Chat and Security

### 6.1 Chat Setup
- [ ] Keep Wix chat/AI chat only on Wix pages
- [ ] Add "Chat with us" button on Vercel → contact.kdltd.ca
- [ ] Do NOT embed Wix chat in Vercel

### 6.2 Security Settings
- [ ] Enable spam protection / CAPTCHA on forms
- [ ] Configure email notifications
- [ ] Set up lead routing
- [ ] Verify no private info exposed publicly

---

## Phase 7: Analytics and Tracking

### 7.1 Setup
- [ ] Add Google Analytics to Vercel site
- [ ] Add Google Analytics to Wix site
- [ ] Use same tracking ID for unified data

### 7.2 Key Metrics to Track
- [ ] Landing page visits
- [ ] Clicks from Vercel → contact.kdltd.ca
- [ ] Click-through to projects
- [ ] Form submission rate on Wix

---

## Phase 8: Quality Checklist Before Launch

### Visual Consistency
- [ ] Same logo on Vercel + Wix
- [ ] Same color palette
- [ ] Similar typography
- [ ] Same button labels

### UX Flow
- [ ] Every page has obvious "Contact" CTA
- [ ] Projects pages link to contact
- [ ] Wix pages have "Home" link back to Vercel

### SEO Basics
- [ ] One canonical domain (kdltd.ca)
- [ ] No duplicate homepages on Wix
- [ ] Wix pages have proper titles (Projects | KD Ltd, Contact | KD Ltd, etc.)
- [ ] Meta descriptions on all pages

### Mobile & Performance
- [ ] Mobile responsive review complete
- [ ] Speed check passed
- [ ] Images optimized

---

## Phase 9: Execution Order (Do in Sequence)

1. [ ] Deploy Vercel landing page
2. [ ] Finalize Wix pages (projects/contact/blog + chat)
3. [ ] Configure DNS: root to Vercel, subdomains to Wix
4. [ ] Update navigation links on both sides
5. [ ] Add analytics + basic SEO titles
6. [ ] Mobile review + speed check
7. [ ] **LAUNCH**

---

## Post-Launch

- [ ] Monitor analytics for first week
- [ ] Check form submissions are working
- [ ] Gather initial user feedback
- [ ] Fix any reported issues
