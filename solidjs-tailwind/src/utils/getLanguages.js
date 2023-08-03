export function getLanguages(repos) {
  let languages = new Set(['All']);

  repos.forEach((repo) => {
    if (repo.primaryLanguage && repo.primaryLanguage.name) {
      languages.add(repo.primaryLanguage.name);
    }
  });

  return [...languages];
}
