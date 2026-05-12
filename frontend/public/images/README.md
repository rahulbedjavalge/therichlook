# Image Assets for The Rich Look Saloon

This directory contains all image assets for the salon website.

## Directory Structure

```
public/
  ├── images/
  │   ├── founders/          # Founder profile photos
  │   │   ├── sarah.jpg      # Sarah Mitchell (Founder & CEO)
  │   │   ├── jessica.jpg    # Jessica Chen (Co-Founder & Creative Director)
  │   │   └── marcus.jpg     # Marcus Johnson (Co-Founder & Operations Manager)
  │   │
  │   ├── blog/              # Blog post featured images
  │   │   ├── trends.jpg     # Hair trends blog post image
  │   │   ├── hair-care.jpg  # Hair care science blog post image
  │   │   ├── spa.jpg        # Spa DIY blog post image
  │   │   ├── nails.jpg      # Nail color blog post image
  │   │   ├── sustainable.jpg # Eco-friendly practices blog post image
  │   │   └── psychology.jpg # Psychology of self-care blog post image
  │   │
  │   ├── services/          # Service category images
  │   │   ├── haircut.jpg    # Haircut & Styling service
  │   │   ├── spa.jpg        # Spa & Massage service
  │   │   └── nails.jpg      # Nail Art service
  │   │
  │   └── salon/             # Salon environment photos
  │       ├── exterior.jpg   # Salon front entrance
  │       ├── interior.jpg   # Salon interior/reception
  │       └── treatment.jpg  # Treatment room/styling station
```

## How to Add Images

1. **Replace Placeholder Images**: 
   - Download or take professional photos for each category
   - Save them as .jpg or .png files in the appropriate subdirectory
   - Use descriptive filenames

2. **Image Optimization Best Practices**:
   - Optimize images for web (1200x800px for blog posts, 400x400px for founder photos)
   - Use compression tools like TinyPNG or Squoosh for performance
   - Verify file sizes are under 200KB for optimal loading

3. **Using Images in Components**:
   ```tsx
   import Image from 'next/image';
   
   <Image
     src="/images/founders/sarah.jpg"
     alt="Sarah Mitchell - Founder & CEO"
     width={400}
     height={400}
   />
   ```

4. **For Blog Posts**:
   - Featured images should be high-quality and engaging
   - Recommend 1200x600px or 1200x800px dimensions
   - Use consistent styling/branding across all blog images

5. **For Founder Photos**:
   - Professional headshots recommended (400x400px or 500x500px)
   - Consistent background and lighting across all three photos
   - High-quality for credibility

6. **For Services**:
   - Show actual services being performed
   - Professional photography recommended
   -800x600px dimensions work well

## Current Implementation

The website uses placeholder images with fallback text:
- About page: Salon image placeholder, founder photo placeholders
- Blog page: Blog post featured image placeholders
- Blog post detail: Featured image and related post placeholders

These will automatically use your real images once you add them to the appropriate directories.

## Image Attribution

Remember to:
- Use royalty-free images or own photography
- Ensure proper licensing for any stock images
- Consider copyright and model releases for people photos
