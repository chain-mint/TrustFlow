# Accessibility Guidelines

This document outlines accessibility standards and practices for the Transparent Charity Tracker application.

## WCAG Compliance

The application aims to meet **WCAG 2.1 Level AA** standards.

## Accessibility Features

### 1. Keyboard Navigation

All interactive elements should be keyboard accessible:
- [ ] All buttons and links focusable with Tab
- [ ] Focus order is logical
- [ ] Focus indicators are visible
- [ ] Escape key closes modals
- [ ] Enter/Space activates buttons

### 2. ARIA Labels

Add ARIA labels to interactive elements:

```tsx
// Buttons
<button aria-label="Close modal">×</button>

// Icons
<svg aria-hidden="true">...</svg>

// Form inputs
<input aria-label="Donation amount" />

// Status indicators
<span aria-label="Project status: Active">Active</span>
```

### 3. Color Contrast

Ensure sufficient color contrast (WCAG AA):
- **Normal text**: 4.5:1 contrast ratio
- **Large text**: 3:1 contrast ratio
- **Interactive elements**: 3:1 contrast ratio

Color combinations:
- Deep Blue (#003366) on white: ✅ 12.6:1
- Slate Grey (#333333) on white: ✅ 12.6:1
- Emerald Green (#2ECC71) on white: ✅ 3.1:1
- Charity Red (#E74C3C) on white: ✅ 3.5:1

### 4. Focus Indicators

All focusable elements should have visible focus indicators:

```css
/* Example focus styles */
button:focus-visible {
  outline: 2px solid #673AB7; /* Electric Purple */
  outline-offset: 2px;
}
```

### 5. Screen Reader Support

- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- Provide descriptive alt text for images
- Use `aria-label` for icon-only buttons
- Use `aria-describedby` for form help text
- Mark decorative images with `aria-hidden="true"`

### 6. Form Accessibility

- All inputs have associated labels
- Required fields are marked with `aria-required="true"`
- Error messages are associated with inputs using `aria-describedby`
- Validation errors are announced to screen readers

Example:
```tsx
<label htmlFor="amount">Donation Amount</label>
<input
  id="amount"
  type="number"
  aria-required="true"
  aria-describedby="amount-error"
  aria-invalid={hasError}
/>
{hasError && (
  <span id="amount-error" role="alert">
    Please enter a valid amount
  </span>
)}
```

### 7. Responsive Design

- Viewport meta tag configured
- Content scales appropriately on all devices
- Touch targets are at least 44x44px
- No horizontal scrolling on mobile

### 8. Loading States

- Loading indicators have `aria-busy="true"`
- Loading text is announced to screen readers
- Skeleton loaders have appropriate ARIA labels

### 9. Error Messages

- Error messages use `role="alert"` for immediate announcement
- Errors are associated with form fields
- Error messages are descriptive and actionable

### 10. Modal Accessibility

- Modals trap focus
- Escape key closes modals
- Focus returns to trigger element on close
- Modal has `aria-modal="true"`
- Modal has `aria-labelledby` pointing to title

## Testing Tools

### Automated Testing
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Manual Testing
- Keyboard-only navigation
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast checker
- Browser zoom (200%)

## Common Issues to Avoid

1. **Missing Alt Text**: All images need descriptive alt text
2. **Poor Color Contrast**: Ensure text is readable
3. **Missing Labels**: Form inputs must have labels
4. **Keyboard Traps**: Ensure all content is keyboard accessible
5. **Missing Focus Indicators**: Users need to see where focus is
6. **Non-semantic HTML**: Use proper HTML elements
7. **Auto-playing Media**: Avoid auto-playing audio/video
8. **Flashing Content**: Avoid content that flashes more than 3 times per second

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)

## Checklist for New Features

When adding new features, ensure:
- [ ] Keyboard accessible
- [ ] ARIA labels added
- [ ] Focus indicators visible
- [ ] Color contrast sufficient
- [ ] Screen reader tested
- [ ] Mobile responsive
- [ ] Error handling accessible

