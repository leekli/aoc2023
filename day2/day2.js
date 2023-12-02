const part1 = (input) => {
  // Parse the input
  const gamesSplit = input.split('\n').map((line) => line.trim());

  let total = 0;

  // Work through each Game Id individually
  gamesSplit.forEach((game) => {
    const findGameId = game.match(/Game (\d+)/g);
    const currentGameId = Number(findGameId[0].split(' ')[1]);

    const parsedInputGameIdRemoved = game.replace(/Game (\d+): /g, '');
    const subGamesSplit = parsedInputGameIdRemoved.split('; ');

    // Boolean flag set to true, assume game always won unless changed later to false
    let currentGameWon = true;

    // Work through each sub-game (each pick of the bag, and check the colours don't break the configuration)
    subGamesSplit.forEach((currSubGame) => {
      const splitSubGameColours = currSubGame.split(', ');

      splitSubGameColours.forEach((currSubGameColour) => {
        const [count, colour] = currSubGameColour.split(' ');

        if (colour === 'red' && count > 12) currentGameWon = false;
        if (colour === 'green' && count > 13) currentGameWon = false;
        if (colour === 'blue' && count > 14) currentGameWon = false;
      });
    });

    // If game remains won, and all blue/green/red configs are within paramters then allow the Game ID be incremented to current total
    if (currentGameWon === true) total += currentGameId;
  });

  return total;
};

module.exports = { part1 };
