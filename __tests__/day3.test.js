const { part1 } = require('../day3/day3');
const mainDataInput = require('../day3/day3-input');

describe('AOC 2023 Day 3', () => {
  describe('Part 1', () => {
    test('should return the sum of all parts when given an engine schematic when adajcent to a symbol, either to the left or right of a number', () => {
      let input = `467*.114..`;
      expect(part1(input)).toBe(467);

      input = `467.#114..`;
      expect(part1(input)).toBe(114);

      input = `467*#114..`;
      expect(part1(input)).toBe(581);

      input = `467*#114..
      617*......
      .664.598=.`;
      expect(part1(input)).toBe(2460);
    });
    test('should return the sum of all parts when given an engine schematic when adajcent to a symbol, either to the top or bottom of a number', () => {
      let input = `467..114..
      .*........`;
      expect(part1(input)).toBe(467);

      input = `467..114..
      .....=....`;
      expect(part1(input)).toBe(114);

      input = `.*........
      .346...737`;
      expect(part1(input)).toBe(346);

      input = `.........=
      .346...737`;
      expect(part1(input)).toBe(737);

      input = `.*...@...=
      .346*6.737`;
      expect(part1(input)).toBe(1089);
    });
    test('should return the sum of all parts when given an engine schematic when adajcent to a symbol, when symbol is diagonal top left, bottom left, top right, bottom right', () => {
      let input = `467.......
      ...*......`;
      expect(part1(input)).toBe(467);

      input = `.678......
      =.........`;
      expect(part1(input)).toBe(678);

      input = `.678......
      =...*.....`;
      expect(part1(input)).toBe(678);

      input = `...*......
      ....891...`;
      expect(part1(input)).toBe(891);

      input = `.......@..
      ....777...`;
      expect(part1(input)).toBe(777);
    });
    test('should not count any symbols which are not adjacent to a number in any way', () => {
      const input = `..........
      ...*...999
      ........2.
      2.....#...
      ...*......
      .....+....
      713.......
      ........64
      ...$.*....
      ..........`;

      expect(part1(input)).toBe(0);
    });
    test('should test with AOC 2023 Part 1 test data', () => {
      const input = `467..114..
      ...*......
      ..35..633.
      ......#...
      617*......
      .....+.58.
      ..592.....
      ......755.
      ...$.*....
      .664.598..`;

      expect(part1(input)).toBe(4361);
    });
    test('should test with AOC 2023 Part 1 full main data input', () => {});
  });
  describe('Part 2', () => {
    expect(part1(mainDataInput)).toBe(527144);
  });
});
