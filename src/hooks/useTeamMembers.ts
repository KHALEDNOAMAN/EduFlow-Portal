import { useState, useMemo } from 'react';
import type { TeamMember } from '@/types';

export function useTeamMembers(members: TeamMember[]) {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');

  const filtered = useMemo(() => {
    return members.filter(m => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.title.toLowerCase().includes(search.toLowerCase());
      const matchDept = department === 'All' || m.department === department;
      return matchSearch && matchDept;
    });
  }, [members, search, department]);

  const departments = useMemo(() => ['All', ...Array.from(new Set(members.map(m => m.department)))], [members]);

  return { filtered, search, setSearch, department, setDepartment, departments };
}
