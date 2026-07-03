# Project Discovery & Analysis: Squeako Workspace

This document provides a comprehensive analysis of the **Squeako** website, detailing its product value proposition, information architecture, page sections, navigation structures, and code architecture.

---

## 1. Project Overview

**Squeako** is a Next.js (App Router) marketing and discovery application. It serves as the primary acquisition portal for **Squeako**, an all-in-one team communication and collaboration workspace engineered specifically for Indian startups and SMBs. 

Squeako is positioned as a local, secure, and highly cost-effective alternative to Western SaaS giants like Slack, Microsoft Teams, Zoom, and Google Chat, offering comparable tools (chat, HD video huddles, Kanban boards, presence, org hierarchy) tailored to the Indian regulatory and billing ecosystem.

---

## 2. Product Purpose & Value Proposition

Squeako solves several prominent pain points for Indian businesses:

1. **Tool Fragmentation & Platform Tax:** Startup operators often pay for separate subscriptions for chat (Slack), meetings (Zoom), and task boards (Jira/Trello). Squeako unifies these into a **6-in-1 workspace** (Chat, Channels, Video Calls, Tasks, Presence, Org Charts).
2. **Exorbitant SaaS Costs:** Western enterprise tools bill in USD and have high per-seat fees. Squeako offers a flat rate starting at **₹99/user/month** (Growth plan, billed annually), reducing software spend by up to 70%.
3. **Regulatory & Compliance Barriers:** In fintech, healthtech, and security-heavy sectors, hosting communications overseas violates local guidelines. Squeako stores all database logs and conversations **locally in Indian data centers (Mumbai)**, aligning with the **Digital Personal Data Protection (DPDP) Act**.
4. **Billing Inconvenience:** Overseas tools require credit cards capable of foreign currency transactions, incurring conversion markups and missing GST invoices. Squeako bills in **INR** with native support for UPI and net banking, providing **GST invoices** for input tax credits.
5. **Mismatched Work hours Support:** Support teams for global tools operate in Western time zones. Squeako provides **IST customer success support** directly over WhatsApp and chat.

---

## 3. Target Audience

The primary target audience is split into three main buyer profiles:

*   **Founders & SMB Owners:** Focused on reducing software budgets, eliminating tool fragmentation, and speeding up onboarding.
*   **Operational Team Leads (Engineering, Product, Sales, Ops, HR):** Focused on collaboration velocity—turning channel messages into tasks, tracking project cards, executing async standups, and mapping reporting lines.
*   **IT Admins & Compliance Officers:** Focused on compliance metrics (Mumbai data residency, DPDP audit trails, SAML 2.0/OIDC SSO integration, and SCIM provisioning).

---

## 4. User Journey

```mermaid
graph TD
    A[Visitor Lands on /] --> B{Evaluation Phase}
    B -->|Check Features| C[/features]
    B -->|Compare Costs| D[Savings Calculator on /]
    B -->|Compare Features| E[/compare]
    B -->|Verify Security| F[/security]
    B -->|Review Blueprints| G[/templates]
    B -->|Read Guides| H[/resources]
    B -->|Read Success Stories| I[/stories]
    C --> J[Conversion Action]
    D --> J
    E --> J
    F --> J
    G --> J
    I --> J
    J[Click CTA Button] --> K[/contact Lead Form]
    K -->|Submit Details| L[Contacted by Onboarding Specialist / Active Sandbox Setup]
    L --> M[/download App Store / Play Store / Web Client]
```

1.  **Discovery (Landing):** The visitor arrives on the Home page (`/`), viewing the core benefit statement: *"Team collaboration built for speed, priced for growth."*
2.  **Interactive Validation:** The user interacts with the **Savings Calculator** to compare their current multi-tool stack (e.g., Slack + Zoom) against Squeako's ₹99 flat tier to see their estimated annual savings.
3.  **Deep Dive & Education:** The visitor inspects `/features` to verify functionality, `/compare` to examine the competitive matrix, `/solutions` for industry vertical use cases, and `/security` to check compliance parameters.
4.  **Conversion:** The visitor clicks "Start free trial" or "Book a demo," leading to `/contact` to submit their team details.
5.  **App Installation:** Post-conversion, users access `/download` to download client apps for Android, iOS, or launch the web terminal.

