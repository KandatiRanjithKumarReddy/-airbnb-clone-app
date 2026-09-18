# Airbnb Clone – Listing Page

## About

Airbnb is a global vacation rental marketplace where hosts list their properties and travellers book stays. This project recreates a single **property listing page** — the page a guest sees when they click on a listing to view photos, pricing, reviews, amenities, and availability before booking.

This was built as a take-home assignment to demonstrate **pixel-perfect UI development**. The goal was to match a reference page exactly — same layout, spacing, typography, colours, interactions, and animations — using AI-assisted development.

### What I Built

I recreated the full listing page for **"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"**, a serviced apartment in Goa, India. The clone includes the main listing page with all its sections, a full-screen photo gallery (Photo Tour), and a single-image lightbox viewer with keyboard navigation. Everything is frontend-only — no backend, no database, no API calls. All property data is hardcoded in a single JS file.

## Reference

[airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)

## What's Built

| View | Description |
|------|-------------|
| **Listing Page** | Full property page — photo gallery, host info, amenities, reviews, calendar, map, booking card |
| **Photo Tour** | Full-screen photo gallery. Opens from "Show all photos" or clicking any hero image |
| **Lightbox** | Single-photo viewer with previous/next arrows and keyboard navigation (← → Escape) |

## Tech Stack

- **React 18** — UI components
- **Vite** — dev server and build tool
- **Vanilla CSS** — styling (no Tailwind, no libraries)
- **Lucide React** — icons
- **Inter** (Google Fonts) — typography

No backend. All listing data lives in `src/data/listingData.js`.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The dev server runs at **http://localhost:5173/**

## Project Structure

```
src/
├── data/
│   └── listingData.js          # All property data (photos, reviews, amenities, etc.)
├── components/
│   ├── Header/                 # Navbar + sticky scroll navigation
│   ├── PhotoGallery/           # 5-photo hero grid
│   ├── ListingInfo/            # Property details, host, highlights, sleeping arrangements
│   ├── BookingCard/            # Sticky sidebar — price, dates, reserve button
│   ├── Amenities/              # Amenity list with icons
│   ├── Calendar/               # Two-month date picker
│   ├── Reviews/                # Rating display + review cards
│   ├── Map/                    # OpenStreetMap embed
│   ├── HostProfile/            # Host card with stats
│   ├── ThingsToKnow/           # House rules, safety, cancellation
│   ├── Footer/                 # Site footer
│   ├── PhotoTour/              # Full-screen gallery overlay
│   └── Lightbox/               # Single-photo viewer overlay
├── App.jsx                     # Main app — assembles all components
├── App.css                     # App layout
├── index.css                   # Design tokens, CSS reset, utilities
└── main.jsx                    # Entry point
```

## Key Features

- **Sticky header** — section tabs + Reserve button appear on scroll
- **Sticky booking card** — stays visible while scrolling content
- **Keyboard accessible** — Arrow keys and Escape in Lightbox, tab navigation everywhere
- **Smooth animations** — fade-in overlays, hover effects, image transitions
- **Semantic HTML** — proper heading hierarchy, ARIA labels, focus management

## Deploy

```bash
# Deploy to Vercel
npx vercel
```

## Architecture

See [architecture-diagram.md](./architecture-diagram.md) for a production-scale system design with microservices, database scaling, search, and deployment strategy.
