export function validateAnnouncementForm(data: { title: string; content: string }) {
  const errors: Record<string, string> = {};
  if (!data.title || data.title.length < 5) errors.title = 'Title must be at least 5 characters';
  if (!data.content || data.content.length < 20) errors.content = 'Content must be at least 20 characters';
  return { valid: Object.keys(errors).length === 0, errors };
}
