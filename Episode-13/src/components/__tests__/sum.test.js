import { sum } from "../sum";

// Test function takes two arguments. 1st is string(Description of the test) and second is callback function(Implementation of  the test)

test("Sum function shoul calculate the sum of two function", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});
