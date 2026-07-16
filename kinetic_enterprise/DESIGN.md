---
name: Kinetic Enterprise
colors:
  surface: '#f8f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434652'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737783'
  outline-variant: '#c3c6d4'
  surface-tint: '#2b5bb5'
  primary: '#003178'
  on-primary: '#ffffff'
  primary-container: '#0d47a1'
  on-primary-container: '#a1bbff'
  inverse-primary: '#b0c6ff'
  secondary: '#1b6d24'
  on-secondary: '#ffffff'
  secondary-container: '#a0f399'
  on-secondary-container: '#217128'
  tertiary: '#5b2500'
  on-tertiary: '#ffffff'
  tertiary-container: '#7f3600'
  on-tertiary-container: '#ffa777'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#00429c'
  secondary-fixed: '#a3f69c'
  secondary-fixed-dim: '#88d982'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68f'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#773200'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar_width: 260px
  container_max_width: 1440px
  gutter: 24px
  margin_mobile: 16px
  margin_desktop: 32px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 24px
---

## Brand & Style

The design system is engineered for high-stakes enterprise environments where clarity and accountability are paramount. The brand personality is **Professional, Systematic, and Facilitative**, focusing on reducing cognitive load during daily reporting and performance reviews.

The visual style follows a **Corporate / Modern** aesthetic, prioritizing functional density without sacrificing breathing room. It utilizes a structured hierarchy, subtle depth through elevation, and a systematic approach to color-coded feedback. The goal is to evoke a sense of progress and institutional reliability, ensuring users feel empowered by the data rather than overwhelmed by it.

## Colors

The palette is anchored by a deep professional blue, used for primary actions and structural navigation to establish authority. Emerald green and amber serve as semantic anchors for performance states, providing immediate visual confirmation of task status.

- **Primary**: Deep Blue (#0D47A1) for primary buttons, active sidebar states, and brand touchpoints.
- **Surface**: Pure White (#FFFFFF) for content cards and data tables to maximize contrast.
- **Background**: Light Slate Gray (#F5F7F9) to provide a soft backdrop that reduces eye strain.
- **Feedback**: High-saturation semantic colors for critical status updates, ensuring "Done" and "Rejected" states are unmistakable even at a glance.

## Typography

This design system utilizes **Inter** exclusively for its exceptional legibility in data-heavy environments. The scale is built on a tight ratio to ensure that even complex dashboards remain scannable. 

- **Headlines**: Use semibold weights (600) with slight negative letter-spacing for a modern, compact feel in headers.
- **Body**: Standardized at 14px for density, scaling to 16px for long-form reporting or feedback entries.
- **Labels**: Use 500-600 weight and uppercase styling for "Status Badges" and "Table Headers" to create clear differentiation from interactive data.

## Layout & Spacing

The layout is centered around a **Fixed Sidebar Navigation** model. This provides a persistent anchor for the three core modules: Employee, Supervisor, and Analytics.

- **Sidebar**: Fixed at 260px. It uses a collapsed state (64px) for smaller desktop viewports.
- **Main Content**: Utilizes a fluid grid within a 1440px max-width container to ensure readability on ultra-wide monitors.
- **Grid**: A 12-column system with 24px gutters. Content cards typically span 12 columns on mobile, 6 columns on tablet, and 3 or 4 columns on desktop dashboards.
- **Rhythm**: An 8px base grid governs all padding and margins to maintain a strict visual rhythm.

## Elevation & Depth

To maintain a clean, professional aesthetic, this design system uses **Tonal Layers** combined with **Ambient Shadows**. Depth is used sparingly to signify interactivity and importance.

- **Level 0 (Background)**: #F5F7F9. The base layer for the entire application.
- **Level 1 (Cards/Surfaces)**: #FFFFFF. Uses a very soft, diffused shadow (0px 2px 4px rgba(0,0,0,0.05)) to separate content from the background.
- **Level 2 (Dropdowns/Modals)**: Raised surfaces with a more pronounced shadow (0px 8px 24px rgba(0,0,0,0.12)) and a 1px neutral-200 border.
- **Interactive States**: Buttons and clickable cards use a subtle "lift" effect on hover, increasing the shadow spread.

## Shapes

The design system employs a **Rounded** shape language to soften the corporate atmosphere and make the interface feel more accessible.

- **Standard Elements**: Buttons, Input Fields, and Cards use a 0.5rem (8px) radius.
- **Large Containers**: Modals and main dashboard sections use a 1rem (16px) radius.
- **Pill Elements**: Status badges and search bars use a fully rounded (999px) radius to distinguish them from structural UI components.

## Components

### Buttons
- **Primary**: Solid Deep Blue (#0D47A1) with white text. 8px border radius.
- **Secondary**: Ghost style with Deep Blue border and text.
- **Success/Action**: Emerald Green (#2E7D32) reserved for "Approve" or "Submit Report" actions.

### Status Badges
Badges are pill-shaped with a soft background (10% opacity of the base color) and high-contrast text.
- **Pending**: Amber background, Dark Amber text.
- **Done**: Emerald background, Dark Green text.
- **Rejected**: Light Red background, Dark Red text.

### Input Fields
- **Default**: White background, 1px Gray-300 border. 
- **Focus**: 2px Deep Blue border with a soft blue outer glow.
- **Labels**: Positioned above the field in `label-md` style.

### Cards
- **Structure**: White background, 8px radius, Level 1 shadow. 
- **Header**: Includes a bottom border (#E0E4E8) separating the title from the body content.

### Lists & Tables
- **Rows**: 56px minimum height for readability. 
- **Striping**: Use #F9FAFB for zebra striping in large data tables to assist line tracking.
- **Hover**: Subtle gray background change (#F5F7F9) to indicate row selection.