const part1 = (input) => {
  if (input.length === 0) return 0;

  let total = 0;

  // List of valid directions and valid connected pipes
  const validDirections = {
    validUp: '|LJS',
    validUpConnectPipe: '|7F',
    validDown: 'S|7F',
    validDownConnectPipe: '|JL',
    validLeft: 'S-J7',
    validLeftConnectPipe: '-LF',
    validRight: 'S-LF',
    validRightConnectPipe: '-J7',
  };

  // Create a 2D array graph out the input
  const graph = parseInputToGrid(input);

  // Find the starting point where 'S' is
  const { startCol, startRow } = findStartPoint(graph);

  // Set up visited and queue arrays, set first locations as starting position
  const visited = [[startRow, startCol]];
  const queue = [[startRow, startCol]];

  // Go through the queued up nodes to check while queue has anything in it
  do {
    const [row, col] = queue.shift();

    let pipe = graph[row][col];

    // See if up is a valid direction ☝️
    if (
      row > 0 &&
      validDirections['validUp'].includes(pipe) &&
      validDirections['validUpConnectPipe'].includes(graph[row - 1][col]) &&
      !visited.some(([r, c]) => r === row - 1 && c === col)
    ) {
      visited.push([row - 1, col]);
      queue.push([row - 1, col]);
    }

    // See if down is a valid direction 👇
    if (
      row < graph.length - 1 &&
      validDirections['validDown'].includes(pipe) &&
      validDirections['validDownConnectPipe'].includes(graph[row + 1][col]) &&
      !visited.some(([r, c]) => r === row + 1 && c === col)
    ) {
      visited.push([row + 1, col]);
      queue.push([row + 1, col]);
    }

    // See if left is a valid direction 👈
    if (
      col > 0 &&
      validDirections['validLeft'].includes(pipe) &&
      validDirections['validLeftConnectPipe'].includes(graph[row][col - 1]) &&
      !visited.some(([r, c]) => r === row && c === col - 1)
    ) {
      visited.push([row, col - 1]);
      queue.push([row, col - 1]);
    }

    // See if right is a valid direction 👉
    if (
      col < graph[row].length - 1 &&
      validDirections['validRight'].includes(pipe) &&
      validDirections['validRightConnectPipe'].includes(graph[row][col + 1]) &&
      !visited.some(([r, c]) => r === row && c === col + 1)
    ) {
      visited.push([row, col + 1]);
      queue.push([row, col + 1]);
    }
  } while (queue.length);

  total = visited.length / 2;

  return total;
};

const parseInputToGrid = (input) => {
  if (input.length === 0) return [];

  const grid = [];

  const splitLines = input.split('\n');

  splitLines.forEach((line) => {
    const splitLine = line.split('');

    grid.push(splitLine);
  });

  return grid;
};

const findStartPoint = (grid) => {
  let startCol;
  let startRow;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'S') {
        startCol = j;
        startRow = i;
      }
    }
  }

  return { startCol, startRow };
};

module.exports = { part1, parseInputToGrid, findStartPoint };
