# Shivam Rawat — Portfolio

A modern, premium personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Profile Image
Your profile photo is already included at:
```
public/profile.jpg
```
If you want to swap it out later, just replace `public/profile.jpg` with your new photo.

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── profile.jpg          ← Your profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky navbar with mobile menu
│   │   ├── Hero.jsx          ← Hero with profile image + CTAs
│   │   ├── About.jsx         ← About section with pillars
│   │   ├── Skills.jsx        ← Skills with animated progress bars
│   │   ├── Projects.jsx      ← Case study + dev project cards
│   │   ├── Experience.jsx    ← Timeline experience section
│   │   ├── Contact.jsx       ← Contact form + social links
│   │   └── ScrollProgress.jsx← Top scroll progress bar
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## ✨ Features

- **Dark theme** with grid background and radial glows
- **Glassmorphism** cards throughout
- **Framer Motion** scroll-triggered animations
- **Scroll progress** indicator at the top
- **Cursor glow** that follows your mouse
- **Fully responsive** (mobile + desktop)
- **Gradient text** and gradient border on profile image
- **Interactive contact form**

## 🎨 Design Tokens

Colors (in `tailwind.config.js`):
- `accent` — `#00D4FF` (cyan)
- `accent2` — `#7C3AED` (purple)
- `accent3` — `#10B981` (green)
- `bg` — `#080B12` (deep dark)

Fonts: Syne (display) + DM Sans (body) + JetBrains Mono (mono)

## 🛠️ Customization

To update personal info, edit the relevant component files. All content is hardcoded in component JSX for easy editing — just find the text and change it.
