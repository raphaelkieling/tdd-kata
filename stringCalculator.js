const lexer = (code) => {
  const regTokenDelimiter = new RegExp("^//[\\w#]+");
  const customTokenDelimiter = code.match(regTokenDelimiter);

  const regToken = customTokenDelimiter
    ? new RegExp(`[\\,\\n,${customTokenDelimiter[0]}]`, "g")
    : new RegExp(`[\\,\\n]`, "g");
  code = code.replace(regTokenDelimiter, "");

  return code
    .split(regToken)
    .filter((i) => i.length)
    .map((i) => {
      return isNaN(i)
        ? { type: "symbol", value: i }
        : { type: "number", value: Number(i) };
    });
};

const parser = (tokens) => {
  const AST = {
    type: "AST",
    body: [],
  };

  while (tokens.length > 0) {
    let currentToken = tokens.shift();

    if (currentToken.type === "number") {
      if (currentToken.value > 0) {
        AST.body.push({
          type: "NumberPositive",
          value: currentToken.value,
        });
      } else {
        AST.body.push({
          type: "NumberNegative",
          value: currentToken.value,
        });
      }
    }
  }

  return AST;
};

const transformer = (nodes) => {
  let result = 0;
  let negativeValues = [];

  while (nodes.body.length > 0) {
    const currentNode = nodes.body.shift();
    switch (currentNode.type) {
      case "NumberPositive":
        if (currentNode.value <= 1000) {
          result += currentNode.value;
        }
        break;
      case "NumberNegative":
        negativeValues.push(currentNode.value);
        break;
    }
  }

  if (negativeValues.length) {
    return `negatives not allowed: ${negativeValues.join(",")}`;
  }

  return result || undefined;
};

const stringCalculator = (value) => {
  if (value === "") return 0;

  const tokens = lexer(value);
  const nodes = parser(tokens);
  const result = transformer(nodes);

  return result;
};

module.exports = stringCalculator;
