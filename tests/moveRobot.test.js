const moveRobot = require("../moveRobot");

test("S to move robot South", () => {
  expect(moveRobot("S")).toStrictEqual({ x: 0, y: 1 });
});

test("E to move robot East", () => {
  expect(moveRobot("E")).toStrictEqual({ x: 1, y: 1 });
});

test("W to move robot West", () => {
  expect(moveRobot("W")).toStrictEqual({ x: 0, y: 1 });
});

test("N to move robot North", () => {
  expect(moveRobot("N")).toStrictEqual({ x: 0, y: 0 });
});
