export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    (body.hasOwnProperty("operationName") &&
      body.operationName === operationName) ||
    body.query?.includes(operationName)
  );
};

export const hasExpression = (req, expression) => {
  const { body } = req;

  return (
    (body.hasOwnProperty("variables") &&
      body.variables.expression === expression) ||
    body.query?.includes(`expression=${expression}`)
  );
};

export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`;
  }
};
