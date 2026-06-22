'use client';

import MetricCard from '@/components/features/dashboard/MetricCard';

const metrics = [
  { title: 'Active Students', value: '12,847', change: 12.5, changeType: 'positive' as const, icon: 'ðŸ‘¥' },
  { title: 'Monthly Revenue', value: 'â‚º284,500', change: 8.2, changeType: 'positive' as const, icon: 'ðŸ’°' },
  { title: 'Open Tickets', value: '23', change: -15.3, changeType: 'negative' as const, icon: 'ðŸŽ«' },
  { title: 'System Uptime', value: '99.97%', change: 0.02, changeType: 'positive' as const, icon: 'âš¡' },
];

const recentActivities = [
  { id: '1', text: 'New course "Advanced React Patterns" published', time: '2 hours ago', type: 'course' },
  { id: '2', text: '156 new student registrations today', time: '4 hours ago', type: 'users' },
  { id: '3', text: 'Payment gateway maintenance scheduled', time: '6 hours ago', type: 'system' },
  { id: '4', text: 'Quarterly report generated successfully', time: '1 day ago', type: 'report' },
  { id: '5', text: 'Server migration completed', time: '2 days ago', type: 'system' },
];

export default function DashboardPage() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{greeting}, Khaled ðŸ‘‹</h1>
        <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your platform today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">ðŸ“ˆ Revenue Overview</h2>
          <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center">
            <p className="text-primary-600 font-medium">Chart.js Integration Area</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">ðŸ• Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 truncate">{activity.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
