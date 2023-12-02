const { part1, part2 } = require('../day2/day2');
const mainDataInput = require('../day2/day2-input');

describe('AOC 2023 Day 2', () => {
  describe('Part 1', () => {
    test('should return the Game ID number when a single game is passed in and it fits the configuration of: only 12 red cubes, 13 green cubes, and 14 blue cubes', () => {
      let input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
      expect(part1(input)).toBe(1);

      input = `Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue`;
      expect(part1(input)).toBe(2);

      input = `Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
      expect(part1(input)).toBe(5);
    });
    test('should return 0 when passed a single game where more than either 12 red cubes, 13 green cubes, and 14 blue cubes are shown at once within the game', () => {
      let input = `Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red`;
      expect(part1(input)).toBe(0);

      input = `Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red`;
      expect(part1(input)).toBe(0);
    });
    test('should parse the different games, and return the sum total of all 3 game Ids which are passed in within the correct configurations of: 12 red cubes, 13 green cubes, and 14 blue cubes', () => {
      const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

      expect(part1(input)).toBe(8);
    });
    test('should parse the different games, and return a total of 0 for 2 games which are passed in where the configurations of: 12 red cubes, 13 green cubes, and 14 blue cubes go above the rules', () => {
      const input = `Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red`;

      expect(part1(input)).toBe(0);
    });
    test('should parse the different games, and return the sum total of all game IDs where the combinations fit within the configuration of: 12 red cubes, 13 green cubes, and 14 blue cubes, this is the test data from AOC 2023', () => {
      const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

      expect(part1(input)).toBe(8);
    });
    test('should test part 1 with the day 2 AOC 2023 input file', () => {
      expect(part1(mainDataInput)).toBe(2156);
    });
  });
  describe('Part 2', () => {
    test('When given a single game, should return the power of a set of cubes multipled together which were the fewest possible set of cubes which could have been played with', () => {
      let input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`;
      expect(part2(input)).toBe(48);

      input = `Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue`;
      expect(part2(input)).toBe(12);

      input = `Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red`;
      expect(part2(input)).toBe(1560);

      input = `Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red`;
      expect(part2(input)).toBe(630);

      input = `Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
      expect(part2(input)).toBe(36);
    });
    test('When given multiple games, should return the sum of all games', () => {
      const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

      expect(part2(input)).toBe(2286);
    });
    test('should test part 2 with the day 2 AOC 2023 input file', () => {
      expect(part2(mainDataInput)).toBe(66909);
    });
  });
});
