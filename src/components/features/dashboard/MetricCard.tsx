interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export default function MetricCard({ title, value, change, changeType, icon }: MetricCardProps) {
  const changeColor = changeType === 'positive' ? 'text-green-600 bg-green-50' : changeType === 'negative' ? 'text-red-600 bg-red-50' : 'text-gray-600 bg-gray-50';
  const arrow = changeType === 'positive' ? 'â†‘' : changeType === 'negative' ? 'â†“' : 'â†’';

  return (
    <div className="card group cursor-pointer hover:scale-[1.02] hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        <span className={`badge ${changeColor}`}>{arrow} {Math.abs(change)}%</span>
      </div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}
