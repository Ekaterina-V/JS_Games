// Generate random number from 0 to sizeOfMap-1 to set the position of the treasures
var getRandomNumber = function (sizeOfMap) {
  return Math.floor(Math.random() * sizeOfMap);
};

console.log(Math.random());

// Set variables for treasures
var treasuresWidth = 450;
var treasuresHeight = 450;

// Set the coordinates of the treasures
var treasuresPoint = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};
