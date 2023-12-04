const part1 = (input) => {
  if (input.length === 0) return 0;

  const splitCardGamesInput = input
    .split('\n')
    .map((game) => game.replace(/\s+/g, ' ').trim());

  let total = 0;

  splitCardGamesInput.forEach((cardGame) => {
    let currentGameTotalPoints = 0;

    const gameInfoCardNumRemoved = cardGame.replace(/Card (\d+): /g, '');
    const gameNumsSplit = gameInfoCardNumRemoved
      .split('|')
      .map((game) => game.trim());

    const winningNums = gameNumsSplit[0].split(' ').map((num) => Number(num));
    const playersNums = gameNumsSplit[1].split(' ').map((num) => Number(num));

    playersNums.forEach((playerNum) => {
      if (winningNums.includes(playerNum)) {
        currentGameTotalPoints !== 0
          ? (currentGameTotalPoints *= 2)
          : (currentGameTotalPoints = 1);
      }
    });

    total += currentGameTotalPoints;
  });

  return total;
};

const part2 = (input) => {
  if (input.length === 0) return 0;

  const splitCardGamesInput = input
    .split('\n')
    .map((game) => game.replace(/\s+/g, ' ').trim());

  const totalNumOfCards = splitCardGamesInput.length;

  const matchingTotalByCard = [];

  let total = 0;

  splitCardGamesInput.forEach((cardGame) => {
    // Split the current Card game into an array, and 2 sets of numbers: winning numbers, and the players numbers
    const gameInfoCardNumRemoved = cardGame.replace(/Card (\d+): /g, '');
    const gameNumsSplit = gameInfoCardNumRemoved
      .split('|')
      .map((game) => game.trim());

    const winningNums = gameNumsSplit[0].split(' ').map((num) => Number(num));
    const playersNums = gameNumsSplit[1].split(' ').map((num) => Number(num));

    // Work through checking the players numbers vs winning numbers, if a match then add to the `winningCardMatchCount` counter
    let winningCardMatchCount = 0;

    playersNums.forEach((playerNum) => {
      if (winningNums.includes(playerNum)) winningCardMatchCount++;
    });

    // Add winning match count to running array total by card number
    matchingTotalByCard.push(winningCardMatchCount);
  });

  // Create an identical pre-filled copies array & then work through them creating the relevant num of copies depending on how many matches there were. Be sure not to go last the end of the table (last card num)
  const copiesListToFill = new Array(splitCardGamesInput.length).fill(1);

  matchingTotalByCard.forEach((matchTotalNum, index) => {
    const currCard = copiesListToFill[index];

    for (let i = 0; i < matchTotalNum; i++) {
      if (index + 1 + i < totalNumOfCards) {
        copiesListToFill[index + 1 + i] += currCard;
      }
    }
  });

  copiesListToFill.forEach((num) => {
    total += num;
  });

  return total;
};

module.exports = { part1, part2 };
