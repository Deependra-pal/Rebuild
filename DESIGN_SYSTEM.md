# Squeako Workspace: Premium SaaS Design System

This document outlines the complete, reusable Design System for **Squeako**. Designed for Indian startups and SMBs, this system ensures a high level of consistency, trust, and premium visual hierarchy across all sections and pages.

---

## 1. Design Principles

Every component, section, and page in the Squeako platform must align with these four core principles:

1.  **Context Over Clutter (Calm UX):** High-velocity environments create cognitive noise. The design must emphasize breathing room, structured content grouping, and muted secondary layers, allowing primary action blocks to stand out.
    *   *Reasoning:* Squeako consolidation replaces six fragmented tools. To avoid overwhelm, the interface must feel significantly calmer than the tools it replaces.
2.  **Explicit Trust Anchoring:** Compliance, security, and local billing are Squeako's key competitive advantages. Security tags, UPI support markers, and data residency credentials must be permanently legible and clear.
    *   *Reasoning:* Indian IT reviewers and finance directors prioritize regulatory compliance. Visibility of these tags removes friction early in the evaluation process.
3.  **Visual Rhythm & High Contrast:** Information must be categorized using contrasting sections, grid structures, and clear typographical scaling to support quick scanning.
    *   *Reasoning:* Busy startup founders scan landing pages in under 30 seconds. Strong visual contrast ensures they register value propositions quickly.
4.  **Device & Keyboard Agility:** Every button, select field, input group, and navigation drawer must be fully accessible and work seamlessly on small screens, laptops, and wide monitors.
    *   *Reasoning:* A significant percentage of Squeako workspace administrators verify billing and invite users on mobile screens.

---

## 2. Color System

Squeako utilizes a premium dark color palette to provide a low-glare backdrop that highlights active content blocks.

### 2.1. Color Tokens & Definition
| Token Name | Hex Value | CSS/Tailwind Variable | Primary Application | Design Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | `#E8571F` | `--color-primary` | Main buttons, active indicators, highlighted text metrics, accent glows. | Saffron-orange provides a warm, energetic local feel that contrasts strongly against dark base slates. |
| **Secondary** | `#8E939E` | `--color-secondary` | Supporting body copy, non-active menu items, secondary descriptions. | A muted slate-gray that reduces visual noise and keeps the focus on headers. |
| **Accent** | `#9D4EDD` | `--color-accent` | System indicators, tags, sub-metrics, status washes. | Violet-purple indicates secondary workflows (like AI integration). |
| **Success** | `#0CE59E` | `--color-success` | Active status lights, positive calculations, confirm checkmarks, trial tags. | Electric teal conveys positivity and matches active system states. |
| **Warning** | `#FFB703` | `--color-warning` | Pending roadmaps, away presence labels, alert tags. | Saturated amber calls out items that need attention without causing alarm. |
| **Error** | `#FF4D4D` | `--color-error` | Validation errors, input boundaries, end call controls. | Red indicates system warnings and fields requiring correction. |
| **Background Base** | `#0A0A0C` | `--color-bg-base` | Whole-body backdrop, landing page headers, hero wrapper backgrounds. | Deep space-black provides an elegant base with no glare. |
| **Background Surface** | `#121216` | `--color-bg-surface` | Table structures, alternate section backdrops, menu cards. | Dark metallic gray separates layers. |
| **Card Color** | `#181820` | `--color-bg-card` | Cards, input panels, pricing cards, feature cards. | Slate card background provides solid contrast against base slates. |
| **Border Color** | `#1E1E24` | `--color-border` | Hairline dividers, container outlines, input boundaries. | Deep gray borders create clean outlines. |
| **Text Primary** | `#FFFFFF` | `--color-text-primary` | Page titles, headings, active menu links, bold copy. | Pure white provides contrast against dark slate backgrounds. |
| **Text Secondary** | `#8E939E` | `--color-text-secondary` | Standard body description copy, dates, subtitles. | Gray text reduces eye strain and establishes reading priority. |

