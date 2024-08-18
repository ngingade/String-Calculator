const add = require("./index");

// test("Empty string", () => {
//   expect(add()).toBe(0);
// });

// test("Pass string '1', add the numbers and sum should be equal to 1", () => {
//   expect(add("1")).toBe(1);
// });

// test("Pass string '2,2', add the numbers and sum should be equal to 4", () => {
//   expect(add("2,2")).toBe(4);
// });

// test("Pass string '2,2,4,5,6,7', add the numbers and sum should be equal to 26", () => {
//   expect(add("2,2,4,5,6,7")).toBe(26);
// });

// test("Pass string '2\n3,4', add the numbers and sum should be equal to 9", () => {
//   expect(add("2\n3,4")).toBe(9);
// });

test("Pass string '//;\n1;2', add the numbers and sum should be equal to 3", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("Pass string '//;\n1', add the numbers and sum should be equal to 1", () => {
  expect(add("//;\n1")).toBe(1);
});

test("Pass string '//:\n1:2, add the numbers and sum should be equal to 0", () => {
  expect(add("//:\n1:2")).toBe(3);
});

test("Pass string '//,\n1,2,5' add the numbers and sum should be equal to 8", () => {
  expect(add("//,\n1,2,5")).toBe(8);
});

test("Pass string '//\n1:2', add the numbers and sum should be equal to 'The passed string is invalid'", () => {
  expect(add("//\n1:2")).toBe("The passed string is invalid");
});

test("Pass string '//,\n1,-2,-5', find the negative numbers and return the negative number", () => {
  expect(add("//,\n1,-2,-5")).toBe("negative numbers -2,-5 not allowed");
});
