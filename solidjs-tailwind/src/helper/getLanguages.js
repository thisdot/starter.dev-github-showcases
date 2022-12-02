export function getLanguages(repos) {
  let languages = new Set(['All']);
  console.log(repos);

  repos.forEach((repo) => {
    if (repo.primaryLanguage && repo.primaryLanguage.name) {
      languages.add(repo.primaryLanguage.name);
    }
  });

  return [...languages];
}
