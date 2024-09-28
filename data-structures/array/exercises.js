const Stack = require("./stack");

// Validate Parentheses
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

/**
 *
 * @param {string} s
 * The string containing brackets to validate.
 *
 * @returns {boolean}
 * Returns true if the string is valid, false otherwise.
 */
const validateBrackets = (s) => {
  const stack = new Stack();

  // Map closing brackets to their corresponding opening brackets
  const bracketMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  // Iterate over each character in the string
  for (const char of s) {
    // Check if the character is a closing bracket
    const correspondingOpenBracket = bracketMap[char];

    if (!correspondingOpenBracket) {
      // If it's not a closing bracket, it must be an opening bracket
      // Push the opening bracket onto the stack
      stack.push(char);
      continue;
    }

    // Check if the last element in the stack matches the corresponding opening bracket
    const isMatch = stack.peek() === correspondingOpenBracket;

    if (isMatch) {
      // If there is a match, pop the opening bracket from the stack
      stack.pop();
      continue;
    }

    // If there is no match, return false immediately
    return false;
  }

  // If the stack is empty, all brackets were matched correctly
  // Return true, otherwise return false
  return stack.isEmpty();
};

module.exports = { validateBrackets };
