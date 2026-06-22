export default function EmptyState({ message = 'No results found' }: { message?: string }) {
  return (
    <div className="text-center py-16">
      <p className="text-4xl mb-4">ðŸ”</p>
      <p className="text-gray-400 text-lg">{message}</p>
    </div>
  );
}
