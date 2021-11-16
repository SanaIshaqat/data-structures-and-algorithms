"use strict";

const validateBrackets = require("../stack-queue-brackets");

describe("balanced brackets", () => {
  it("returns true when it can find matching closing brackets for all open brackets", () => {
    expect(validateBrackets("{}")).toBe(true);
    expect(validateBrackets("{}(){}")).toBe(true);
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
    expect(validateBrackets("(){}[[]]")).toBe(true);
    expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });
  it("returns false when it can't find a matching closing bracket to an open bracket.", () => {
    expect(validateBrackets("[({}]")).toBe(false);
    expect(validateBrackets("(](")).toBe(false);
    expect(validateBrackets("{")).toBe(false);
    expect(validateBrackets(")")).toBe(false);
    expect(validateBrackets("[}")).toBe(false);
  });
});