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

module.exports = { part1 };
