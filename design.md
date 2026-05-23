# DESIGN.md — Creator Support Website Blueprint

> Goal: Build your own creator-support website inspired by the concept of Ko-fi, but with your own branding, layout, copy, colors, and features. Do not copy Ko-fi’s logo, text, exact layout, or visual identity.

---

## 1. Product Concept

Create a simple creator-support website where creators can receive support from their audience through:

- One-time donations
- Membership tiers
- Digital product sales
- Commission/service requests
- Creator posts/updates
- Simple public profile page

The site should feel friendly, fast, clean, mobile-first, and easy to use.

Example project names:

- CreatorNest
- TipJar
- FanFuel
- SupportHub
- CreatoPay
- MeowFund

---

## 2. Main User Types

### Creator

A creator can:

- Create a public profile
- Add avatar, banner, bio, and links
- Receive one-time support
- Create membership tiers
- Sell digital products
- Offer commissions/services
- Post updates
- View supporter activity

### Supporter

A supporter can:

- Visit a creator page
- Send a tip
- Join a membership
- Buy digital products
- Request commissions
- Leave a support message

---

## 3. Main Pages

## Landing Page

Purpose: Explain the platform and invite creators to start.

Recommended sections:

1. Navbar
2. Hero section
3. Feature cards
4. Creator profile preview
5. Pricing/fee explanation
6. Testimonials
7. Final call-to-action

Hero copy example:

```txt
Fund your creative work without the complexity.
Create a beautiful page where fans can tip, subscribe, shop, and support your work.
```

CTA buttons:

```txt
Start Your Page
Explore Creators
```

---

## Creator Profile Page

This is the most important page.

Layout:

```txt
[BANNER IMAGE]

[AVATAR]
Creator Name
@username
Short creator bio

[Support Button] [Membership] [Shop] [Commissions]

Tabs:
Home | Posts | Membership | Shop | Commissions | About
```

Important elements:

- Creator banner
- Creator avatar
- Name and username
- Short bio
- Social links
- Support button
- Donation box
- Membership cards
- Digital shop cards
- Recent posts
- Supporter messages

Donation box example:

```txt
Support Ibnu

Amount:
[$3] [$5] [$10] [Custom]

Message:
Leave a note...

[Support Now]
```

---

## Membership Page

Membership allows fans to support monthly.

Tier card structure:

```txt
Tier Name
$5 / month

Short description

Benefits:
- Exclusive posts
- Behind-the-scenes updates
- Early access
- Supporter badge

[Join Tier]
```

Example tiers:

### Tiny Supporter

- $3/month
- Supporter badge
- Public thank-you

### Real Fan

- $7/month
- Exclusive posts
- Downloadable content
- Monthly updates

### Inner Circle

- $15/month
- All previous benefits
- Early access
- Private community link

---

## Shop Page

For selling digital products.

Product card structure:

```txt
[Product Image]
Product Name
Short description
Price
[Buy Now]
```

Product examples:

- PDF templates
- Notion templates
- E-books
- Digital art
- AI prompt packs
- Code snippets
- Design assets

---

## Commissions Page

For custom paid work.

Commission card structure:

```txt
Service Name
Starting price
Delivery time
Short description
[Request Commission]
```

Request form fields:

- Name
- Email
- Project description
- Budget
- Deadline
- Attachment upload, optional

Example services:

- Logo design
- Website design
- AI automation setup
- Video editing
- Writing service
- Custom illustration

---

## Creator Dashboard

Dashboard sections:

- Overview
- Earnings
- Supporters
- Posts
- Memberships
- Shop
- Commissions
- Profile settings
- Payment settings

Dashboard cards:

```txt
Total Earnings
Monthly Supporters
Products Sold
Pending Commissions
New Messages
```

---

## 4. Visual Design Direction

Style keywords:

- Friendly
- Clean
- Soft
- Creator-focused
- Rounded
- Mobile-first
- Fast
- Modern

Recommended light palette:

```txt
Primary: #FF5C7A
Secondary: #7C5CFF
Background: #FFF7F9
Surface: #FFFFFF
Text: #1F1F29
Muted Text: #777789
Border: #F0DDE4
Success: #2ECC71
Warning: #FFB020
```

Recommended dark palette:

```txt
Primary: #FF6B9A
Secondary: #8B5CF6
Background: #0F0F16
Surface: #181824
Text: #FFFFFF
Muted Text: #A5A5B5
Border: #2A2A3A
```

Fonts:

```txt
Heading: Poppins / Plus Jakarta Sans / Inter
Body: Inter / Nunito / System UI
Accent: JetBrains Mono
```

Border radius:

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
```

Shadow:

```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
```

---

## 5. Component System

### Buttons

Button types:

- Primary
- Secondary
- Ghost
- Danger

Example:

```html
<button class="btn btn-primary">Support Now</button>
<button class="btn btn-secondary">View Memberships</button>
```

### Cards

Use cards for:

- Creator preview
- Membership tiers
- Products
- Dashboard stats
- Supporter messages
- Commission offers

### Forms

Common inputs:

- Text input
- Textarea
- Select dropdown
- Amount picker
- File upload
- Checkbox

### Navigation

Landing nav:

```txt
Logo | Explore | Features | Pricing | Login | Start Page
```

Creator page nav:

```txt
Home | Posts | Membership | Shop | Commissions | About
```

---

## 6. Suggested Static Folder Structure

```txt
creator-support-site/
├── index.html
├── creator.html
├── dashboard.html
├── shop.html
├── commissions.html
├── success.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

---

## 7. Suggested React Folder Structure

