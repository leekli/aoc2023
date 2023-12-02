const part1 = (input) => {
  if (input.length === 0) return 0;

  let total = 0;
  const numsByLine = [];

  const parsedInputLines = input.split('\n').map((word) => word.trim());

  parsedInputLines.forEach((line) => {
    numsByLine.push(line.match(/\d/g));
  });

  numsByLine.forEach((line) => {
    let strNumsAdded = '';

    strNumsAdded += line[0];
    strNumsAdded += line[line.length - 1];

    total += Number(strNumsAdded);
  });

  return total;
};

module.exports = { part1 };
