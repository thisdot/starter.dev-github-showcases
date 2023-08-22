const FetchApi = async ({ url, query, variables, headersOptions }) => {
  return await new Promise((resolve, reject) => {
    let fetchObj = {
      headers: {
        ...headersOptions,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
    };
    if (query && variables) {
      fetchObj = {
        ...fetchObj,
        method: 'POST',
        body: JSON.stringify({
          query,
          variables,
        }),
      };
    }
    fetch(url, fetchObj)
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default FetchApi;
