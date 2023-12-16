const { part1, findDifferencesBetweenStep } = require('../day9/day9.js');
const mainDataInput = require('../day9/day9-input.js');

describe('AOC Day 9 Tests', () => {
  describe('Part 1', () => {
    test('util func: findDifferencesBetweenStep - returns an empty array when passed an empty array', () => {
      expect(findDifferencesBetweenStep([])).toEqual([]);
    });
    test('util func: findDifferencesBetweenStep - returns an array of numbers showing the step difference between each number when given an array of numbers with a step difference', () => {
      const input = [0, 3, 6, 9, 12, 15];
      expect(findDifferencesBetweenStep(input)).toEqual([3, 3, 3, 3, 3]);
    });
    test('util func: findDifferencesBetweenStep - returns an array of 0s when given an array of numbers which have no step difference', () => {
      const input = [3, 3, 3, 3, 3];
      expect(findDifferencesBetweenStep(input)).toEqual([0, 0, 0, 0]);
    });
    test('should return 0 with an empty input', () => {
      expect(part1('')).toBe(0);
    });
    test('should return the next predicted OASIS value in the history of a single line of values in a report, only requires 2 sequences', () => {
      const input = `0 3 6 9 12 15`;
      expect(part1(input)).toBe(18);
    });
    test('should return the next predicted OASIS value in the history of a single line of values in a report, only requires 3 sequences', () => {
      const input = `1 3 6 10 15 21`;
      expect(part1(input)).toBe(28);
    });
    test('should return the next predicted OASIS value in the history of a single line of values in a report, only requires 4 sequences', () => {
      const input = `10 13 16 21 30 45`;
      expect(part1(input)).toBe(68);
    });
    test('should return the total value of each next history prediction when passed multiple lines of values in a report', () => {
      const input = `0 3 6 9 12 15
1 3 6 10 15 21`;
      expect(part1(input)).toBe(46);
    });
    test('should return the total value of each next history prediction when passed multiple lines of values in a report', () => {
      const input = `1 3 6 10 15 21
10 13 16 21 30 45`;
      expect(part1(input)).toBe(96);
    });
    test('should work with AOC day 9 test data', () => {
      const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;
      expect(part1(input)).toBe(114);
    });
    test('should work with main Day 9 data', () => {
      expect(part1(mainDataInput)).toBe(2005352194);
    });
  });
  test('Part 2', () => {});
});
