const day6 = (input, part = '1') => {
  if (input.length === 0) return 0;

  let { timesList, distancesList } = parseInput(input);

  if (part === '2') {
    const newTimesList = timesList
      .join('')
      .split(' ')
      .map((num) => Number(num));
    const newDistancesList = distancesList
      .join('')
      .split(' ')
      .map((num) => Number(num));

    timesList = newTimesList;
    distancesList = newDistancesList;
  }

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

const parseInput = (input) => {
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

  return { timesList, distancesList };
};

module.exports = { day6 };
