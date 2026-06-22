'use client';

import { useState, useMemo } from 'react';
import TeamMemberCard from '@/components/features/team/TeamMemberCard';
import type { TeamMember } from '@/types';

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Ahmet Yilmaz', title: 'Senior Frontend Developer', department: 'Engineering', email: 'ahmet@eduflow.com', phone: '+90 532 111 22 33' },
  { id: '2', name: 'Elif Demir', title: 'Product Manager', department: 'Product', email: 'elif@eduflow.com', phone: '+90 533 222 33 44' },
  { id: '3', name: 'Mehmet Kaya', title: 'Backend Developer', department: 'Engineering', email: 'mehmet@eduflow.com', phone: '+90 534 333 44 55' },
  { id: '4', name: 'Fatma Celik', title: 'UX Designer', department: 'Design', email: 'fatma@eduflow.com', phone: '+90 535 444 55 66' },
  { id: '5', name: 'Ayse Ozturk', title: 'Content Writer', department: 'Content', email: 'ayse@eduflow.com', phone: '+90 536 555 66 77' },
  { id: '6', name: 'Emre Sahin', title: 'DevOps Engineer', department: 'Engineering', email: 'emre@eduflow.com', phone: '+90 537 666 77 88' },
  { id: '7', name: 'Zeynep Arslan', title: 'Marketing Specialist', department: 'Marketing', email: 'zeynep@eduflow.com', phone: '+90 538 777 88 99' },
  { id: '8', name: 'Burak Yildiz', title: 'Data Analyst', department: 'Analytics', email: 'burak@eduflow.com', phone: '+90 539 888 99 00' },
];

const departments = ['All', ...Array.from(new Set(teamMembers.map(m => m.department)))];

export default function TeamPage() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');

  const filtered = useMemo(() => {
    return teamMembers.filter(m => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
                         m.title.toLowerCase().includes(search.toLowerCase());
      const matchDept = department === 'All' || m.department === department;
      return matchSearch && matchDept;
    });
  }, [search, department]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">ðŸ‘¥ Team Directory</h1>
        <p className="text-gray-500 mt-1">Browse and search your team members</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name or title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
        />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none bg-white"
        >
          {departments.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(member => <TeamMemberCard key={member.id} member={member} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No team members found</p>
        </div>
      )}
    </div>
  );
}
