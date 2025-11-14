# Motrex CES 2026 Showcase

A React-based landing page showcasing Motrex's automotive technology innovations at the Consumer Electronics Show 2026. Features in-cabin mobility solutions, driving intelligence systems, connected comfort, and EV charging solutions.

## Live Demo

Visit the live site: [https://YOUR_USERNAME.github.io/motrex-ces-2026-showcase/](https://YOUR_USERNAME.github.io/motrex-ces-2026-showcase/)

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
- **GitHub Pages** for deployment

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

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select:
   - Source: **GitHub Actions**
3. Push to the `main` branch to trigger automatic deployment

The site will be available at: `https://YOUR_USERNAME.github.io/motrex-ces-2026-showcase/`

### Manual Deployment

If you need to deploy manually:
```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

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
