const {
  part1,
  parseInputToGrid,
  findStartPoint,
} = require('../day10/day10.js');
const mainDataInput = require('../day10/day10-input.js');

describe('AOC 2023Day 10', () => {
  describe('Util function tests', () => {
    describe('parseInputToGrid', () => {
      test('should return an empty array when given empty input', () => {
        const input = ``;
        const output = [];
        expect(parseInputToGrid(input)).toEqual(output);
      });
      test('should return 1 nested array given 1 row of input', () => {
        const input = `.....`;
        const output = [['.', '.', '.', '.', '.']];
        expect(parseInputToGrid(input)).toEqual(output);
      });
      test('should return 2 nested arrays given 2 rows of input', () => {
        const input = `.....
.S-7.`;

        const output = [
          ['.', '.', '.', '.', '.'],
          ['.', 'S', '-', '7', '.'],
        ];

        expect(parseInputToGrid(input)).toEqual(output);
      });
      test('should return correct num of nested arrays given multiple rows of input', () => {
        const input = `.....
.S-7.
.|.|.
.L-J.
.....`;

        const output = [
          ['.', '.', '.', '.', '.'],
          ['.', 'S', '-', '7', '.'],
          ['.', '|', '.', '|', '.'],
          ['.', 'L', '-', 'J', '.'],
          ['.', '.', '.', '.', '.'],
        ];

        expect(parseInputToGrid(input)).toEqual(output);
      });
    });
    describe('findStartPoint', () => {
      test('should return the starting row and starting column of `S` when given a single row grid when `S` is at the very start', () => {
        const inputGrid = [['S', '.', '.', '.', '.']];
        const { startCol, startRow } = findStartPoint(inputGrid);
        expect(startRow).toBe(0);
        expect(startCol).toBe(0);
      });
      test('should return the starting row and starting column of `S` when given a single row grid when `S` is not at the very start', () => {
        const inputGrid = [['.', '.', '.', 'S', '.']];
        const { startCol, startRow } = findStartPoint(inputGrid);
        expect(startRow).toBe(0);
        expect(startCol).toBe(3);
      });
      test('should return the starting row and starting column of `S` when given a 2 rows on a grid', () => {
        const inputGrid = [
          ['.', '.', '.', '.', '.'],
          ['.', 'S', '.', '.', '.'],
        ];
        const { startCol, startRow } = findStartPoint(inputGrid);
        expect(startRow).toBe(1);
        expect(startCol).toBe(1);
      });
      test('should return the starting row and starting column of `S` when given many rows on a grid', () => {
        const inputGrid = [
          ['.', '.', '.', '.', '.'],
          ['.', '.', '-', '7', '.'],
          ['.', '|', '.', '|', '.'],
          ['.', 'L', 'S', 'J', '.'],
          ['.', '.', '.', '.', '.'],
        ];
        const { startCol, startRow } = findStartPoint(inputGrid);
        expect(startRow).toBe(3);
        expect(startCol).toBe(2);
      });
    });
  });
  describe('Part 1', () => {
    test('should return 0 for empty input', () => {
      expect(part1('')).toBe(0);
    });
    test('should return 4 for AOC Day 10s simplest input', () => {
      const input = `.....
.S-7.
.|.|.
.L-J.
.....`;

      expect(part1(input)).toBe(4);
    });
    test('should return 4 for AOC Day 10s test input data', () => {
      const input = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

      expect(part1(input)).toBe(8);
    });
    test('should work with AOC Day 10 main data input', () => {
      expect(part1(mainDataInput)).toBe(6856);
    });
  });
  describe('Part 2', () => {});
});
