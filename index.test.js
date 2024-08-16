// import add from "./index";
const add = require("./index");

test("add 2, 2 equal to 4", () => {
  expect(add(2, 2)).toBe(4);
});