---

## 5. Complete Page List & Purpose

| Route | Page Name | Primary Business Goal |
| :--- | :--- | :--- |
| `/` | **Home Page** | Capture interest, demonstrate the 6-in-1 workspace value, calculate savings, and funnel to conversion. |
| `/features` | **Features Detail** | Explain the product capabilities across four core categories: Talk, Meet, Organise, and Admin/Security. |
| `/pricing` | **Pricing & Plans** | Detail subscription tiers (Free, Growth, Business, Enterprise) and feature allotments. |
| `/solutions` | **Solutions Hub** | Address specific use cases by team department (Founders, Sales, Engineering) and industry (Fintech, D2C, Agencies). |
| `/compare` | **Competitor Comparison** | Provide a transparent side-by-side feature matrix against Slack, MS Teams, and Google Chat. |
| `/integrations` | **Integrations Catalog** | Show compatibility with existing workflows (GitHub, Google, Jira, Zapier) and webhook limits. |
| `/resources` | **Blog & Guides** | Educate target users on migrations, productivity checks, and DPDP compliance logs. |
| `/roadmap` | **Product Updates** | Reassure buyers that Squeako is actively developed (showing Shipped, In Progress, and Planned milestones). |
| `/security` | **Security & Trust** | Reassure enterprise IT reviews by mapping SOC2, ISO 27001, and DPDP frameworks. |
| `/download` | **Downloads Page** | Promote native client usage across Android, iOS, and Web. |
| `/contact` | **Lead Capture Form** | Gather contact information, team size, and trial intent to qualify incoming leads. |

---

## 6. Complete Section List & Content Summary for Every Page

### 6.1. Home Page (`/`)

*   **Announcement Bar:** Sticky top notification regarding local data residency, GST invoicing, and quick navigation.
*   **Hero Section:** Features a local data residency trust badge, headline copy, supportive details, action button triggers, and a mock workspace console showing chat feeds, threads, active member panels, and tasks inside a single window.
*   **Trust Strip:** Minimalist logo board displaying representative customer domains to establish authority.
*   **Problem Story:** An editorial split quoting the frustration of paying for fragmented software tools in USD without GST support.
*   **How It Works:** Three-step sequential roadmap outlining workspace creation, team invitations, and archive migration.
*   **Feature Tabs Playground:** An interactive showcase with clickable tabs (Chat & groups, Calls & meetings, Tasks, Presence, Org chart) displaying matching product capability screens.
*   **Packed Features Grid:** A grid describing secondary toolkit functions like threads, voice notes, calendar notifications, and live status charts.
*   **Multiple Views Panel:** Visual preview demonstrating how project tasks can be toggled between Kanban boards, lists, spreadsheets, and calendar cards.
*   **Why Teams Switch:** Six-card grid focusing on Rupees billing, UPI support, 100% Indian data storage, WhatsApp support during IST, and Slack archive imports.
*   **Squeako AI Section:** Explains integrated LLM capabilities: catch-up summaries for missed feeds, automatic tone rewrites, and semantic repository search.
*   **Savings Calculator:** A slider matching team size (3–500 members) and tool selectors (Slack, Zoom, Teams, Google Chat) that outputs annual legacy costs versus Squeako's flat cost.
*   **Stories Teaser:** Displays client testimonials highlighting cost reductions (e.g., Kettle saving 80% on billing) and operational efficiency gains.
*   **Integrations Teaser:** Mentions standard connector tools (Google, Notion, Jira, GitHub) to assure workflow compatibility.
*   **Security Teaser:** Summarizes DPDP status, SOC2 logs, and Mumbai data hosting.
*   **Pricing Teaser:** Side-by-side CTA highlights comparing free tier capabilities and ₹99 growth rates.
*   **FAQ Teaser:** Accordion section addressing billing, client guest additions, migration pipelines, and mobile accessibility.

---

### 6.2. Features Page (`/features`)

