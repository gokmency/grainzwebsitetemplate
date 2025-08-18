# Portfolio Images Guide

## ✅ Setup Complete!

The portfolio structure is ready! All pages are now in English and configured to use local images.

## Directory Structure

```
public/portfolio/
├── design/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── ... (up to 12 images)
├── development/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── ... (up to 12 images)
└── community/
    ├── project-1.jpg
    ├── project-2.jpg
    ├── project-3.jpg
    └── ... (up to 12 images)
```

## Image Requirements

### File Format
- **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`
- **Recommended**: `.jpg` for best performance

### Dimensions
- **Aspect ratio**: 16:9 (landscape) recommended
- **Minimum size**: 800x450px
- **Maximum size**: 1920x1080px
- **File size**: Keep under 500KB each for fast loading

### Naming Convention
- Use descriptive names: `project-name.jpg`
- Or numbered sequence: `project-1.jpg`, `project-2.jpg`, etc.
- No spaces in filenames (use hyphens instead)

## How to Add Images

### Step 1: Add Your Images
1. Copy your portfolio images to the appropriate folders:
   - Design projects → `public/portfolio/design/`
   - Development projects → `public/portfolio/development/`
   - Community projects → `public/portfolio/community/`

### Step 2: Update Image Arrays
Edit the respective page files and update the image arrays:

#### For Design Page (`src/pages/Design.tsx`)
```javascript
const DESIGN_IMAGES_1 = [
  "/portfolio/design/project-1.jpg",
  "/portfolio/design/project-2.jpg",
  "/portfolio/design/project-3.jpg",
  "/portfolio/design/project-4.jpg",
];

const DESIGN_IMAGES_2 = [
  "/portfolio/design/project-5.jpg",
  "/portfolio/design/project-6.jpg",
  "/portfolio/design/project-7.jpg",
  "/portfolio/design/project-8.jpg",
];

const DESIGN_IMAGES_3 = [
  "/portfolio/design/project-9.jpg",
  "/portfolio/design/project-10.jpg",
  "/portfolio/design/project-11.jpg",
  "/portfolio/design/project-12.jpg",
];
```

#### For Development Page (`src/pages/Development.tsx`)
```javascript
const DEV_IMAGES_1 = [
  "/portfolio/development/project-1.jpg",
  "/portfolio/development/project-2.jpg",
  // ... add your development project images
];
```

#### For Community Page (`src/pages/Community.tsx`)
```javascript
const COMMUNITY_IMAGES_1 = [
  "/portfolio/community/project-1.jpg",
  "/portfolio/community/project-2.jpg",
  // ... add your community project images
];
```

### Step 3: Update Project Links
Update the `projectLinks` array in each page to point to your actual projects:

```javascript
const projectLinks = [
  "https://dribbble.com/shots/your-project", // Design projects
  "https://github.com/grainz-labs/your-repo", // Development projects
  "https://discord.gg/your-community", // Community projects
  "https://your-project-demo.com",
  // ... add more links corresponding to your images
];
```

## Gallery Layout

The images are displayed in 3 columns:
- **Column 1**: Images 1-4 (IMAGES_1 array)
- **Column 2**: Images 5-8 (IMAGES_2 array) 
- **Column 3**: Images 9-12 (IMAGES_3 array)

Each column has different scroll animations for visual appeal.

## Tips

1. **Image Optimization**: Compress images before adding them to keep the site fast
2. **Consistent Style**: Try to maintain consistent visual style across images in each category
3. **Alt Text**: The code automatically generates alt text, but you can customize it in the image components
4. **Loading**: Images are loaded as users scroll, so performance is optimized

## Example File Structure After Adding Images

```
public/portfolio/
├── design/
│   ├── ui-dashboard.jpg
│   ├── mobile-app-design.jpg
│   ├── brand-identity.jpg
│   └── web-interface.jpg
├── development/
│   ├── react-web-app.jpg
│   ├── blockchain-dapp.jpg
│   ├── mobile-game.jpg
│   └── api-backend.jpg
└── community/
    ├── discord-community.jpg
    ├── twitter-campaign.jpg
    ├── event-management.jpg
    └── social-media.jpg
```

Once you add your images and update the arrays, the portfolio pages will automatically display your projects with the 3D animated gallery!