### 2.2. Gradient & Glow Philosophy
*   **Linear Edge Gradients:** Buttons and containers use thin, subtle gradients (from `--color-border` to `--color-bg-surface`) to simulate a metallic edge.
*   **Radial Background Glows:** Large visual mockups (like the hero workspace console) are backed by a `radial-gradient(circle, rgba(232,87,31,0.06) 0%, rgba(10,10,12,0) 70%)` layer.
    *   *Reasoning:* Soft, ambient backdrops draw focus to screenshots without cluttering the screen with lines.

---

## 3. Typography System

Our typography is designed to balance strong brand character with high readability.

### 3.1. Typography Tokens
*   **Heading Font:** `Sora` or `Poppins` (Sans-Serif, weight `800` for H1/H2, `700` for H3/H4).
    *   *Reasoning:* High-character geometric curves convey tech-forward energy and look premium at large sizes.
*   **Body Font:** `Inter` or `Plus Jakarta Sans` (Sans-Serif, weight `400` for regular body, `500` for UI elements, `600` for buttons).
    *   *Reasoning:* Highly neutral curves make dense paragraphs, tables, and chat feeds easy to read.

### 3.2. Font Scale Matrix
| Token | Font size (Desktop) | Font size (Mobile) | Line Height | Letter Spacing | Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `clamp(2.2rem, 5vw, 3.6rem)` | `2.2rem` | `1.08` | `-0.03em` | Hero section main headers. |
| **Section H2** | `clamp(1.8rem, 3.8vw, 2.6rem)` | `1.8rem` | `1.15` | `-0.02em` | Section headers. |
| **Card H3** | `1.6rem` | `1.3rem` | `1.20` | `-0.01em` | Standard cards, split titles. |
| **Feature H4** | `1.1rem` | `1.0rem` | `1.25` | `0` | Small grid headings, modal headers. |
| **Body Large** | `1.15rem` | `1.05rem` | `1.55` | `0` | Hero supporting text, top copy. |
| **Body** | `0.92rem` | `0.88rem` | `1.60` | `0` | Standard paragraphs, checklists, logs. |
| **Small** | `0.82rem` | `0.78rem` | `1.50` | `0` | FAQ items text, table rows description. |
| **Caption** | `0.7rem` | `0.66rem` | `1.40` | `0.05em` | Eyebrow badges, metadata, footnotes. |

### 3.3. Width Limits
*   **Paragraph Max-Width:** Limit body text columns to `max-w-prose` or `max-w-[540px]` to keep reading line lengths comfortable.

---

## 4. Spacing System

The spacing scale is based on an 8px grid to ensure consistent alignment.

| Step Value | Pixel Value | Application | Design Rationale |
| :--- | :--- | :--- | :--- |
| `0.5` | 4px | Inner badge components padding, label margins. | Keep elements visually grouped. |
| `1` | 8px | Button vertical padding, small card gap offsets. | Compact layout grouping. |
| `1.5` | 12px | Badge padding, list element items margin. | Clean separation for tight lists. |
| `2` | 16px | Input padding, button horizontal padding. | standard touch targets. |
| `2.5` | 20px | Small card paddings, selector offsets. | Medium layout boundaries. |
| `3` | 24px | Standard card inner padding, grid gaps. | Grid spacing. |
| `4` | 32px | Massive card paddings, mockup details margin. | Generous separation. |
| `6` | 48px | Headings to grids, headers to visual dashboards. | Clear component blocks hierarchy. |
| `8` | 64px | Sub-section margins, CTA border bounds. | Large structural spacing. |
| `10` | 80px | Mobile section vertical padding (`py-20`). | Symmetrical vertical mobile flow. |
| `12` | 96px | Desktop section vertical padding (`py-24`). | Spacious desktop section spacing. |
| `16` | 128px | Large desktop section vertical padding (`py-32`). | Ultra-wide monitors rhythm breathing. |

---

## 5. Layout System