*   **Features Hero:** Headline and paragraph explaining the native multi-device capabilities.
*   **Talk Section:** Detailed capability brief for direct messaging, group channels, threads, reactions, and voice/video clips. Features a high-fidelity visual mock of channel threads between teammates.
*   **Meet Section:** Detailed capability brief for video conferencing, calendars, reminders, and audio transcripts. Features a calling control panel mockup showing live video feeds.
*   **Organise Section:** Explains the Kanban task boards, presence profiles, org charts, and automated standup polls. Features a mockup of a "Kanban Column" showing task priority tags.
*   **Admin & Security Section:** Outlines administrative controls, role boundaries, and audit logs. Features a mock "Admin Control Log" detailing encrypted security configurations.

---

### 6.3. Pricing Page (`/pricing`)

*   **Pricing Hero:** Bold statement detailing upfront INR billing with no hidden markups.
*   **Pricing Grid:** A pricing calculator interface with a Monthly/Annual billing switcher showing the four packages:
    1.  **Free (₹0/user/mo):** Up to 10 users, 1:1 & group chats, 90-day history limit, and basic tasks.
    2.  **Growth (₹99/user/mo annually, ₹129 monthly):** Unlimited history, group video (up to 50), standups, guest accounts, and 50GB storage.
    3.  **Business (₹199/user/mo annually, ₹249 monthly):** Group video (up to 200), call recordings/transcripts, audit compliance logs, and 250GB storage.
    4.  **Enterprise (Custom Quote):** SSO/SAML, SCIM provisioning, 99.9% uptime SLA contracts, dedicated account managers, and 24x7 support.
*   **Pricing Matrix Table:** A granular breakdown of core features (Teammates capacity, history retention, guest channels, Standup tools, SSO configuration, and data locations) across all four plans.
*   **Pricing FAQ:** Accordions detailing free limits, prorated member billing, annual discount percentages, and input tax credit invoices.

---

### 6.4. Solutions Page (`/solutions`)

*   **Solutions Hero:** Headline addressing custom configurations for various workspace workflows.
*   **By Team Section:** Specific value summaries for departments:
    *   *Founders:* Single-dashboard org overview (channels, pipeline, invoicing).
    *   *Sales:* Closer pipeline logs and client guest communication spaces.
    *   *Marketing:* Design briefs, asset storage feeds, and feedback boards.
    *   *Engineering:* Sprint logs, incident channels, code reviews, and deployments.
    *   *Customer Support:* Priority ticket guest rooms and resolution search history.
    *   *HR & Ops:* Automated standups, policy announcements, and org tree profiles.
*   **By Industry Section:** Explains industry-specific compliance and performance benefits:
    *   *IT & Software:* Agile standups and developer-friendly incident spaces.
    *   *D2C & Retail:* Coordinate warehouse updates, supply logistics, and client messaging across multiple hubs.
    *   *Fintech & Finance:* Simplify compliance procedures with localized Indian data hosting residency and DPDP logs.
    *   *Agencies:* Set up guest channels per project to give clients transparent visibility into deliverables.
    *   *Education:* Coordinate administrative staff, directories, and tasks without per-seat dollar billing shocks.
    *   *Logistics:* Sync dispatchers, sorting hubs, and delivery personnel using a lightweight mobile interface.

---

### 6.5. Compare Page (`/compare`)

*   **Compare Hero:** Headline setting up Squeako against legacy cloud subscriptions.
*   **Compare Matrix Table:** A side-by-side comparison table validating Squeako against Slack, MS Teams, and Google Chat across starting pricing, task boards, org charts, Indian data residency, local GST invoicing, and IST WhatsApp support.

---

### 6.6. Integrations Page (`/integrations`)

*   **Integrations Hero:** Headline copy outlining calendar, file sharing, and repository feeds.
*   **Integrations Grid:** Grid showcasing 12 primary plugins (Google Calendar, Drive, Gmail, Zapier, Trello, Jira, GitHub, Razorpay, Asana, Salesforce, Notion, and custom API Webhooks) with options to submit integration requests.

---

### 6.7. Resources Page (`/resources`)

