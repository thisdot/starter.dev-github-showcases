interface RepoPageErrorProps {
  error: Error;
}

function RepoPageError({ error }: RepoPageErrorProps) {
  return <div>Error: {error.message}</div>;
}

export default RepoPageError;
