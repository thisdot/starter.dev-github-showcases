export function IssuesSkeleton() {
  return (
    <div
      className="p-4 border-b animate-pulse space-y-2"
      data-testid="skeleton"
    >
      <div className="ml-6 max-w-3xl w-full h-5 bg-gray-200 rounded" />
      <div className="ml-6 w-48 h-3.5 bg-gray-200 rounded" />
    </div>
  );
}
export default IssuesSkeleton;