*   **Resources Hero:** Headline framing playbooks for productivity and cost control.
*   **Blog Grid:** Six educational blog cards:
    *   *Slack Migration Checklist:* 1-day step plans for teams switching tools.
    *   *SaaS Stack Calculation:* Auditing fragmented communication pricing.
    *   *DPDP Act Plain Guide:* India's digital privacy mandates explained.
    *   *Standup Optimization:* Reducing standup dread through async voice updates.
    *   *Client Channels Guide:* Structuring client guest spaces without oversharing.
    *   *Remote Teams Blueprint:* Managing remote teams across time zones.

---

### 6.8. Roadmap Page (`/roadmap`)

*   **Roadmap Hero:** Headline sharing product updates and upcoming features.
*   **Roadmap Grid:** Three-column timeline:
    *   *Shipped:* Recurring meetings, away indicators, native mobile apps, and client guests.
    *   *In Progress:* AI meeting transcripts, advanced compliance logs, and Google Calendar sync.
    *   *Planned:* Automated workflow triggers, SCIM provisioning, and custom team color palettes.

---

### 6.9. Security Page (`/security`)

*   **Security Hero:** Focuses on infrastructure integrity and data storage.
*   **Security Grid:** Six detailed security cards detailing Mumbai servers, AES-256 protocols, DPDP alignment, admin boundaries, audit tracking logs, and SAML SSO credentials.

---

### 6.10. Download Page (`/download`)

*   **Download Hero:** Headline describing real-time multi-device synchronization.
*   **Download Grid:** Android (Google Play) and iOS (App Store) download icons alongside a fallback button to launch the browser client.

---

### 6.11. Contact Page (`/contact`)

*   **Contact Hero:** Warm greeting to initiate sandbox setups.
*   **Contact Grid:** 
    *   *Support Card:* hello@squeako.app, WhatsApp IST onboarding hours, and Mumbai offices.
    *   *Lead Capture Form:* Captures full name, work email, company, team size range, intent (sandbox trial, demo, migration, SLA custom rates), and optional notes.

---

## 7. Navigation Structure

Squeako employs a clear, structured navigation architecture across headers and footers to keep visitors oriented:

### 7.1. Header / Navbar Navigation
The navbar is a sticky element with a blur filter backdrop containing:
1.  **Announcement Bar:** A top-level element declaring GST invoicing and Mumbai hosting.
2.  **Logo:** Squeako branding (links back to `/`).
3.  **Dropdown Mega Menus:**
    *   **Product:** Communicates features grouped under *Communicate* (Chat & channels, clips), *Meet* (HD Conferences, standup tools), and *Organize* (Task tracker, org charts), plus a compliance card pointing to security docs.
    *   **Solutions:** Categorized by *Team* (Founders, Sales, Engineering, HR) and *Industry* (IT, D2C, Fintech, Agencies) leading to specific vertical content on `/solutions`.
    *   **Pricing:** Direct path to `/pricing`.
    *   **Compare:** Secondary dropdown containing direct competitor comparisons (`vs Slack`, `vs MS Teams`, `vs Flock`, `vs Zoom`) linking to `/compare`.
    *   **Resources:** Submenu cataloging blog content (`/resources`), templates (`/templates`), success metrics (`/stories`), enterprise SLA (`/enterprise`), product timeline (`/roadmap`), security rules (`/security`), and client downloads (`/download`).
4.  **Conversion Action Buttons:**
    *   **Sign In:** Href pointing to `/contact`.
    *   **Start Free:** Bold call to action button trigger linking directly to the Lead form `/contact`.

---

## 8. Code Structure Overview

The application utilizes a clean Next.js 15 template with TypeScript and TailwindCSS. Below is the key directory outline:

