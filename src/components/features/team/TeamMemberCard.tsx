import type { TeamMember } from '@/types';

const deptColors: Record<string, string> = {
  Engineering: 'bg-blue-100 text-blue-700',
  Product: 'bg-purple-100 text-purple-700',
  Design: 'bg-pink-100 text-pink-700',
  Content: 'bg-green-100 text-green-700',
  Marketing: 'bg-orange-100 text-orange-700',
  Analytics: 'bg-cyan-100 text-cyan-700',
};

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const initials = member.name.split(' ').map(n => n[0]).join('');
  const deptColor = deptColors[member.department] || 'bg-gray-100 text-gray-700';

  return (
    <div className="card group hover:scale-[1.02]">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:shadow-lg transition-shadow">
          {initials}
        </div>
        <h3 className="font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-500 mt-0.5">{member.title}</p>
        <span className={`badge mt-2 ${deptColor}`}>{member.department}</span>
        <div className="mt-4 space-y-1 w-full text-left">
          <p className="text-xs text-gray-400 truncate">ðŸ“§ {member.email}</p>
          <p className="text-xs text-gray-400">ðŸ“± {member.phone}</p>
        </div>
        <button className="btn-primary w-full mt-4 text-sm">View Profile</button>
      </div>
    </div>
  );
}
