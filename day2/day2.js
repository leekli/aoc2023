const part1 = (input) => {
  const gamesSplit = input.split('\n').map((line) => line.trim());

  let total = 0;

  // Work through each Game Id individually
  gamesSplit.forEach((game) => {
    const findGameId = game.match(/Game (\d+)/g);
    const currentGameId = Number(findGameId[0].split(' ')[1]);

    const parsedInputGameIdRemoved = game.replace(/Game (\d+): /g, '');
    const subGamesSplit = parsedInputGameIdRemoved.split('; ');

    // Boolean flag set to false, assume game always lost unless changed later to true
    let currentGameLost = false;

    // Work through each sub-game (each pick of the bag, and check the colours don't break the configuration)
    subGamesSplit.forEach((currSubGame) => {
      const splitSubGameColours = currSubGame.split(', ');

      splitSubGameColours.forEach((currSubGameColour) => {
        const [count, colour] = currSubGameColour.split(' ');

        if (colour === 'red' && count > 12) currentGameLost = true;
        if (colour === 'green' && count > 13) currentGameLost = true;
        if (colour === 'blue' && count > 14) currentGameLost = true;
      });
    });

    // If game is not 'lost', and all blue/green/red configs are within paramters then allow the Game ID be incremented to current total
    if (currentGameLost === false) total += currentGameId;
  });

  return total;
};

const part2 = (input) => {
  const gamesSplit = input.split('\n').map((line) => line.trim());

  let total = 0;

  // Work through each Game Id individually
  gamesSplit.forEach((game) => {
    const parsedInputGameIdRemoved = game.replace(/Game (\d+): /g, '');
    const subGamesSplit = parsedInputGameIdRemoved.split('; ');

    // Tracker to track highest colour of each cube
    const colourTracker = {
      red: 0,
      blue: 0,
      green: 0,
    };

    // Work through each sub game (pick of the bag) and track the red/green/blue cubes for highest number which means the lowest number of cubes needed for that game
    subGamesSplit.forEach((currSubGame) => {
      const splitSubGameColours = currSubGame.split(', ');

      splitSubGameColours.forEach((currSubGameColour) => {
        const [count, colour] = currSubGameColour.split(' ');

        if (colour === 'red' && +count > colourTracker['red'])
          colourTracker['red'] = +count;

        if (colour === 'blue' && +count > colourTracker['blue'])
          colourTracker['blue'] = +count;

        if (colour === 'green' && +count > colourTracker['green'])
          colourTracker['green'] = +count;
      });
    });

    const powerOfCubes =
      colourTracker['red'] * colourTracker['blue'] * colourTracker['green'];

    total += powerOfCubes;
  });

  return total;
};

module.exports = { part1, part2 };
