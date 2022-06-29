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
  var allVariablesValid = true;

  Object.keys(variables).forEach((key) => {
    const bodyHasVariable =
      body.hasOwnProperty("variables") &&
      body.variables[key] === variables[key];
    const queryHasVariable = body.query?.includes(`${key}=${variables[key]}`);
    const subKeys = variables[key];

    if (allVariablesValid && typeof subKeys !== "string") {
      const bodyVariables = body.variables[key];

      Object.keys(subKeys).forEach((subKey) => {
        const bodyContainsSubKeys =
          subKeys &&
          bodyVariables &&
          JSON.stringify(bodyVariables[subKey]) ===
            JSON.stringify(subKeys[subKey]);

        if (allVariablesValid && !bodyContainsSubKeys) {
          allVariablesValid = false;
        }
      });
    } else if (allVariablesValid && !(bodyHasVariable || queryHasVariable)) {
      allVariablesValid = false;
    }
  });

  return allVariablesValid;
};

export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `${operationName}Query`;
  }
};
