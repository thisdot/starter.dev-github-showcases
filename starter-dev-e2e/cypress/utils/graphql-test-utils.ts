export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    (body.hasOwnProperty("operationName") &&
      body.operationName === operationName) ||
    body.query?.includes(operationName)
  );
};

export const hasVariables = (req, variables) => {
  const { body } = req;
  var handled = true;

  Object.keys(variables).forEach((key) => {
    if (
      handled &&
      !(
        (body.hasOwnProperty("variables") &&
          body.variables[key] === variables[key]) ||
        body.query?.includes(`${key}=${variables[key]}`)
      )
    ) {
      handled = false;
    }
  });

  return handled;
};

export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `${operationName}Query`;
  }
};