```txt
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── CreatorProfile.jsx
│   ├── DonationBox.jsx
│   ├── MembershipTier.jsx
│   ├── ProductCard.jsx
│   └── DashboardCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── CreatorPage.jsx
│   ├── Dashboard.jsx
│   ├── Shop.jsx
│   └── Commissions.jsx
├── data/
│   └── mockData.js
├── styles/
│   └── globals.css
└── App.jsx
```

---

## 8. Database Concept

If you later build a backend, use tables like these.

### users

```txt
id
name
email
password_hash
role
created_at
```

### creators

```txt
id
user_id
username
display_name
bio
avatar_url
banner_url
social_links
created_at
```

### donations

```txt
id
creator_id
supporter_name
supporter_email
amount
message
is_anonymous
payment_status
created_at
```

### memberships

```txt
id
creator_id
tier_name
price
benefits
description
created_at
```

### products

```txt
id
creator_id
title
description
price
file_url
cover_image_url
created_at
```

### commissions

```txt
id
creator_id
service_name
base_price
delivery_time
description
status
created_at
```

### posts

```txt
id
creator_id
title
content
visibility
created_at
```

---

## 9. MVP Feature List

Build these first:

- Landing page
- Creator profile page
- Donation box UI
- Membership tier cards
- Shop preview
- Commission preview
- Static dashboard mockup
- Mobile responsive layout

Do not build payment integration first. Start with UI and mock data.

---

## 10. Advanced Feature List

Build later:

- Authentication
- Real payment integration
- Creator dashboard analytics
- Email notifications
- Supporter comments
- Digital file delivery
- Monthly subscription billing
- Creator discovery/search
- Admin panel
- Custom creator themes
- Payment webhook verification

---

## 11. Homepage Wireframe

```txt
┌────────────────────────────────────────────┐
│ Logo        Features  Explore  Login  CTA  │
├────────────────────────────────────────────┤
│                                            │
│  Build your creator support page           │
│  Receive tips, memberships, and sales      │
│                                            │
│  [Start Your Page] [Explore Creators]      │
│                                            │
├────────────────────────────────────────────┤
│ Feature Cards                              │
│ [Tips] [Memberships] [Shop] [Commissions]  │
├────────────────────────────────────────────┤
│ Creator Profile Preview                    │
│ [Avatar] Name @username                    │
│ [Support Button] [Join Membership]         │
├────────────────────────────────────────────┤
│ Pricing / Platform Fee                     │
├────────────────────────────────────────────┤
│ Final CTA                                  │
└────────────────────────────────────────────┘
```

---

## 12. Creator Page Wireframe

```txt
┌────────────────────────────────────────────┐
│ Banner Image                               │
├────────────────────────────────────────────┤
│ Avatar  Creator Name                       │
│         @username                          │
│         Bio text here                      │
│         [Support Now]                      │
├────────────────────────────────────────────┤
│ Tabs: Home | Posts | Membership | Shop     │
├────────────────────────────────────────────┤
│ Donation Box                               │
│ Amount: [$3] [$5] [$10] [Custom]           │
│ Message: [textarea]                        │
│ [Support Creator]                          │
├────────────────────────────────────────────┤
│ Membership Tiers                           │
│ [Tier Card] [Tier Card] [Tier Card]        │
├────────────────────────────────────────────┤
│ Recent Posts                               │
└────────────────────────────────────────────┘
```

---

## 13. Dashboard Wireframe

```txt
┌────────────────────────────────────────────┐
│ Sidebar: Overview, Posts, Shop, Settings   │
├────────────────────────────────────────────┤
│ Overview                                   │
│ [Total Earnings] [Supporters] [Sales]      │
│                                            │
│ Recent Supporters                          │
│ Recent Orders                              │
│ Pending Commissions                        │
└────────────────────────────────────────────┘
```

---

## 14. UI Copy Examples

Landing page:

```txt
Your creative work deserves support.
Launch a page where fans can tip, subscribe, shop, and request your work.
```

Donation box:

```txt
Send a little support.
Your message will make this creator’s day.
```

Membership:

```txt
Join as a monthly supporter.
Get exclusive updates while helping this creator keep building.
```

Shop:

```txt
Buy digital goods directly from the creator.
```

Commission:

```txt
Need custom work?
Send a request and start a project.
```

---

## 15. Development Roadmap

### Phase 1 — Static Prototype

- Build HTML/CSS pages
- Use mock creator data
- Add responsive design
- Add fake donation success page

### Phase 2 — Interactive Frontend

- Add form validation
- Add tab navigation
- Add localStorage mock dashboard
- Add product filtering

### Phase 3 — Backend

- Add user authentication
- Add database
- Add creator profile editing
- Add post publishing

### Phase 4 — Payments

- Add payment provider
- Add donation checkout
- Add product purchase flow
- Add commission checkout
- Add webhook verification

### Phase 5 — Creator Growth Features

- Analytics dashboard
- Email updates
- Creator discovery
- Custom themes
- SEO profile pages

---

## 16. Legal / Product Notes

Do not copy Ko-fi branding, name, logo, exact layout, colors, or text.

It is okay to be inspired by general creator-support patterns like:

- Creator profile pages
- One-time tips
- Memberships
- Creator shops
- Commission requests

But your website should have its own identity, interface, wording, and user flow.

---

## 17. First Build Task

Start with only:

```txt
index.html
style.css
app.js
```

First version should include:

- Landing hero
- Creator profile preview
- Donation card
- Membership cards
- Shop preview
- Commission preview
- Responsive mobile layout

After that, split the project into multiple pages.

---

## 18. Final Design Principle

The website should answer these questions within 10 seconds:

1. Who is this creator?
2. What do they make?
3. How can I support them?
4. What do I get if I support them?
5. Can I trust this page?

If users can answer those five questions quickly, the design is working.
