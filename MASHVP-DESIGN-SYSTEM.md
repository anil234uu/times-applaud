# 🎨 MASHVP.COM DESIGN SYSTEM
## Times Applaud - Ultra-Minimal Black & White Aesthetic

---

## 📋 OVERVIEW

This design system implements the exact visual DNA from **https://mashvp.com** — a French interactive digital agency website that scored 7.37/10 on Awwwards with their "Blend Skills, Create Balance" philosophy.

**Design Philosophy:** Ultra-minimal two-tone (black & white) with accent colors used ONLY in tiny category badges. Images provide all the color — the UI remains monochrome.

---

## 🎨 COLOR PALETTE

### Primary Colors (90% of design)
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-primary-bg` | `#000000` | Pure black background |
| `--color-surface` | `#0a0a0a` | Card backgrounds |
| `--color-surface-2` | `#111111` | Secondary surfaces |
| `--color-surface-3` | `#1a1a1a` | Tertiary surfaces |
| `--color-border` | `#222222` | Borders & dividers |
| `--color-border-subtle` | `#1a1a1a` | Subtle separators |

### Text Colors (White on Black)
| Token | HEX | Usage |
|-------|-----|-------|
| `--color-text-primary` | `#ffffff` | Headlines, primary text |
| `--color-text-secondary` | `#999999` | Body copy, descriptions |
| `--color-text-muted` | `#666666` | Metadata, timestamps |
| `--color-text-disabled` | `#444444` | Disabled states |

### Category Accents (Used ONLY in 4-8px badges)
| Token | HEX | Category |
|-------|-----|----------|
| `--color-accent-news` | `#ff3b30` | News / Breaking |
| `--color-accent-entertainment` | `#af52de` | Entertainment |
| `--color-accent-sports` | `#30d158` | Sports |
| `--color-accent-tech` | `#0a84ff` | Technology |
| `--color-accent-lifestyle` | `#ff9f0a` | Lifestyle |
| `--color-accent-fashion` | `#ff2d55` | Fashion |
| `--color-accent-health` | `#64d2ff` | Health |
| `--color-accent-travel` | `#ffd60a` | Travel |

### CRITICAL RULES:
1. **90% pure black and white** — accent colors NEVER dominate
2. **Accent colors ONLY in tiny badges** (4-8px tall pills)
3. **No gradients anywhere** — flat, solid colors only
4. **White text on black** — the ONLY reading experience
5. **Hover states use opacity** (0.5 → 1.0), NOT color changes
6. **Images provide ALL the color** — UI is monochrome

---

## 📝 TYPOGRAPHY SYSTEM

### Font Families
```css
--font-display: 'PP Neue Montreal', 'Satoshi', 'Syne', sans-serif;
--font-body: 'Inter', 'DM Sans', sans-serif;
--font-mono: 'JetBrains Mono', 'Space Mono', monospace;
--font-serif: 'Playfair Display', 'Cormorant', Georgia, serif;
```

### Typography Scale

| Element | Font | Weight | Desktop | Mobile | Letter-Spacing | Line-Height | Transform |
|---------|------|--------|---------|--------|----------------|-------------|-----------|
| **Display/Hero** | Display | 800 | 80-120px | 36-48px | `-0.04em` | 0.95 | Uppercase |
| **Section Title** | Display | 700 | 48-64px | 28-36px | `-0.03em` | 1.0 | Uppercase |
| **Article Large** | Display | 700 | 32-42px | 24-28px | `-0.02em` | 1.1 | Sentence |
| **Article Medium** | Display | 600 | 22-28px | 18-22px | `-0.01em` | 1.2 | Sentence |
| **Article Small** | Display | 600 | 16-20px | 15-18px | `0` | 1.3 | Sentence |
| **Navigation** | Display | 500 | 13-14px | 14px | `0.05em` | 1.0 | Uppercase |
| **Body Copy** | Body | 400 | 16-17px | 15-16px | `0` | 1.7 | None |
| **Meta/Timestamp** | Mono | 400 | 11-12px | 10-11px | `0.08em` | 1.4 | Uppercase |
| **Category Label** | Mono | 500 | 10-11px | 9-10px | `0.12em` | 1.0 | Uppercase |
| **Buttons/CTAs** | Display | 500 | 12-13px | 12px | `0.1em` | 1.0 | Uppercase |
| **Pull Quotes** | Serif | 400 | 28-36px | 22-28px | `0` | 1.4 | Italic |

### TYPOGRAPHY RULES:
1. **ONE sans-serif family for headings + ONE for body**
2. **Headlines are MASSIVE and TIGHT** — negative letter-spacing
3. **Body text is LIGHT and AIRY** — line-height 1.7+
4. **Monospace for ALL metadata** — dates, categories, labels
5. **NO decorative fonts** — except italic serif for pull quotes
6. **DRAMATIC size contrast** — 120px headline next to 12px meta

---

## 🎬 ANIMATION SYSTEM

### Easing Curves
```css
--ease-expo: cubic-bezier(0.77, 0, 0.175, 1);    /* Smooth expo */
--ease-sine: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Scroll reveal */
--ease-quad: cubic-bezier(0.45, 0, 0.55, 1);    /* Quadratic */
```

### Durations
```css
--duration-fast: 0.4s;
--duration-normal: 0.7s;
--duration-slow: 1.0s;
```

### C1. Page Load / Entry Animation
- **Hero Text**: Clip-path reveal `inset(0 100% 0 0)` → `inset(0 0% 0 0)`
- **Timing**: Line 1: 0s, Line 2: 0.15s, Line 3: 0.3s delay
- **Duration**: 0.8s per line
- **Easing**: `cubic-bezier(0.77, 0, 0.175, 1)`
- **Images**: Scale 1.1 → 1.0 + opacity 0 → 1

