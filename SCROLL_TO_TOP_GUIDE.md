# Scroll to Top Functionality Guide

## Overview

The Kaler Scan Centre application now automatically scrolls to the top of the page whenever you navigate between routes. This ensures a better user experience by always starting at the top of each page.

## How It Works

### Automatic Scroll to Top (Already Implemented)

The application uses a custom hook `useScrollToTop` that automatically triggers when the route changes:

```typescript
// Located in: src/hooks/useScrollToTop.tsx
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};
```

This hook is integrated into the main `App.tsx` component and will work for:
- All React Router `Link` components
- Navigation menu items
- Any route changes

### Manual Scroll to Top

If you need to manually trigger scroll to top in specific components, you can use the utility functions:

```typescript
import { scrollToTop, scrollToTopInstant } from '@/lib/utils';

// Smooth scroll to top
scrollToTop();

// Instant scroll to top (no animation)
scrollToTopInstant();
```

### Custom Navigation with Scroll

For programmatic navigation that also scrolls to top:

```typescript
import { useNavigationWithScroll } from '@/hooks/useNavigationWithScroll';

const { navigateWithScroll } = useNavigationWithScroll();

// This will navigate and scroll to top
navigateWithScroll('/appointments');
```

## Usage Examples

### 1. Button Click with Scroll to Top

```typescript
import { scrollToTop } from '@/lib/utils';

const handleButtonClick = () => {
  // Your button logic here
  scrollToTop();
};
```

### 2. Form Submission with Scroll to Top

```typescript
import { scrollToTop } from '@/lib/utils';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Your form submission logic
  await submitForm();
  
  // Scroll to top after successful submission
  scrollToTop();
};
```

### 3. Custom Navigation

```typescript
import { useNavigationWithScroll } from '@/hooks/useNavigationWithScroll';

const MyComponent = () => {
  const { navigateWithScroll } = useNavigationWithScroll();

  const handleNavigation = () => {
    navigateWithScroll('/services');
  };

  return (
    <button onClick={handleNavigation}>
      Go to Services
    </button>
  );
};
```

## Components That Already Work

The following components automatically scroll to top when clicked:

- ✅ Navigation menu items (Home, Services, About, Contact)
- ✅ "Book Appointment" button
- ✅ "View All Services" button
- ✅ All React Router `Link` components
- ✅ Mobile navigation menu items

## Testing

To test the scroll-to-top functionality:

1. Navigate to any page with content (e.g., Services, About)
2. Scroll down to the middle or bottom of the page
3. Click on any navigation link
4. Verify that the new page loads and automatically scrolls to the top

## Troubleshooting

### If scroll-to-top is not working:

1. **Check if the route is changing**: The scroll only triggers on route changes
2. **Verify the hook is loaded**: Ensure `useScrollToTop` is called in the component tree
3. **Check for JavaScript errors**: Look in the browser console for any errors
4. **Test with different browsers**: Some browsers handle scroll behavior differently

### For specific buttons that don't scroll:

If you have a custom button that doesn't use React Router's `Link` component, you can manually add scroll functionality:

```typescript
import { scrollToTop } from '@/lib/utils';

const CustomButton = () => {
  const handleClick = () => {
    // Your custom logic
    scrollToTop();
  };

  return <button onClick={handleClick}>Custom Button</button>;
};
```

## Browser Compatibility

The scroll-to-top functionality uses the standard `window.scrollTo()` API with smooth behavior, which is supported in all modern browsers:

- ✅ Chrome 61+
- ✅ Firefox 36+
- ✅ Safari 15.4+
- ✅ Edge 79+

For older browsers, the scroll will still work but without the smooth animation. 