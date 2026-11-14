# My First Website

This is my site for **DEV.140 Web Development at Campus**, where I am working toward my **Associate of Science in Information Technology (ASIT)**. It is a multi-page site that I am building a little more each week.

## What is in it so far

- **Three pages:** Home, Projects, and About
- **Semantic HTML** with header, nav, main, section, and footer
- Headings in order (h1, h2, h3), an image with alt text, and lists
- A wireframe of all three pages: images/updated_wireframe.png
- **CSS** in styles/style.css with type, class, and ID selectors
- A color palette of purple (#241773), gold (#9E7C0C), and light (#F7F7FB), stored as `:root` variables so every page uses the same colors
- **Google Sans Flex** for headings and **Inter** for body text
- The box model (padding, border, and margin) on the header, footer, and highlighted sections
- **Flexbox** layout for navigation, header, and footer centering
- Mobile-first **CSS Grid** with 2-column and 3-column media queries for responsive card layouts across mobile, tablet, and desktop screens
- An **accessible contact form** on the About page with linked labels, a fieldset and legend, required fields, and visible error messages

## Accessibility fixes

- Added a visible error message under each required form box and linked it with `aria-describedby`, so screen reader users hear what is wrong and sighted users see it on the page instead of relying on the browser's pop-up.
- Added a visible gold focus ring to links, form boxes, and the Send button, so keyboard users can always see where they are on the page.
- Fixed a layout overflow by correcting the element that caused it instead of hiding it with `overflow-x: hidden`, so content is not cut off at 200% zoom or on narrow screens.
- Added a meta description to my pages, so search results describe what each page is about.

WAVE shows 0 errors and 0 contrast errors on my Home, Projects, and About pages, and every text and background pair passes WCAG AA in the WebAIM Contrast Checker.

## Design choices

- **Proximity:** Each form label sits 8px above its own box, and each label and box pair sits 24px from the next one, so every field reads as one group.
- **Similarity:** My cards and form section all share the same lavender fill and gold border, so visitors can tell at a glance which parts of the page are content boxes.

## Color palette

| Role | Hex | Used for | Contrast (WebAIM) |
|---|---|---|---|
| Primary | #241773 | text, links, button, form borders | 13.59 to 1 on #F7F7FB, 12.28 to 1 on #EEEAF8, 14.53 to 1 on white |
| Accent | #9E7C0C | large heading, borders, focus ring (never small text) | 3.67 to 1 on #F7F7FB, 3.32 to 1 on #EEEAF8 |
| Neutral | #F7F7FB | page background | |
| Surface | #EEEAF8 | cards and form section | |
| White | #FFFFFF | button text, form box fill | 14.53 to 1 with primary |
| Error | #B3261E | error messages | 5.52 to 1 on #EEEAF8 |

## What is coming

**JavaScript** as the course goes on

## Live site

https://ladyredd-coder.github.io/my-first-site/