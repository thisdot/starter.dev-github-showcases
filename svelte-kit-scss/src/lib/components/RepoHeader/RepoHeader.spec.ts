import { render, screen } from '@testing-library/svelte';
import { starterDevRepoFixture } from '$lib/fixtures';
import RepoHeading from './RepoHeading/RepoHeading.svelte';
import RepoInfo from './RepoInfo/RepoInfo.svelte';

describe('RepoHeader', () => {
  const repo = starterDevRepoFixture;

  it('should render repo heading', () => {
    render(RepoHeading, {
      repo,
    });

    const ownerName = screen.getByText(repo.ownerName);
    const repoName = screen.getByText(repo.repoName);

    expect(ownerName).toBeTruthy();
    expect(repoName).toBeTruthy();
  });

  it('should render repo info', () => {
    render(RepoInfo, {
      watchCount: repo.watchCount,
      starCount: repo.starCount,
      forkCount: repo.forkCount,
    });

    const watchCount = screen.getAllByText(repo.watchCount);
    const forkCount = screen.getAllByText(repo.forkCount);
    const starCount = screen.getAllByText(repo.starCount);

    expect(watchCount).toBeTruthy();
    expect(forkCount).toBeTruthy();
    expect(starCount).toBeTruthy();
  });
});
