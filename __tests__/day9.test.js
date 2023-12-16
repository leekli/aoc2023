const { solve, findDifferencesBetweenStep } = require('../day9/day9.js');
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
      expect(solve('')).toBe(0);
    });
    test('should return the next predicted OASIS value in the history of a single line of values in a report, only requires 2 sequences', () => {
      const input = `0 3 6 9 12 15`;

      const { p1Total } = solve(input);

      expect(p1Total).toBe(18);
    });
    test('should return the next predicted OASIS value in the history of a single line of values in a report, only requires 3 sequences', () => {
      const input = `1 3 6 10 15 21`;

      const { p1Total } = solve(input);

      expect(p1Total).toBe(28);
    });
    test('should return the next predicted OASIS value in the history of a single line of values in a report, only requires 4 sequences', () => {
      const input = `10 13 16 21 30 45`;

      const { p1Total } = solve(input);

      expect(p1Total).toBe(68);
    });
    test('should return the total value of each next history prediction when passed multiple lines of values in a report', () => {
      const input = `0 3 6 9 12 15
1 3 6 10 15 21`;

      const { p1Total } = solve(input);

      expect(p1Total).toBe(46);
    });
    test('should return the total value of each next history prediction when passed multiple lines of values in a report', () => {
      const input = `1 3 6 10 15 21
10 13 16 21 30 45`;

      const { p1Total } = solve(input);

      expect(p1Total).toBe(96);
    });
    test('should work with AOC day 9 test data', () => {
      const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

      const { p1Total } = solve(input);

      expect(p1Total).toBe(114);
    });
    test('should work with main Day 9 data', () => {
      const { p1Total } = solve(mainDataInput);

      expect(p1Total).toBe(2005352194);
    });
  });
  describe('Part 2', () => {
    test('should return the left-most history value for a single line of values ina  report, requiring 2 sequences', () => {
      const input = `0 3 6 9 12 15`;

      const { p2Total } = solve(input);

      expect(p2Total).toBe(-3);
    });
    test('should return the left-most history value for a single line of values ina  report, requiring 3 sequences', () => {
      const input = `1 3 6 10 15 21`;

      const { p2Total } = solve(input);

      expect(p2Total).toBe(0);
    });
    test('should return the left-most history value for a single line of values ina  report, requiring 4 sequences', () => {
      const input = `10 13 16 21 30 45`;

      const { p2Total } = solve(input);

      expect(p2Total).toBe(5);
    });
    test('should return the total value of each left-most history prediction when passed multiple lines of values in a report', () => {
      const input = `0 3 6 9 12 15
1 3 6 10 15 21`;

      const { p2Total } = solve(input);

      expect(p2Total).toBe(-3);
    });
    test('should return the total value of each next history prediction when passed multiple lines of values in a report', () => {
      const input = `1 3 6 10 15 21
10 13 16 21 30 45`;

      const { p2Total } = solve(input);

      expect(p2Total).toBe(5);
    });
    test('should work with AOC day 9 test data', () => {
      const input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

      const { p2Total } = solve(input);

      expect(p2Total).toBe(2);
    });
    test('should work with main Day 9 data', () => {
      const { p2Total } = solve(mainDataInput);

      expect(p2Total).toBe(1077);
    });
  });
});