### C2. Scroll-Triggered Reveals
```css
/* Hidden state */
opacity: 0;
transform: translateY(60px);

/* Revealed state */
opacity: 1;
transform: translateY(0);

/* Trigger at 80% viewport entry */
/* Duration: 0.7s */
/* Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) */
/* Stagger: 0.08s between sibling cards */
```

### C3. Hover Interactions (Mashvp Signature)
| Element | Effect |
|---------|--------|
| **Text Links** | Opacity 0.5 → 1.0 (NO underline, NO color change) |
| **News Cards** | Image scale 1.0 → 1.05 (overflow-hidden) |
| **Navigation** | Animated underline slides left → right |
| **Buttons** | Background fill left → right |
| **Thumbnails** | Parallax shift Y: 0 → -5px |

### C4. Text Splitting Animation
- **Library**: SplitType.js or Splitting.js
- **Method**: Split into characters or words
- **Animation**: `translateY(100%)` → `translateY(0%)`
- **Stagger**: 0.02s per char OR 0.05s per word
- **Easing**: `cubic-bezier(0.77, 0, 0.175, 1)`

### C5. Image Reveal Animation
```css
/* Container */
overflow: hidden;

/* Initial state */
transform: scale(1.2);
opacity: 0;

/* Final state */
transform: scale(1);
opacity: 1;

/* Duration: 1.0s */
/* Easing: cubic-bezier(0.77, 0, 0.175, 1) */
```

### C6. Marquee / Infinite Scroll
```css
/* Speed: 50px/s */
/* Direction: Right to left */
/* Pause: On hover */
/* Separator: · (middle dot) or ★ */
/* Font: 14px, uppercase, letter-spacing 0.05em */
/* Duplicate content for seamless loop */
```

---

## 📐 LAYOUT GRID SYSTEM

### Grid Architecture
```css
--layout-max-width: 1440px;        /* Centered */
--layout-side-padding: 80px;       /* Desktop */
--section-spacing: 160px;          /* Vertical padding */
--card-gap: 24px;                  /* Between cards */
```

### Responsive Breakpoints
```css
/* Desktop (>1024px) */
--layout-side-padding: 80px;
--section-spacing: 160px;
--card-gap: 24px;

/* Tablet (768px - 1024px) */
--layout-side-padding: 40px;
--section-spacing: 120px;
--card-gap: 16px;

/* Mobile (<768px) */
--layout-side-padding: 20px;
--section-spacing: 80px;
--card-gap: 16px;
```

### CSS Grid
```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--card-gap);
}
```

### Border Radius
**`0px` everywhere** — mashvp.com uses NO border-radius (sharp, editorial)

### Borders
**`1px solid #222222`** — thin, barely visible, structural only

---

## 🧩 COMPONENT PATTERNS

### Buttons
```css
/* Sharp corners (border-radius: 0) */
/* Uppercase text */
/* Letter-spacing: 0.1em */
/* White background, black text */
/* Hover: translateY(-2px) + shadow */
```

### Cards
```css
/* Zero border-radius */
/* 1px solid #222222 border */
/* Background: #0a0a0a */
/* Hover: border brightens + translateY(-4px) */
```

### Badges
```css
/* Tiny (4-8px height) */
/* Monospace font */
/* Uppercase */
/* Letter-spacing: 0.12em */
/* Only place for accent colors */
```

### Links
```css
/* Opacity-based hover ONLY */
/* Default: opacity: 0.7 */
/* Hover: opacity: 1.0 */
/* NO underlines */
/* NO color changes */
```

---

## 🖱️ CUSTOM CURSOR

### Mashvp Style
```css
/* Small white dot: 8px diameter */
/* Larger trailing circle: 40px, stroke only */
/* mix-blend-mode: difference */
/* Hidden on touch devices */
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Foundation ✅
- [x] Replace globals.css with mashvp system
- [x] Update color palette
- [x] Implement typography scale
- [x] Add animation easing curves

### Phase 2: Components (Next)
- [ ] Update Header component
- [ ] Update Footer component
- [ ] Redesign news cards
- [ ] Update buttons and CTAs
- [ ] Implement custom cursor

### Phase 3: Animations
- [ ] Add scroll reveals to all sections
- [ ] Implement text splitting for headlines
- [ ] Add image reveal animations
- [ ] Create marquee breaking news ticker

### Phase 4: Pages
- [ ] Homepage redesign
- [ ] Category pages
- [ ] Article pages
- [ ] Legal pages styling
- [ ] All other pages

---

## 📊 BEFORE vs AFTER

### Before (Old Design)
- Gold accent theme (#C9A84C)
- Rounded corners (border-radius present)
- Colored gradients
- Multiple accent colors throughout
- Standard hover effects

### After (Mashvp-Inspired)
- Pure black & white (90% monochrome)
- Sharp edges (border-radius: 0)
- Flat, solid colors only
- Accent colors ONLY in tiny badges
- Opacity-based hover interactions
- Dramatic typography scale
- Professional animation system

---

## 🎯 DESIGN PRINCIPLES

1. **Restraint** — Less is more. If it doesn't serve function, remove it.
2. **Contrast** — Use dramatic size differences, not color, for hierarchy.
3. **Motion with Purpose** — Every animation communicates meaning.
4. **Content is King** — UI recedes, content takes center stage.
5. **Precision** — Pixel-perfect spacing, alignment, and timing.

---

**Built with love for Times Applaud**  
*Inspired by https://mashvp.com — "Blend Skills, Create Balance"*