```
rebuild/
├── src/
│   ├── app/                    # File-based App Router layout and pages
│   │   ├── about/              # Company mission page
│   │   ├── compare/            # Competitive matrix page
│   │   ├── contact/            # Leads capture layout
│   │   ├── download/           # Download store redirects
│   │   ├── enterprise/         # Custom enterprise metrics page
│   │   ├── features/           # Modular capabilities detail page
│   │   ├── integrations/       # Integrations catalog grid page
│   │   ├── pricing/            # Detailed tier pricing plans page
│   │   ├── resources/          # Blog playbooks list page
│   │   ├── roadmap/            # Milestone timeline tracker page
│   │   ├── security/           # Compliance credentials page
│   │   ├── solutions/          # Team & Industry vertical page
│   │   ├── stories/            # Success stories and metric page
│   │   ├── templates/          # Blueprint templates catalog page
│   │   ├── layout.tsx          # Global providers, fonts, and schemas
│   │   └── page.tsx            # Interactive landing home page
│   │
│   ├── components/             # Reusable and page-specific components
│   │   ├── home/               # Subcomponents used only on the landing page
│   │   ├── layout/             # Global layout elements (Navbar, Footer, Drawer)
│   │   ├── shared/             # Atomic components (Buttons, Badges, Cards, Mockups)
│   │   └── [page_names]/       # Page-specific components matching app/ routes
│   │
│   ├── config/                 # Static configuration objects
│   │   ├── site.ts             # SEO Metadata, JSON-LD Schema (FAQ, Application)
│   │   ├── home.ts             # Savings calculator config exports
│   │   └── homeConfig.tsx      # Legacy stack pricing constants (Slack, Teams, etc.)
│   │
│   ├── lib/                    # Common functions
│   │   └── utils.ts            # formatCurrency helper
│   │
│   ├── styles/                 # Global styles and Tailwind base imports
│   │   └── globals.css         # Styling system & custom scroll/reveal tags
│   │
│   └── types/                  # Shared TypeScript type signatures
```

---

## 9. Key Opportunities for Code Architecture Optimization

To improve maintenance, performance, and SEO, the following code architecture updates are recommended:

1.  **Consolidate GSAP ScrollTrigger Boilerplate (DRY Principle):**
    *   *Current Issue:* Every page directory (`about/page.tsx`, `pricing/page.tsx`, `features/page.tsx`, etc.) duplicates the exact same `useEffect` logic to dynamically import GSAP and register ScrollTrigger.
    *   *Refactor:* Extract this logic into a custom React hook (e.g., `useScrollReveal` inside `src/lib/hooks.ts`) or a wrapper client component (e.g., `<ScrollRevealWrapper>`) to centralize animation execution and minimize duplication.
2.  **Separate Client-Side Interactions from Server Pages (SEO & Performance):**
    *   *Current Issue:* Almost all route pages (`app/pricing/page.tsx`, `app/features/page.tsx`, etc.) are designated as client components using `'use client'` simply to initiate GSAP scroll entry effects. This negates Next.js's Server Component advantages like faster initial loads and optimal search engine crawl indexing.
    *   *Refactor:* Retain the root page files as Server Components. Package the scroll reveal handlers, calculator inputs, and tab menus into narrow client-side child components or wraps.
3.  **Centralize Local Page Data structures into Config Folders:**
    *   *Current Issue:* Mock metrics, grids, points arrays, blogs list, and shipped updates (e.g., `aboutMetrics` in `about/page.tsx`, card lists in `solutions/page.tsx`, grid arrays in `roadmap/RoadmapGrid.tsx`) are hardcoded directly inside page components.
    *   *Refactor:* Move these static data lists into isolated JSON/TS files within `src/config/` (e.g., `src/config/roadmapData.ts`, `src/config/solutionsData.ts`). This makes components clean and makes content updates manageable.
4.  **Implement Dynamic SEO Metadata by Route:**
    *   *Current Issue:* The app-wide SEO parameters are statically defined in `layout.tsx` using `siteMetadata`. Individual sub-pages like `/pricing` or `/security` share the homepage's metadata description and title tags, which reduces search engine relevance.
    *   *Refactor:* Export a specific `metadata` object or implement a `generateMetadata()` fetch function on individual sub-pages to provide localized titles and descriptions (e.g., *"Squeako Pricing - UPI & GST Invoices for Indian Teams"*).
5.  **Clean Up Duplicate Components:**
    *   *Current Issue:* There are duplicate files under `components/home/` that overlap with modular files elsewhere (e.g., `FAQ.tsx` vs `FaqTeaser.tsx`, `Calculator.tsx` vs `SavingsCalculator.tsx`).
    *   *Refactor:* Prune orphaned files that are not imported, ensuring that only active modules are maintained in `src/components/home/`.
