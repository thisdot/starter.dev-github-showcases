export function getLanguages(repos) {

  const initialValue = { all: 'All' };

  const languageMap = repos.reduce(
    (acc, repo) =>
      repo.primaryLanguage ? { ...acc, [repo.primaryLanguage.name.toLowerCase()]: repo.primaryLanguage.name } : acc,
    initialValue
  );

  return Object.entries(languageMap).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}
