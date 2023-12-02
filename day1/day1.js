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

const part2 = (input) => {
  if (input.length === 0) return 0;

  let total = 0;
  const numsByLine = [];
  const regex = /one|two|three|four|five|six|seven|eight|nine|\d/g;

  const numLookup = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const parsedInputLines = input.split('\n').map((word) => word.trim());

  parsedInputLines.forEach((line) => {
    const replacedLine = line
      .replace(/oneight/i, '1e8')
      .replace(/eightwo/i, '8t2')
      .replace(/twone/i, '2o1')
      .replace(/threeight/i, '3e8')
      .replace(/fiveight/i, '5e8')
      .replace(/sevenine/i, '7n9')
      .replace(/eighthree/i, '8t3')
      .replace(/nineight/i, '9e8');

    const matchedNums = [];

    matchedNums.push(replacedLine.match(regex).flat());

    numsByLine.push(matchedNums.flat());
  });

  numsByLine.forEach((line) => {
    let strNumsAdded = '';
    const firstNum = line[0];
    const lastNum = line[line.length - 1];

    Number.isInteger(parseInt(firstNum))
      ? (strNumsAdded += firstNum)
      : (strNumsAdded += numLookup[firstNum]);

    Number.isInteger(parseInt(lastNum))
      ? (strNumsAdded += lastNum)
      : (strNumsAdded += numLookup[lastNum]);

    total += Number(strNumsAdded);
  });

  return total;
};

module.exports = { part1, part2 };
