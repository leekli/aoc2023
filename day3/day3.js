const part1 = (input) => {
  let total = 0;

  const splitLines = input.split('\n').map((line) => line.trim());

  const { numbersList, symbolsList } = buildNumsAndSymbolsLists(splitLines);

  for (let i = 0; i < numbersList.length; i++) {
    for (let j = 0; j < symbolsList.length; j++) {
      // check if a symbol is to the right 👉
      if (
        symbolsList[j].row === numbersList[i].row &&
        symbolsList[j].index === numbersList[i].endIndex
      ) {
        total += numbersList[i].num;
        numbersList[i] = { numChecked: true };
      }

      // check if a symbol is to the left 👈
      if (
        symbolsList[j].row === numbersList[i].row &&
        symbolsList[j].index + 1 === numbersList[i].startIndex
      ) {
        total += numbersList[i].num;
        numbersList[i] = { numChecked: true };
      }

      // check if a symbol is to below the number & diagonal bottom left or right 👇
      if (
        symbolsList[j].row - 1 === numbersList[i].row &&
        symbolsList[j].index >= numbersList[i].startIndex - 1 &&
        symbolsList[j].index <= numbersList[i].endIndex
      ) {
        total += numbersList[i].num;
        numbersList[i] = { numChecked: true };
      }

      // check if a symbol is to above the number & diagonal top left or right ☝️
      if (
        symbolsList[j].row === numbersList[i].row - 1 &&
        symbolsList[j].index >= numbersList[i].startIndex - 1 &&
        symbolsList[j].index <= numbersList[i].endIndex
      ) {
        total += numbersList[i].num;
        numbersList[i] = { numChecked: true };
      }
    }
  }

  return total;
};

const part2 = (input) => {
  let total = 0;

  const splitLines = input.split('\n').map((line) => line.trim());

  const { numbersList, symbolsList } = buildNumsAndSymbolsLists(splitLines);

  const onlyGearsymbolsList = symbolsList.filter(
    (symbol) => symbol.symbol === '*'
  );

  for (let i = 0; i < numbersList.length; i++) {
    for (let j = 0; j < onlyGearsymbolsList.length; j++) {
      // check if a symbol is to the right 👉
      if (
        onlyGearsymbolsList[j].row === numbersList[i].row &&
        onlyGearsymbolsList[j].index === numbersList[i].endIndex
      ) {
        onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
        numbersList[i] = { numChecked: true };
      }

      // check if a symbol is to the left 👈
      if (
        onlyGearsymbolsList[j].row === numbersList[i].row &&
        onlyGearsymbolsList[j].index + 1 === numbersList[i].startIndex
      ) {
        onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
        numbersList[i] = { numChecked: true };
      }

      // check if a symbol is to below the number & diagonal bottom left or right 👇
      if (
        onlyGearsymbolsList[j].row - 1 === numbersList[i].row &&
        onlyGearsymbolsList[j].index >= numbersList[i].startIndex - 1 &&
        onlyGearsymbolsList[j].index <= numbersList[i].endIndex
      ) {
        onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
        numbersList[i] = { numChecked: true };
      }

      // check if a symbol is to above the number & diagonal top left or right ☝️
      if (
        onlyGearsymbolsList[j].row === numbersList[i].row - 1 &&
        onlyGearsymbolsList[j].index >= numbersList[i].startIndex - 1 &&
        onlyGearsymbolsList[j].index <= numbersList[i].endIndex
      ) {
        onlyGearsymbolsList[j].numsAdjacentTo.push(numbersList[i].num);
        numbersList[i] = { numChecked: true };
      }
    }
  }

  for (let i = 0; i < onlyGearsymbolsList.length; i++) {
    let gearRatio = 1;

    onlyGearsymbolsList[i].numsAdjacentTo.forEach((num) => (gearRatio *= num));

    if (onlyGearsymbolsList[i].numsAdjacentTo.length >= 2) total += gearRatio;
  }

  return total;
};

const buildNumsAndSymbolsLists = (lines) => {
  const numbersList = [];
  const symbolsList = [];

  lines.forEach((row, index) => {
    const allFoundNumbers = [...row.matchAll(/\d+/dg)];
    const allFoundSymbols = [...row.matchAll(/[^\d|.]/dg)];

    allFoundNumbers.forEach((num) => {
      numbersList.push({
        num: Number(num[0]),
        row: index,
        startIndex: num.indices[0][0],
        endIndex: num.indices[0][1],
      });
    });

    allFoundSymbols.forEach((symbol) => {
      symbolsList.push({
        symbol: symbol[0],
        row: index,
        index: symbol.index,
        numsAdjacentTo: [],
      });
    });
  });

  return { numbersList, symbolsList };
};

module.exports = { part1, part2 };
