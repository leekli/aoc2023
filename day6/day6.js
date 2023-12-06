const part1 = (input) => {
  if (input.length === 0) return 0;

  const parsedInput = input.split('\n');
  const timesList = parsedInput[0]
    .replace('Time: ', ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((num) => +num);

  const distancesList = parsedInput[1]
    .replace('Distance: ', ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((num) => +num);

  let total = 1;

  for (let i = 0; i < timesList.length; i++) {
    let currentRaceSecs = timesList[i];
    let currentRaceDistance = distancesList[i];
    let buttonHeldDownFor = 0;
    let numOfWaysToWin = 0;

    while (currentRaceSecs >= 0) {
      const totalDistance = buttonHeldDownFor * currentRaceSecs;

      if (totalDistance > currentRaceDistance) {
        numOfWaysToWin++;
      }

      buttonHeldDownFor++;
      currentRaceSecs--;
    }

    total *= numOfWaysToWin;
  }

  return total;
};

module.exports = { part1 };
