# Ittalab Development Instructions

## Design System Compliance

When generating code, you MUST follow these rules:

### Colors
- NEVER use gradients (linear-gradient, radial-gradient)
- ONLY use colors defined in tailwind.config.ts
- NEVER use arbitrary color values like bg-[#ABC123]

### Typography
- ONLY use font-display, font-sans, font-mono
- NEVER suggest Inter, Roboto, or system fonts
- NEVER use font sizes not in Tailwind config

### Layout
- AVOID centered layouts (use asymmetric positioning)
- NEVER suggest three-column grids for features
- ONLY use spacing tokens: space-1 through space-24

### Components
- NEVER add border-radius > 8px
- NEVER add box-shadow beyond specs
- NEVER add transform scale > 1.05
- NEVER add animations not defined in specs

### Animations
- NEVER add smooth scroll behavior
- NEVER add parallax effects
- NEVER add entrance animations
- ONLY use transitions defined in specs

### Content
- NEVER suggest: 'innovative', 'cutting-edge', 'seamless', 'world-class'
- ALWAYS be direct and specific

### Accessibility
- ALWAYS include focus states
- ALWAYS use semantic HTML
- ALWAYS include ARIA when needed

## Code Style

- Use TypeScript strict mode
- No console.logs in production
- Prefer named exports for components
- Keep components under 200 lines