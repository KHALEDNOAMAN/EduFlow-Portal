import type { Announcement } from '@/types';

const priorityStyles = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-green-100 text-green-700',
};

export default function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
        <span className={`badge ${priorityStyles[announcement.priority]}`}>{announcement.priority}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{announcement.content}</p>
      <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
        <span>By {announcement.author}</span>
        <span>â€¢</span>
        <span>{announcement.createdAt}</span>
      </div>
    </div>
  );
}
