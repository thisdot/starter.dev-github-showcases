import { useRepo } from '@context/RepoContext';

function RenderContextValue() {
  const repo = useRepo();
  return <pre data-testid="context">{JSON.stringify(repo, null, 2)}</pre>;
}

export default RenderContextValue;
