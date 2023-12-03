const part1 = (input) => {
  let total = 0;

  const splitLines = input.split('\n').map((line) => line.trim());

  const numbersList = buildNumsArr(splitLines);
  const symbolsList = buildSymbolsArr(splitLines);

  for (let i = 0; i < numbersList.length; i++) {
    // for each number in an individual row
    for (let j = 0; j < symbolsList.length; j++) {
      // check if a symbol is to the right
      if (symbolsList[j].row === numbersList[i].row) {
        if (symbolsList[j].index === numbersList[i].endIndex) {
          total += numbersList[i].num;
          numbersList[i] = { numChecked: true };
        }
      }
      // check if a symbol is to the left
      if (symbolsList[j].row === numbersList[i].row) {
        if (symbolsList[j].index + 1 === numbersList[i].startIndex) {
          total += numbersList[i].num;
          numbersList[i] = { numChecked: true };
        }
      }
      // check if a symbol is to below the number & diagonal bottom left or right
      if (symbolsList[j].row - 1 === numbersList[i].row) {
        if (
          symbolsList[j].index >= numbersList[i].startIndex - 1 &&
          symbolsList[j].index <= numbersList[i].endIndex
        ) {
          total += numbersList[i].num;
          numbersList[i] = { numChecked: true };
        }
      }
      // check if a symbol is to above the number & diagonal top left or right
      if (symbolsList[j].row === numbersList[i].row - 1) {
        if (
          symbolsList[j].index >= numbersList[i].startIndex - 1 &&
          symbolsList[j].index <= numbersList[i].endIndex
        ) {
          total += numbersList[i].num;
          numbersList[i] = { numChecked: true };
        }
      }
    }
  }

  return total;
};

const part2 = (input) => {
  let total = 0;

  const splitLines = input.split('\n').map((line) => line.trim());

  const numbersList = buildNumsArr(splitLines);
  const onlyGearsymbolsList = buildSymbolsArr(splitLines).filter(
    (symbol) => symbol.symbol === '*'
  );

  for (let i = 0; i < numbersList.length; i++) {
    // for each number in an individual row
    for (let j = 0; j < onlyGearsymbolsList.length; j++) {
      // check if a symbol is to the right
      if (onlyGearsymbolsList[j].row === numbersList[i].row) {
        if (onlyGearsymbolsList[j].index === numbersList[i].endIndex) {
          onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
          numbersList[i] = { numChecked: true };
        }
      }
      // check if a symbol is to the left
      if (onlyGearsymbolsList[j].row === numbersList[i].row) {
        if (onlyGearsymbolsList[j].index + 1 === numbersList[i].startIndex) {
          onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
          numbersList[i] = { numChecked: true };
        }
      }
      // check if a symbol is to below the number & diagonal bottom left or right
      if (onlyGearsymbolsList[j].row - 1 === numbersList[i].row) {
        if (
          onlyGearsymbolsList[j].index >= numbersList[i].startIndex - 1 &&
          onlyGearsymbolsList[j].index <= numbersList[i].endIndex
        ) {
          onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
          numbersList[i] = { numChecked: true };
        }
      }
      // check if a symbol is to above the number & diagonal top left or right
      if (onlyGearsymbolsList[j].row === numbersList[i].row - 1) {
        if (
          onlyGearsymbolsList[j].index >= numbersList[i].startIndex - 1 &&
          onlyGearsymbolsList[j].index <= numbersList[i].endIndex
        ) {
          onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
          numbersList[i] = { numChecked: true };
        }
      }
    }
  }

  for (let i = 0; i < onlyGearsymbolsList.length; i++) {
    let gearRatio = 1;

    onlyGearsymbolsList[i].numsAdjacentTo.forEach((num) => {
      gearRatio *= num;
    });

    if (onlyGearsymbolsList[i].numsAdjacentTo.length >= 2) {
      total += gearRatio;
    }
  }

  return total;
};

const buildNumsArr = (lines) => {
  const numsList = [];

  lines.forEach((row, index) => {
    const allFoundNumbers = [...row.matchAll(/\d+/dg)];

    allFoundNumbers.forEach((num) => {
      numsList.push({
        num: Number(num[0]),
        row: index,
        startIndex: num.indices[0][0],
        endIndex: num.indices[0][1],
      });
    });
  });

  return numsList;
};

const buildSymbolsArr = (lines) => {
  const symbolsList = [];

  lines.forEach((row, index) => {
    const allFoundSymbols = [...row.matchAll(/[^\d|.|\s]/dg)];

    allFoundSymbols.forEach((symbol) => {
      symbolsList.push({
        symbol: symbol[0],
        row: index,
        index: symbol.index,
        numsAdjacentTo: [],
      });
    });
  });

  return symbolsList;
};

module.exports = { part1, part2 };
