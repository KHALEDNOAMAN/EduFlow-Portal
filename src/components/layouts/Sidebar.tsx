'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/', icon: 'ðŸ“Š' },
  { label: 'Team', href: '/team', icon: 'ðŸ‘¥' },
  { label: 'Announcements', href: '/announcements', icon: 'ðŸ“¢' },
  { label: 'HR Module', href: '#', icon: 'ðŸ¢' },
  { label: 'Finance', href: '#', icon: 'ðŸ’°' },
  { label: 'Reports', href: '#', icon: 'ðŸ“ˆ' },
  { label: 'Settings', href: '#', icon: 'âš™ï¸' },
];

interface SidebarProps { isOpen: boolean; onClose: () => void; }

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">ðŸŽ“ EduFlow</h1>
          <p className="text-xs text-gray-400 mt-1">Education Management</p>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map(item => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link key={item.label} href={item.href} onClick={onClose}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
