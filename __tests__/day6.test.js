const { day6 } = require('../day6/day6');
const mainDataInput = require('../day6/day6-input');

describe('AOC 2023 Day 6', () => {
  describe('Part 1', () => {
    test('should return 0 for an empty input passed', () => {
      expect(day6('')).toBe(0);
    });
    test('should return the number of ways to beat the record multipled together for a single race given', () => {
      const input = `Time:      7
        Distance:  9`;

      expect(day6(input)).toBe(4);
    });
    test('should return the number of ways to beat the record multipled together for another single race given', () => {
      const input = `Time:      15
          Distance:  40`;

      expect(day6(input)).toBe(8);
    });
    test('should return the number of ways to beat the record multipled together for multiple races given', () => {
      const input = `Time:      7  15
        Distance:  9  40`;

      expect(day6(input)).toBe(32);
    });
    test('should work with AOC Day 6 test input', () => {
      const input = `Time:      7  15   30
        Distance:  9  40  200`;

      expect(day6(input)).toBe(288);
    });
    test('should work with AOC Day 6 main data input', () => {
      expect(day6(mainDataInput)).toBe(211904);
    });
  });
  describe('Part 2', () => {
    test('should work with AOC Day 6 test input for part 2', () => {
      const input = `Time:      71530
        Distance:  940200`;

      expect(day6(input, '2')).toBe(71503);
    });
    test('should work with AOC Day 6 main data input', () => {
      expect(day6(mainDataInput, '2')).toBe(43364472);
    });
  });
});
