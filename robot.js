const prompt = require("prompt-sync")();
const moveRobot = require("./moveRobot");

// Initialising the flag to control the app execution
let quitApp = false;

// While loop to keep the app running until the user decides to quit
while (!quitApp) {
  // Getting user input for the robot's movement direction
  const requestedDirection = prompt("🤖: Where should I move? ").toUpperCase();

  // Check if the user wants to quit the app
  if (requestedDirection === "Q") {
    console.log("🤖: Thanks for moving me around the warehouse!");
    quitApp = true;
  } else {
    // Variable to store the current position of the robot
    let currentPos = undefined;
    // Splitting the input into individual directions and processing them one by one
    const directions = requestedDirection.split(" ");
    directions.forEach((direction) => {
      console.log(`Requesting to move in: ${direction}`);
      // Calling the moveRobot function to handle each direction and updating the current position
      currentPos = moveRobot(direction);
    });
    // Displaying the current position of the robot on the grid
    if (currentPos) {
      console.log(
        `🤖: My current position on the grid is ${currentPos?.x} ${currentPos?.y}`
      );
    }
  }
}
