const columns = 10;
const rows = 10;

const currentPos = {
  x: 0,
  y: 0,
};

/**
 * Move the robot's position on the grid based on user input.
 * @param {string} key - The direction key (N, W, E, S) to move the robot.
 * @returns {object|null} - The updated position object after moving in the given direction,
 *                         or null if the provided key is invalid.
 */
module.exports = function moveRobot(key) {
  switch (key) {
    case "N":
      currentPos.y > 0 && currentPos.y--;
      return currentPos;
    case "W":
      currentPos.x > 0 && currentPos.x--;
      return currentPos;
    case "E":
      currentPos.x < columns - 1 && currentPos.x++;
      return currentPos;
    case "S":
      currentPos.y < rows - 1 && currentPos.y++;
      return currentPos;
    default:
      console.log("Sorry, I can't move in that direction.");
  }
};
