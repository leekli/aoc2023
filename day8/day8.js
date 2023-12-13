const mathjs = require('mathjs');

const part1 = (input) => {
  if (input.length === 0) return 0;

  const { directionsToGo, directionLookUpObj } = parseInput(input);

  let total = 0;

  const startPosition = 'AAA';
  const endPosition = 'ZZZ';
  let currentNode = startPosition;
  let nextNodeToMove = '';

  let i = 0;

  while (true) {
    const direction = directionsToGo[i];

    nextNodeToMove =
      direction === 'L'
        ? directionLookUpObj[currentNode][0]
        : directionLookUpObj[currentNode][1];

    currentNode = nextNodeToMove;

    total++;

    if (nextNodeToMove === endPosition) break;

    if (nextNodeToMove !== endPosition && i === directionsToGo.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }

  return total;
};

const part2 = (input) => {
  if (input.length === 0) return 0;

  const { directionsToGo, directionLookUpObj } = parseInput(input);

  const nodesStartingWithA = Object.keys(directionLookUpObj).filter(
    (direction) => direction.endsWith('A')
  );

  let total = 0;

  const cycles = [];

  for (let j = 0; j < nodesStartingWithA.length; j++) {
    let currentNode = nodesStartingWithA[j];
    let nextNodeToMove = '';
    let firstZ = '';
    let stepCount = 0;
    let cycleComplete = false;

    let i = 0;

    while (true) {
      const direction = directionsToGo[i];

      nextNodeToMove =
        direction === 'L'
          ? directionLookUpObj[currentNode][0]
          : directionLookUpObj[currentNode][1];

      currentNode = nextNodeToMove;

      stepCount++;

      if (currentNode.endsWith('Z') && !firstZ) {
        firstZ = currentNode;
      }

      if (currentNode === firstZ) {
        cycles.push(stepCount);
        stepCount = 0;
        cycleComplete = true;
      }

      if (cycleComplete) break;

      if (!cycleComplete && i === directionsToGo.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }
  }

  if (cycles.length === 1) {
    total = cycles[0];
  } else {
    total = mathjs.lcm(...cycles);
  }

  return total;
};

const parseInput = (input) => {
  const directionsToGo = input.split('\n')[0].split('');
  const directionsLeftRight = input.split('\n').slice(2);

  const directionLookUpObj = {};

  for (let i = 0; i < directionsLeftRight.length; i++) {
    const line = directionsLeftRight[i]
      .replace('=', '')
      .replace('(', '')
      .replace(')', '')
      .replace(',', '')
      .replace(' ', '')
      .split(' ');

    directionLookUpObj[line[0]] = [line[1], line[2]];
  }

  return { directionsToGo, directionLookUpObj };
};

module.exports = { part1, part2, parseInput };
