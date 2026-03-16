# 🍽 Restaurant Landing Page

A responsive restaurant website built with **Vite + React + Tailwind CSS v3**, inspired by the Freepik design.

## ✨ Features

- **Responsive** — mobile-first design, works on all screen sizes
- **Dark theme** with gold/amber accent colors
- **Hero slider** with 3 auto-rotating slides + manual controls
- **Menu section** with category filter tabs
- **Food Making Process** section with image collage
- **Photo Gallery** with lightbox viewer
- **Team section** with hover social overlay
- **Testimonials** carousel
- **Reservation form** with success feedback
- **Footer** with newsletter signup
- **Scroll animations** (fade-up, slide-in)
- **Sticky navbar** with scroll blur effect

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Menu.jsx
│   ├── Process.jsx
│   ├── Gallery.jsx
│   ├── Team.jsx
│   ├── Testimonials.jsx
│   ├── Reservation.jsx
│   └── Footer.jsx
├── hooks/
│   └── useReveal.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Tech Stack

- **Vite 5** — build tool
- **React 18** — UI framework
- **Tailwind CSS 3** — styling
- **Unsplash** — placeholder images (free to use)
- **Google Fonts** — Playfair Display + DM Sans

## 📝 Customization

- Replace Unsplash URLs in each component with your own images
- Update restaurant name, hours, and contact info in `Reservation.jsx` and `Footer.jsx`
- Modify menu items in `Menu.jsx`
- Update team members in `Team.jsx`
- Adjust colors in `tailwind.config.js` under `theme.extend.colors`
