const { part1 } = require('../../day1/day1.js');
const mainInputData = require('../../day1/day1-input.js');

describe('AOC 2023: Day 1', () => {
  describe('Part 1', () => {
    test('should return a 0 when passed empty input', () => {
      expect(part1('')).toBe(0);
    });
    test('should take the first and last digit from a string, and combine them to form a single two-digit number when they are at exactly the start and end of the string', () => {
      const input = '1abc2';
      expect(part1(input)).toBe(12);
    });
    test("should take the first and last digit from a string, and combine them to form a single two-digit number when they numbers aren't exactly at the start and end of the string", () => {
      const input = 'pqr3stu8vwx';
      expect(part1(input)).toBe(38);
    });
    test('should take the first and last digit from a string, combine them to form a single two-digit number when there is more than 2 digits within the string ', () => {
      const input = 'a1b2c3d4e5f';
      expect(part1(input)).toBe(15);
    });
    test('should create a single two-digit number out of a single digit when there is only one digit within the string', () => {
      const input = 'treb7uchet';
      expect(part1(input)).toBe(77);
    });
    test('should parse a multi-line input string, create a single two-digit number for each line, and add them together', () => {
      let input = `1abc2
      pqr3stu8vwx`;
      expect(part1(input)).toBe(50);

      input = `1abc2
      pqr3stu8vwx
      a1b2c3d4e5f
      treb7uchet`;
      expect(part1(input)).toBe(142);
    });
    test('should create a total with the actual AOC input', () => {
      expect(part1(mainInputData)).toBe(54634);
    });
  });
  describe('Part 2', () => {});
});
