const { part1, part2, parseInput } = require('../day8/day8.js');
const mainDataInput = require('../day8/day8-input.js');

describe('AOC 2023 Day 8', () => {
  describe('Part 1', () => {
    test('util parseInput: should return the first line instructions in an array and node list in an object', () => {
      const input = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

      const { directionsToGo, directionLookUpObj } = parseInput(input);
      expect(directionsToGo).toEqual(['R', 'L']);
      expect(directionLookUpObj).toEqual({
        AAA: ['BBB', 'CCC'],
        BBB: ['DDD', 'EEE'],
        CCC: ['ZZZ', 'GGG'],
        DDD: ['DDD', 'DDD'],
        EEE: ['EEE', 'EEE'],
        GGG: ['GGG', 'GGG'],
        ZZZ: ['ZZZ', 'ZZZ'],
      });
    });
    test('should return 0 when given an empty input', () => {
      expect(part1('')).toBe(0);
    });
    test('should go from AAA to ZZZ in 1 move lookup going right', () => {
      const input = `R

AAA = (BBB, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

      expect(part1(input)).toBe(1);
    });
    test('should go from AAA to ZZZ in 1 move lookup going left', () => {
      const input = `L

AAA = (ZZZ, BBB)
ZZZ = (ZZZ, AAA)`;

      expect(part1(input)).toBe(1);
    });
    test('should go from AAA to ZZZ in multiple move lookups', () => {
      const input = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

      expect(part1(input)).toBe(2);
    });
    test('should go from AAA to ZZZ in multiple moves even when it has ran out of left-right instructions, so repeats the sequence of instructions until it reaches ZZZ', () => {
      const input = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

      expect(part1(input)).toBe(6);
    });
    test('should work with AOC Day 8 input', () => {
      expect(part1(mainDataInput)).toBe(22411);
    });
  });
  describe('Part 2', () => {
    test('should return 0 when given an empty input', () => {
      expect(part2('')).toBe(0);
    });
    test('should return the total numbers of steps where there is only one node ending in A and Z each', () => {
      const input = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)`;

      expect(part2(input)).toBe(2);
    });
  });
});
