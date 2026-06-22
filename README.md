<div align="center">

# ðŸŽ¨ EduFlow Portal

**Modern Responsive Web Dashboard for Educational Technology**

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A modern, responsive web dashboard built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features a real-time metrics dashboard, team directory with search/filter, and announcements system.

</div>

---

## âœ¨ Features

- ðŸ“Š **Interactive Dashboard** - Real-time metric cards with trend indicators and responsive grid layout
- ðŸ‘¥ **Team Directory** - Searchable, filterable team member cards with department color coding
- ðŸ“¢ **Announcements System** - Create, view, and manage announcements with priority levels
- ðŸŽ¨ **Modern UI** - Glassmorphism effects, smooth animations, and premium design system
- ðŸ“± **Fully Responsive** - Optimized for mobile (375px), tablet (768px), and desktop (1440px)
- ðŸŒ™ **Skeleton Loading** - Smooth loading states with animated placeholders
- ðŸ” **Smart Search** - Debounced search with department filtering
- â™¿ **Accessible** - ARIA labels, keyboard navigation, semantic HTML

## ðŸ—ï¸ Project Structure

```
EduFlow-Portal/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ app/
â”‚   â”‚   â”œâ”€â”€ layout.tsx              # Root layout with Inter font
â”‚   â”‚   â”œâ”€â”€ page.tsx                # Redirect to dashboard
â”‚   â”‚   â””â”€â”€ (dashboard)/
â”‚   â”‚       â”œâ”€â”€ layout.tsx          # Dashboard shell (Navbar + Sidebar)
â”‚   â”‚       â”œâ”€â”€ page.tsx            # Main dashboard with metrics
â”‚   â”‚       â”œâ”€â”€ team/page.tsx       # Team directory
â”‚   â”‚       â””â”€â”€ announcements/page.tsx
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ layouts/                # Navbar, Sidebar
â”‚   â”‚   â”œâ”€â”€ features/              # Dashboard, Team, Announcements
â”‚   â”‚   â””â”€â”€ ui/                    # Skeleton, ErrorState, EmptyState
â”‚   â”œâ”€â”€ hooks/                     # useTeamMembers, useClickOutside
â”‚   â”œâ”€â”€ lib/                       # API client, validators
â”‚   â”œâ”€â”€ types/                     # TypeScript interfaces
â”‚   â””â”€â”€ styles/                    # Global CSS
â”œâ”€â”€ public/                        # Static assets
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â”œâ”€â”€ tailwind.config.ts
â””â”€â”€ next.config.js
```

## ðŸ› ï¸ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | React framework with App Router |
| React 18 | UI library with Server Components |
| TypeScript 5 | Type-safe JavaScript |
| Tailwind CSS 3 | Utility-first CSS framework |
| Lucide React | Icon library |

## ðŸš€ Getting Started

```bash
# Clone the repository
git clone https://github.com/KHALEDNOAMAN/EduFlow-Portal.git
cd EduFlow-Portal

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the dashboard.

## ðŸ“ License

MIT License - see [LICENSE](LICENSE) file.

---

<div align="center">
  Built with â¤ï¸ during internship at EduTech Yazilim A.S. - Istanbul, Turkey
</div>
