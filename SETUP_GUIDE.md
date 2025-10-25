# 🚀 Quick Setup Guide for Your Portfolio

## 📸 Adding Your Profile Picture

### Step 1: Prepare Your Image
- **Size**: 400x400px minimum (square recommended)
- **Format**: JPG, PNG, or WebP
- **File Size**: Under 2MB
- **Quality**: High resolution, professional appearance

### Step 2: Add to Project
1. Save your image as `profile-picture.jpg`
2. Place it in the `public/images/` folder
3. Open `src/components/Hero.tsx`
4. Find lines 185-193 (commented Image component)
5. Uncomment the Image component:
   ```jsx
   <Image
     src="/images/profile-picture.jpg"
     alt="Priya Das"
     fill
     className="object-cover"
     priority
   />
   ```
6. Comment out or remove the placeholder div (lines 180-182)

## 📄 Adding Your Resume

### Step 1: Prepare Your Resume
- **Format**: PDF (recommended)
- **Name**: `Priya_Das_Resume.pdf`
- **Content**: Update with your latest information

### Step 2: Add to Project
1. Save your resume as `Priya_Das_Resume.pdf`
2. Place it in the `public/resume/` folder
3. The download buttons will automatically work!

## 🎨 Customization Options

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Content
Update `src/lib/data.ts` with your information:
- Personal details
- Experience entries
- Project information
- Skills and technologies

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway

## ✅ Checklist

- [ ] Add profile picture to `public/images/`
- [ ] Uncomment Image component in Hero.tsx
- [ ] Add resume PDF to `public/resume/`
- [ ] Update personal information in `src/lib/data.ts`
- [ ] Test all download buttons
- [ ] Test responsive design on mobile
- [ ] Deploy to your chosen platform

## 🆘 Need Help?

If you encounter any issues:
1. Check the console for errors
2. Ensure file names match exactly
3. Verify file paths are correct
4. Check file sizes are under limits

Your portfolio is ready to impress! 🎉
