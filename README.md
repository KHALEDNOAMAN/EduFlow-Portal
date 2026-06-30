<div align="center">

# 🎓 EduFlow Portal

**Modern Responsive Web Dashboard for Educational Technology**

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A modern, responsive web dashboard built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features a real-time metrics dashboard, team directory with search/filter, and announcements system.

</div>

---

## ✨ Features

- 📊 **Interactive Dashboard** - Real-time metric cards with trend indicators and responsive grid layout
- 👥 **Team Directory** - Searchable, filterable team member cards with department color coding
- 📢 **Announcements System** - Create, view, and manage announcements with priority levels
- 🎨 **Modern UI** - Glassmorphism effects, smooth animations, and premium design system
- 📱 **Fully Responsive** - Optimized for mobile (375px), tablet (768px), and desktop (1440px)
- 💀 **Skeleton Loading** - Smooth loading states with animated placeholders
- 🔍 **Smart Search** - Debounced search with department filtering
- ♿ **Accessible** - ARIA labels, keyboard navigation, semantic HTML

## 🏗️ Project Structure

```
EduFlow-Portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Dashboard page
│   │   ├── team/page.tsx      # Team directory page
│   │   └── announcements/     # Announcements page
│   ├── components/
│   │   ├── dashboard/         # MetricCard, Charts
│   │   ├── team/              # TeamCard, TeamGrid
│   │   └── ui/                # Button, Input, NavBar
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utilities and data
├── public/                    # Static assets
└── package.json
```

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | App Router, SSR, file-based routing |
| React 18 | Component library with hooks |
| TypeScript | Type safety |
| Tailwind CSS 3 | Utility-first styling |
| Chart.js | Data visualization |

## 🚀 Getting Started

```bash
git clone https://github.com/KHALEDNOAMAN/EduFlow-Portal.git
cd EduFlow-Portal
npm install
npm run dev
```

## 📝 License
MIT License - see [LICENSE](LICENSE) file.

---
<div align="center">Built with ❤️ during internship at EduTech Yazilim A.S. - Istanbul, Turkey</div>
