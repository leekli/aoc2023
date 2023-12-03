const part1 = (input) => {
  if (input.length === 0) return 0;

  const parsedInputLines = input.split('\n').map((word) => word.trim());

  let total = 0;
  const numsByLine = [];

  // Match the regex for any digits in each line
  parsedInputLines.forEach((line) => numsByLine.push(line.match(/\d/g)));

  // For each line take the first and last index, concatenate the 2 strings then turn to a Number
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

  const parsedInputLines = input.split('\n').map((word) => word.trim());

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

  let total = 0;
  const numsByLine = [];
  const regex = /one|two|three|four|five|six|seven|eight|nine|\d/g;

  // For each line conduct the regex check
  parsedInputLines.forEach((line) => {
    // Deal with edge cases where two numbers may end and start with the same letter but not fully spelt
    const replacedLine = line
      .replace(/oneight/i, '18')
      .replace(/eightwo/i, '82')
      .replace(/twone/i, '21')
      .replace(/threeight/i, '38')
      .replace(/fiveight/i, '58')
      .replace(/sevenine/i, '79')
      .replace(/eighthree/i, '83')
      .replace(/nineight/i, '98');

    numsByLine.push(replacedLine.match(regex));
  });

  // For each line take the first and last index, concatenate the 2 strings then turn to a Number (if not a number then use the lookup for the actual digit spelt word)
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
