'use client';

import { useState } from 'react';

interface Props {
  onSubmit: (data: { title: string; content: string; priority: 'low' | 'medium' | 'high' }) => void;
}

export default function AnnouncementForm({ onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (title.length < 5) errs.title = 'Title must be at least 5 characters';
    if (content.length < 20) errs.content = 'Content must be at least 20 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ title, content, priority });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h3 className="font-semibold text-gray-900">Create Announcement</h3>
      <div>
        <input type="text" placeholder="Announcement title" value={title} onChange={e => setTitle(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>
      <div>
        <textarea placeholder="Write your announcement..." value={content} onChange={e => setContent(e.target.value)} rows={4}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none resize-none" />
        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
      </div>
      <div className="flex items-center gap-4">
        <select value={priority} onChange={e => setPriority(e.target.value as any)}
          className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button type="submit" className="btn-primary ml-auto">Publish</button>
      </div>
    </form>
  );
}