*   **Max Container Width:** The main outer grid wrapper is capped at `1200px` (`max-w-[1200px]`) to prevent layout stretching on ultra-wide screens.
*   **Grid Rules:** Grids use symmetrical columns with a gap scale of `gap-6` (24px) for cards, and `gap-8` (32px) for structural mockups. Columns scale from 1 on mobile, to 2 on tablets, and 3 or 4 on desktop.
*   **Split Layout Rules:** Split screens (such as the savings calculator or problem story) use an asymmetric division (e.g., `55:45` or `60:40`). The left column prioritizes copy or inputs, while the right column houses visual results.

---

## 6. Border Radius System

*   **Small (`4px` / `rounded-sm`):** Tooltips, tiny badges, checkbox indicator borders.
*   **Medium (`8px` / `rounded-lg`):** Standard buttons, small select input containers, code boxes.
*   **Large (`12px` / `rounded-xl`):** Standard cards, form blocks, megamenu dropdown cards.
*   **Extra Large (`16px` / `rounded-2xl`):** Hero console dashboards, massive calculation zones, visual cards.
*   **Full (`9999px` / `rounded-full`):** Pill-shaped indicators, action buttons, scroll badges, active markers.

---

## 7. Shadow System

*   **Small Shadow (`shadow-sm`):** `0 1px 2px 0 rgba(0, 0, 0, 0.4)` - Used for buttons and inputs.
*   **Medium Shadow (`shadow-md`):** `0 4px 6px -1px rgba(0, 0, 0, 0.5)` - Used for standard cards.
*   **Large Shadow (`shadow-lg`):** `0 10px 15px -3px rgba(0, 0, 0, 0.7)` - Used for dropdown panels.
*   **Glow Shadow (`shadow-glow`):** `0 0 24px rgba(232, 87, 31, 0.08)` - Used for active selectors and highlighted cards.
*   **Glass Shadow (`shadow-glass`):** `inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)` - Inner border shadow used to create a frosted glass effect on panels.

---

## 8. Button System

Buttons must use consistent styling to guide users toward key actions:

*   **Primary Button:**
    *   *Visuals:* Solid primary saffron-orange background, white text.
    *   *Interactions:* Scale up slightly (`scale: 1.02`) on hover, scale down (`scale: 0.98`) on click.
*   **Secondary Button:**
    *   *Visuals:* Solid surface background (`bg-bg-surface`), bordered outline (`border-border`), secondary text.
    *   *Interactions:* Background changes to a slightly lighter hover state, border color shifts to primary on hover.
*   **Ghost Button:**
    *   *Visuals:* Transparent background, secondary text.
    *   *Interactions:* Subtle background overlay highlight on hover, shifts to white text.
*   **Icon Button:**
    *   *Visuals:* Symmetrical layout (`aspect-square`), rounded outline, centered icon.
    *   *Interactions:* Subtle rotation or translate offset on hover to indicate action.
*   **State Rules:**
    *   *Focus State:* 2px offset border outline (`ring-2 ring-primary`).
    *   *Disabled State:* Reduced opacity (`opacity-40`), pointer events blocked, gray overlay background.
    *   *Loading State:* Button content hidden; active spinning circular loading icon displayed.

---

## 9. Card System

*   **Feature Card:**
    *   *Layout:* Top-aligned layout, featuring a colored icon box, bold header title, and detailed paragraph copy.
    *   *Interactions:* Translation lift (`y: -2px`) and border color transition (`border-border-hover`) on hover.
*   **Pricing Card:**
    *   *Layout:* Structured list showing price metrics, plan limits, bulleted capability checks, and a solid action button.
    *   *Interactions:* The popular tier is highlighted with a primary border (`border-primary`), drop shadow, and a top-centered tag.
*   **Testimonial Card:**
    *   *Layout:* Large blockquote styled with italic body copy, accented metrics highlight, and a user profile signature line at the bottom.
*   **Dashboard Card:**
    *   *Layout:* High-contrast panel displaying screenshots or mockups, framed by clean containers.
*   **Glass Card:**
    *   *Layout:* Frost filter panel (`backdrop-blur-md bg-bg-surface/50 border border-white/5 shadow-glass`).

---

## 10. Form System

Squeako's lead capture form requires clear visual states to encourage submission:

