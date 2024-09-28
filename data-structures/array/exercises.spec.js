const { describe, it } = require("node:test");
const assert = require("node:assert");

const { validateBrackets } = require("./exercises");

describe("Validate Parentheses", () => {
  it("Valid input", () => {
    const validStrings = ["()", "[]", "{}", "([])", "({[]})"];

    const res = validStrings.map((s) => validateBrackets(s));
    const expectations = new Array(validStrings.length).fill(true);

    assert.deepStrictEqual(res, expectations);
  });

  it("Invalid input", () => {
    const validStrings = ["(]", "()]", "{(})", "(", "[)(]{"];

    const res = validStrings.map((s) => validateBrackets(s));
    const expectations = new Array(validStrings.length).fill(false);

    assert.deepEqual(res, expectations);
  });
});
