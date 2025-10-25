# Images Directory

## Instructions for Adding Your Profile Picture

1. **Add your profile picture** to this directory
2. **Name it exactly**: `profile-picture.jpg` (or `.png`)
3. **Recommended size**: 400x400px minimum, square aspect ratio
4. **File size**: Under 2MB for optimal loading

## How to Enable Your Profile Picture

1. Add your image file to this directory
2. Open `src/components/Hero.tsx`
3. Find the commented Image component (around line 185-193)
4. Uncomment the Image component code
5. Comment out or remove the placeholder div with the User icon

## Example Code to Uncomment:

```jsx
<Image
  src="/images/profile-picture.jpg"
  alt="Priya Das"
  fill
  className="object-cover"
  priority
/>
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: 400x400px minimum (square recommended)
- **File Size**: Under 2MB
- **Quality**: High resolution for crisp display
- **Background**: Professional, clean background recommended