*   **Inputs & Textareas:**
    *   *Visuals:* Solid background (`bg-bg-surface`), clean borders (`border-border`), and standard padding (`px-4 py-3`).
    *   *Focus State:* Border shifts to primary color with a subtle outer shadow (`ring-2 ring-primary/20`).
*   **Select Selectors:**
    *   *Visuals:* Custom arrow drop indicator icon, clean borders, structured selections list.
*   **Validation States:**
    *   *Error State:* Border changes to red (`border-error`), validation error message text displayed below the field.
    *   *Success State:* Checked success status badge icon displayed, border changes to green (`border-success`).

---

## 11. Badge System

*   **Status Badge:** Symmetrical circular indicator tag (e.g., green dot + "12 new") used to show active statuses.
*   **Feature Badge:** Colored tag used to categorize product categories (e.g., "Migration").
*   **AI Badge:** Saffron-orange badge showcasing intelligent platform tools.
*   **New Badge:** Vibrant accent badge indicating recently shipped milestones.
*   **Pricing Badge:** High-contrast label used to highlight savings (e.g., "Save 20%").

---

## 12. Icon System

*   **Sizing Rules:** Icons must scale proportionally: `14px` (`w-3.5 h-3.5`) inside inline links, `16px` (`w-4 h-4`) inside standard buttons, and `20px` (`w-5 h-5`) inside grid card boxes.
*   **Stroke Width:** Icons must use a consistent stroke width (`stroke-width: 2.5`) to match the bold Poppins/Sora headings.
*   **Alignment:** Icons must align vertically with text labels using flex parent containers (`items-center`).

---

## 13. Motion System: Premium Subtlety

*   **Scroll Reveal Animations:** Sections fade and slide up slightly (`y: 20` to `y: 0`, opacity `0` to `1`) using a custom ease curve (`power3.out`).
*   **Interactive Counter Adjustments:** Metric counters roll up to their target value when scrolled into view.
*   **Hover States:** Cards lift slightly (`y: -2px`) and borders brighten. Action buttons scale up slightly (`scale: 1.02`).
*   **Transitions:** Tab switchers and calculator inputs animate smoothly, avoiding jarring state changes.

---

## 14. Responsive System

*   **Breakpoint Definitions:**
    *   *Mobile:* `320px` to `640px` (single-column content, mobile nav drawer).
    *   *Tablet:* `640px` to `1024px` (collapsed navigation grids, split columns stack).
    *   *Desktop:* `1024px` to `1200px` (full navbar layout, multi-column desktop grids).
    *   *Large Desktop:* `1200px` and up (container maxes at `1200px`, content centers).
*   **Responsive Spacing Rule:** Section padding scales proportionally with screen size: `py-20` (80px) on mobile, scaling to `py-28` (112px) on tablets, and `py-32` (128px) on desktops.

---

## 15. Accessibility (a11y) Rules

*   **Contrast Ratios:** Text elements must maintain a minimum contrast ratio of `4.5:1` against their backgrounds (using white text `#FFFFFF` and light gray `#8E939E` against slate-blacks).
*   **Focus States:** Interactive elements (buttons, inputs, links) must display a clear focus ring (`ring-2 ring-primary`) when navigated via keyboard.
*   **Touch Target Size:** Interactive components on mobile screens must have a minimum target area of `44px x 44px` to prevent misclicks.
*   **Semantic HTML:** Pages must follow structured heading hierarchies (a single `H1` tag per page, followed by sequential `H2` and `H3` blocks).

---

## 16. Component Consistency Rules

To ensure a unified user experience, all reusable components must follow these guidelines:
*   **Theme Variables:** Component colors, border values, and radius tokens must use global CSS variables (`var(--color-primary)`, etc.) rather than ad-hoc inline styles.
*   **Self-Contained Layouts:** Components must manage their own internal spacing, while outer margins and positions are managed by parent grids or flex structures.
*   **Explicit State Handlers:** Reusable items (such as button boxes or input fields) must define and style their hover, active, focused, and loading states out of the box.
