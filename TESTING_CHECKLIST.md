# Post-Deployment Testing Checklist

Use this checklist to verify all functionality works correctly after deployment.

## Pre-Deployment Testing

### Local Production Build
- [ ] Run `npm run build` successfully
- [ ] Run `npm run start` and test locally
- [ ] Verify no console errors
- [ ] Check all pages load correctly

## Post-Deployment Testing

### 1. Wallet Connection
- [ ] Connect wallet (MetaMask/WalletConnect)
- [ ] Switch to Base Mainnet (Chain ID: 8453)
- [ ] Verify wallet address displays correctly
- [ ] Disconnect and reconnect wallet
- [ ] Test with multiple wallet providers

### 2. Network Switching
- [ ] Verify network switcher displays current network
- [ ] Switch to Base Mainnet
- [ ] Verify error message when on wrong network
- [ ] Test network switching flow

### 3. Project Listing
- [ ] View all projects on home page
- [ ] Filter projects by status (All/Active/Completed)
- [ ] Verify project cards display correctly
- [ ] Check project information (ID, NGO, goal, progress)
- [ ] Navigate to project details page
- [ ] Test empty state when no projects exist

### 4. Project Details
- [ ] View project details page
- [ ] Verify all project information displays
- [ ] Check milestone list
- [ ] Verify milestone status indicators
- [ ] Test milestone navigation
- [ ] Check voting progress display

### 5. Donations (ETH)
- [ ] Open donation modal
- [ ] Enter donation amount
- [ ] Verify balance check
- [ ] Submit ETH donation
- [ ] Confirm transaction in wallet
- [ ] Verify transaction success
- [ ] Check donation appears in history
- [ ] Verify project total updated

### 6. Donations (ERC20 - USDC)
- [ ] Open donation modal
- [ ] Switch to ERC20 token
- [ ] Enter donation amount
- [ ] Approve token spending (if needed)
- [ ] Submit ERC20 donation
- [ ] Confirm transaction in wallet
- [ ] Verify transaction success
- [ ] Check donation appears in history

### 7. Voting
- [ ] Donate to a project (prerequisite)
- [ ] Navigate to project with milestones
- [ ] View voting progress
- [ ] Vote on current milestone
- [ ] Verify vote recorded
- [ ] Check voting progress updated
- [ ] Verify cannot vote twice
- [ ] Test voting without contribution (should be disabled)

### 8. Project Creation (NGO)
- [ ] Connect NGO wallet
- [ ] Verify NGO status
- [ ] Open create project modal
- [ ] Fill project form
- [ ] Add milestones
- [ ] Verify milestone validation
- [ ] Submit project creation
- [ ] Confirm transaction
- [ ] Verify project appears in list
- [ ] Test with non-verified NGO (should be blocked)

### 9. Fund Release (NGO)
- [ ] Connect NGO wallet
- [ ] Navigate to NGO dashboard
- [ ] View projects created by NGO
- [ ] Navigate to project with approved milestone
- [ ] Click release funds button
- [ ] Confirm release
- [ ] Verify transaction success
- [ ] Check milestone status updated
- [ ] Test release without quorum (should be blocked)

### 10. NGO Dashboard
- [ ] Connect NGO wallet
- [ ] Navigate to NGO dashboard
- [ ] Verify only NGO's projects displayed
- [ ] Check project statistics
- [ ] Verify project links work
- [ ] Test with non-NGO wallet (should show empty state)

### 11. Error Handling
- [ ] Test with wrong network (should show error)
- [ ] Test with insufficient balance (should show error)
- [ ] Test with invalid input (should show validation error)
- [ ] Test transaction rejection (should handle gracefully)
- [ ] Test network disconnection (should show error)
- [ ] Verify error messages are user-friendly

### 12. Responsive Design
- [ ] Test on mobile (320px - 768px)
  - [ ] Home page layout
  - [ ] Project cards
  - [ ] Navigation
  - [ ] Modals
  - [ ] Forms
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (1024px+)
- [ ] Verify touch interactions work
- [ ] Check viewport meta tag

### 13. Accessibility
- [ ] Test keyboard navigation
- [ ] Verify focus indicators visible
- [ ] Check ARIA labels on interactive elements
- [ ] Test with screen reader
- [ ] Verify color contrast (WCAG AA)
- [ ] Check alt text on images
- [ ] Test form labels and inputs

### 14. Performance
- [ ] Check page load time
- [ ] Verify images load correctly
- [ ] Test with slow network (throttle)
- [ ] Check bundle size
- [ ] Verify code splitting works
- [ ] Test React Query caching

### 15. SEO & Metadata
- [ ] Verify page titles
- [ ] Check meta descriptions
- [ ] Test Open Graph tags
- [ ] Verify Twitter Card tags
- [ ] Check favicon displays
- [ ] Test manifest.json

### 16. Browser Compatibility
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Production Monitoring

### Error Tracking
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor error logs
- [ ] Set up alerts for critical errors

### Analytics
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Track key user actions
- [ ] Monitor conversion rates

### Performance Monitoring
- [ ] Monitor Core Web Vitals
- [ ] Track page load times
- [ ] Monitor API response times

## Rollback Plan

If critical issues are found:
- [ ] Document issues found
- [ ] Rollback to previous deployment
- [ ] Fix issues in development
- [ ] Re-deploy after fixes verified

## Sign-off

- [ ] All critical functionality tested
- [ ] No blocking issues found
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] Ready for production use

**Tested by**: _______________  
**Date**: _______________  
**Environment**: _______________

