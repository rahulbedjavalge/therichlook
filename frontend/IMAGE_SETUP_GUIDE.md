# Image Assets Setup Guide for The Rich Look Saloon

## Quick Start

1. **Founder Photos**: Place 3 professional headshots in `frontend/public/images/founders/`:
   - sarah.jpg
   - jessica.jpg
   - marcus.jpg

2. **Blog Images**: Place 6 blog post featured images in `frontend/public/images/blog/`:
   - trends.jpg
   - hair-care.jpg
   - spa.jpg
   - nails.jpg
   - sustainable.jpg
   - psychology.jpg

3. **Service Images**: Place service photos in `frontend/public/images/services/`:
   - haircut.jpg
   - spa.jpg
   - nails.jpg

## Recommended Image Sizes & Specs

### Founder Photos (Headshots)
- Dimensions: 400x400px or 500x500px
- Format: JPG or PNG
- Style: Professional headshots with neutral background
- File size: 50-100KB
- Examples:
  - Professional LinkedIn-style photos
  - Salon staff photos
  - High-quality professional portraits

### Blog Post Featured Images
- Dimensions: 1200x600px (recommended) or 1200x800px
- Format: JPG or PNG
- Style: High-quality, engaging beauty/salon related images
- File size: 100-150KB
- Examples:
  - Hairstyles and cuts
  - Spa and treatment photos
  - Nail art designs
  - Beauty and wellness lifestyle photos

### Service Images
- Dimensions: 800x600px
- Format: JPG or PNG
- Style: Professional service photos
- File size: 80-120KB
- Examples:
  - Haircut in progress
  - Spa treatment room
  - Nail art application

### Salon Environment Photos
- Optional for About page
- Dimensions: 800x600px minimum
- Format: JPG or PNG
- Style: Professional interior/exterior shots

## Where to Find Free/Cheap Images

### Free Stock Photo Sites (with Salon/Beauty Content):
1. **Unsplash** (https://unsplash.com)
   - Search: "salon", "haircut", "spa", "beauty"
   - Attribution: Not required
   - License: Free for commercial use

2. **Pexels** (https://www.pexels.com)
   - Search: "hairstyle", "nail art", "massage", "wellness"
   - Attribution: Not required
   - License: Free for commercial use

3. **Pixabay** (https://pixabay.com)
   - Search: "salon services", "beauty treatments"
   - Attribution: Not required
   - License: Free for all uses

4. **Freepik** (https://www.freepik.com)
   - Search: "beauty salon", "hairdresser", "spa"
   - Some free with attribution
   - Some premium

### Premium Stock Photo Sites:
1. **Shutterstock** (https://www.shutterstock.com)
   - Professional salon and beauty images
   - Pricing: Subscription based

2. **Getty Images** (https://www.gettyimages.com)
   - High-quality salon and beauty photos
   - Pricing: Per image or subscription

3. **Adobe Stock** (https://stock.adobe.com)
   - Professional beauty and salon photos
   - Pricing: Subscription based

### Custom Photography Route (Recommended for Best Results):
- Hire a professional photographer to take photos of your actual salon
- Get founder headshots taken professionally
- Document services and treatments in action
- This gives authentic, branded imagery

## Image Optimization Tools

Before uploading, optimize images for web performance:

1. **TinyPNG** (https://tinypng.com)
   - Free online image compression
   - Maintains quality while reducing file size
   - Supports JPG and PNG

2. **Squoosh** (https://squoosh.app)
   - Google's image optimization tool
   - Free, works in browser
   - Excellent quality control

3. **ImageMagick** (command line)
   ```bash
   magick convert input.jpg -quality 85 -resize 1200x800 output.jpg
   ```

4. **GIMP** (free desktop software)
   - https://www.gimp.org
   - Full image editing capabilities
   - Export optimization options

## Step-by-Step: Adding Your First Image

1. **Download or Create Image**
   - Choose a high-quality founder photo

2. **Optimize Image**
   - Use TinyPNG or Squoosh
   - Target file size: 50-100KB
   - Save as `sarah.jpg`

3. **Place in Correct Directory**
   ```
   frontend/public/images/founders/sarah.jpg
   ```

4. **Update Component (if needed)**
   - Images are already configured in:
     - `frontend/app/about/page.tsx`
     - `frontend/app/blog/page.tsx`
     - `frontend/app/blog/[id]/page.tsx`

5. **Test Locally**
   ```bash
   cd frontend
   npm run dev
   ```
   - Visit http://localhost:3000/about
   - Verify image displays correctly

## Image Reference in Code

Example of how images are currently referenced (already set up):

```tsx
// In about/page.tsx - Founders
<div className="bg-gradient-to-br from-amber-200 to-yellow-100 h-64 flex items-center justify-center">
  <div className="text-center">
    <p className="text-gray-600 text-lg">👤</p>
    <p className="text-gray-500 mt-2">Founder Photo</p>
  </div>
</div>
// Replace with:
<Image
  src="/images/founders/sarah.jpg"
  alt="Sarah Mitchell - Founder & CEO"
  width={400}
  height={400}
  className="w-full h-full object-cover"
/>
```

## Current Implementation Details

**Pages with Image Placeholders:**
1. `/about` - Has placeholders for:
   - Salon image (main about section)
   - 3 founder photos (Meet Our Founders section)

2. `/blog` - Has placeholders for:
   - Featured blog post image
   - 5 other blog post images in grid

3. `/blog/[id]` - Has placeholders for:
   - Blog post featured image
   - Related posts images (3 related posts)

**Placeholder Styling:**
- Gradient background (amber to yellow)
- Centered text with emoji indicators
- Responsive sizing
- Smooth hover effects

Simply replace placeholders with real images by uploading to the correct `/public/images/` subdirectory.

## Recommended Content Strategy

### For Founder Photos:
- Professional headshots taken in studio or professional environment
- Consistent lighting and background
- Business casual to formal attire
- Smiling, approachable expressions

### For Blog Images:
**Hair Trends Article**: Show trendy hairstyles, color variations, modern cuts
**Hair Care Article**: Show healthy hair, hair treatment/care process
**Spa DIY Article**: Show spa setting, relaxation, facial treatments
**Nail Color Article**: Close-ups of nail art, various colors, manicure work
**Sustainability Article**: Green/eco-friendly salon elements, natural products
**Psychology Article**: Before/after, client satisfaction, confidence building

### For Services:
- Show actual service in progress not just final result
- Include stylist/technician for professionalism
- Show client satisfaction/happy results

## File Organization Summary

```
frontend/public/images/
├── README.md                 ← You're reading this
├── blog/
│   ├── trends.jpg
│   ├── hair-care.jpg
│   ├── spa.jpg
│   ├── nails.jpg
│   ├── sustainable.jpg
│   └── psychology.jpg
├── founders/
│   ├── sarah.jpg
│   ├── jessica.jpg
│   └── marcus.jpg
├── services/
│   ├── haircut.jpg
│   ├── spa.jpg
│   └── nails.jpg
└── salon/
    ├── exterior.jpg
    ├── interior.jpg
    └── treatment.jpg
```

## Next Steps

1. ✅ Directory structure is ready
2. ⏳ Download/source your images
3. ⏳ Optimize images for web
4. ⏳ Place images in correct directories
5. ⏳ Test locally
6. ⏳ Push to GitHub

Once images are in place, the website will display them automatically!
