# Motrex CES 2026 Showcase

A React-based landing page showcasing Motrex's automotive technology innovations at the Consumer Electronics Show 2026. Features in-cabin mobility solutions, driving intelligence systems, connected comfort, and EV charging solutions.

## Live Demo

Deploy to Netlify: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/seonil/motrexces2026)

## Features

- Full-screen hero section with animated gradients
- Interactive tabbed showcase with image carousel
- Responsive mobile-first design
- Smooth animations and glassmorphism effects
- Dark theme with blue/cyan accents

## Tech Stack

- **React 19.2.0** with TypeScript
- **Vite 6.2.0** for build and development
- **Tailwind CSS** via CDN for styling
- **Netlify** for deployment

## Development

**Prerequisites:** Node.js 20+

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/motrex-ces-2026-showcase.git
   cd motrex-ces-2026-showcase
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

### Deploy to Netlify (Recommended)

#### Option 1: One-Click Deploy
Click the "Deploy to Netlify" button above to automatically deploy this project.

#### Option 2: Manual Setup
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Connect your GitHub account and select this repository
5. Netlify will auto-detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Your site will be live at `https://YOUR-SITE-NAME.netlify.app`

#### Continuous Deployment
Netlify automatically deploys when you push to the `main` branch.

### Alternative: GitHub Pages

This project also includes GitHub Actions workflow for GitHub Pages deployment.

1. Go to repository Settings > Pages
2. Under "Build and deployment", select Source: **GitHub Actions**
3. Push to `main` branch to trigger deployment

Note: GitHub Pages requires a **public repository** for free tier users.

## Project Structure

```
motrex-ces-2026-showcase/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Vision.tsx
│   ├── Showcase.tsx    # Main interactive component
│   ├── InCabinInnovation.tsx
│   ├── WhyMotrex.tsx
│   ├── VisitUs.tsx
│   ├── AboutUs.tsx
│   └── Footer.tsx
├── public/
│   └── images/         # Image assets
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
├── App.tsx             # Root component
├── index.tsx           # Entry point
└── vite.config.ts      # Vite configuration
```

## Contributing

This is a showcase project for Motrex CES 2026. For questions or collaboration opportunities, please contact the Motrex team.

## License

Copyright © 2026 Motrex. All rights reserved.
