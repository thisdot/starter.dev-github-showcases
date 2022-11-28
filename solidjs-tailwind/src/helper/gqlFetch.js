export const gqlFetch = ({ url, query, variables, headersOptions }) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      ...headersOptions,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json());
};
