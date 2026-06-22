export default function ErrorState({ message = 'Something went wrong', onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="text-center py-16">
      <p className="text-4xl mb-4">ðŸ˜•</p>
      <p className="text-gray-500 text-lg">{message}</p>
      {onRetry && <button onClick={onRetry} className="btn-primary mt-4">Try Again</button>}
    </div>
  );
}
