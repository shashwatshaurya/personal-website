# Umami Analytics Events Documentation

This document provides a comprehensive overview of all analytics events being tracked through Umami on the personal website.

## Umami Setup

**Umami Configuration:**
- **Script URL:** `https://cloud.umami.is/script.js`
- **Website ID:** `eea44371-c230-4a79-8ed2-82d070524d67`
- **Implementation Location:** `src/index.html`

## Event Tracking Methods

The website uses two methods for tracking events:

1. **Automatic Click Tracking** - Using `data-umami-event` attributes
2. **Programmatic Tracking** - Using `umami.trackEvent()` function calls

---

## Navigation Events

### Main Navigation (Header)
**Location:** `src/pages/RootLayout/index.jsx`

| Event Name | Element | Description |
|------------|---------|-------------|
| `home-link` | Home navigation link | Tracks clicks on main "Home" nav item |
| `resume-link` | Resume navigation link | Tracks clicks on main "Resume" nav item |
| `projects-link` | Projects navigation link | Tracks clicks on main "Projects" nav item |
| `blog-link` | Blog navigation link | Tracks clicks on main "Blog" nav item |
| `connect-link` | Connect navigation link | Tracks clicks on main "Connect" nav item |

### Home Page Navigation Links
**Location:** `src/pages/Home/firstBoxComponent.jsx`

| Event Name | Element | Description |
|------------|---------|-------------|
| `resume-link-home` | Resume link on home page | Tracks resume clicks from hero section |
| `projects-link-home` | Projects link on home page | Tracks projects clicks from hero section |
| `blog-link-home` | Blog link on home page | Tracks blog clicks from hero section |

---

## Social Media Events

### Footer Social Links
**Location:** `src/components/Footer/index.jsx`

| Event Name | Element | Description |
|------------|---------|-------------|
| `linkedin-link-footer` | LinkedIn footer link | Tracks LinkedIn clicks from footer |
| `github-link-footer` | GitHub footer link | Tracks GitHub clicks from footer |
| `twitter-link-footer` | Twitter footer link | Tracks Twitter clicks from footer |

### Connect Page Social Links
**Location:** `src/pages/Connect/index.jsx`

| Event Name | Element | Description |
|------------|---------|-------------|
| `linkedin-link-connect` | LinkedIn connect page link | Tracks LinkedIn clicks from connect page |
| `github-link-connect` | GitHub connect page link | Tracks GitHub clicks from connect page |
| `twitter-link-connect` | Twitter connect page link | Tracks Twitter clicks from connect page |

---

## Action Events

### Resume Download
**Location:** `src/pages/Resume/download.jsx`

| Event Name | Element | Description |
|------------|---------|-------------|
| `download-resume` | Download button | Tracks resume PDF download clicks |

---

## Error & System Events

### Error Tracking
**Location:** `src/pages/ErrorPage/index.jsx`

| Event Name | Method | Description | Data |
|------------|--------|-------------|------|
| `error-boundary-caught-error` | `umami.trackEvent()` | Tracks JavaScript errors caught by error boundary | `{ error: error.error.stack }` |

### Page Visit Tracking
**Location:** `src/pages/NoMatch/index.jsx`

| Event Name | Method | Description |
|------------|--------|-------------|
| `no-match-page-visited` | `umami.trackEvent()` | Tracks visits to 404/invalid routes |

---

## Event Categories Summary

### By Type
- **Navigation Events:** 8 events
- **Social Media Events:** 6 events  
- **Action Events:** 1 event
- **Error/System Events:** 2 events

**Total Events:** 17 unique events

### By Tracking Method
- **Automatic (`data-umami-event`):** 15 events
- **Programmatic (`umami.trackEvent()`):** 2 events

---

## Implementation Details

### Automatic Event Tracking
Events using `data-umami-event` attributes are automatically tracked when the elements are clicked. No additional JavaScript is required.

```jsx
<Link to="/resume" data-umami-event="resume-link">Resume</Link>
```

### Programmatic Event Tracking
Events using `umami.trackEvent()` are called programmatically and can include additional data.

```javascript
umami.trackEvent("error-boundary-caught-error", { error: error.error.stack });
```

---

## Event Naming Convention

The events follow a consistent naming pattern:
- **Action-location pattern:** `{action}-{location}` (e.g., `resume-link-home`)
- **Service-action-location:** `{service}-{action}-{location}` (e.g., `linkedin-link-footer`)
- **Descriptive names:** `{description}` (e.g., `no-match-page-visited`)

---

## Analytics Goals

These events enable tracking of:

1. **User Navigation Patterns:** Understanding how users move through the site
2. **Content Engagement:** Which sections get the most attention
3. **External Link Clicks:** Social media and resume download engagement
4. **Error Monitoring:** Technical issues and user experience problems
5. **Page Performance:** 404 errors and invalid route access

---

## Notes

- All social media links open in new tabs (`target="_blank"`)
- Resume download triggers a direct file download
- Error boundary events include stack trace data for debugging
- The website uses environment-based public paths for GitHub Pages deployment

---

*Last Updated: Generated from codebase analysis*
*Umami Version: Cloud hosted instance*
*Website ID: eea44371-c230-4a79-8ed2-82d070524d67* 