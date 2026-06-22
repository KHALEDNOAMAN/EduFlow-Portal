export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
  author: string;
  createdAt: string;
}

export interface MetricData {
  title: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}
