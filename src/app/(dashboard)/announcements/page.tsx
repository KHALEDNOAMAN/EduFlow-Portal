'use client';

import { useState } from 'react';
import AnnouncementCard from '@/components/features/announcements/AnnouncementCard';
import AnnouncementForm from '@/components/features/announcements/AnnouncementForm';
import type { Announcement } from '@/types';

const initialAnnouncements: Announcement[] = [
  { id: '1', title: 'Q2 Platform Update Released', content: 'We have released major performance improvements including 40% faster page loads, improved search, and a redesigned student dashboard.', priority: 'high', author: 'Elif Demir', createdAt: '2026-06-20' },
  { id: '2', title: 'New Course Categories Available', content: 'Three new course categories have been added: AI/ML, Cloud Computing, and Cybersecurity. Instructors can now publish courses in these categories.', priority: 'medium', author: 'Ayse Ozturk', createdAt: '2026-06-18' },
  { id: '3', title: 'Office Closure - Bayram Holiday', content: 'The office will be closed from June 28 to June 30 for the Kurban Bayrami holiday. Remote support will be available for critical issues.', priority: 'low', author: 'Khaled Noaman', createdAt: '2026-06-15' },
];

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [showForm, setShowForm] = useState(false);

  const handleCreate = (data: { title: string; content: string; priority: 'low' | 'medium' | 'high' }) => {
    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      ...data,
      author: 'Khaled Noaman',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ðŸ“¢ Announcements</h1>
          <p className="text-gray-500 mt-1">Company news and updates</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary">
          {showForm ? 'Cancel' : '+ New Announcement'}
        </button>
      </div>

      {showForm && <AnnouncementForm onSubmit={handleCreate} />}

      <div className="space-y-4">
        {announcements.map(a => <AnnouncementCard key={a.id} announcement={a} />)}
      </div>
    </div>
  );
}
