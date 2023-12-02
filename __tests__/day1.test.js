const { part1, part2 } = require('../day1/day1.js');
const mainInputData = require('../day1/day1-input.js');

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
  describe('Part 2', () => {
    test('should return a 0 when passed empty input', () => {
      expect(part2('')).toBe(0);
    });
    test('should take the first and last digit when they are spelled out letters when mixed with digits, and combine them into a single two-digit number', () => {
      let input = 'two1nine';
      expect(part2(input)).toBe(29);

      input = 'one132482nine';
      expect(part2(input)).toBe(19);
    });
    test('should take the first actual digit and the last spelled out letter digit and combine them into a single two-digit number', () => {
      let input = '1two3four';
      expect(part2(input)).toBe(14);

      input = 'abcone2threexyz';
      expect(part2(input)).toBe(13);

      input = 'sevencplmbvshm5flzlqxlbjjcrfxv18fivebpscblpj';
      expect(part2(input)).toBe(75);
    });
    test('should take the first and last digit when they are spelled out letters but the valid spelled out digit words overlap', () => {
      let input = 'eightwothree';
      expect(part2(input)).toBe(83);

      input = 'ninetwo';
      expect(part2(input)).toBe(92);

      input = '8gfseightwo';
      expect(part2(input)).toBe(82);

      input = 'bzhbbpkpbrqvhjmgsqq72eightwod';
      expect(part2(input)).toBe(72);

      input = 'oneight';
      expect(part2(input)).toBe(18);

      input = 'eightwo';
      expect(part2(input)).toBe(82);

      input = 'twone';
      expect(part2(input)).toBe(21);

      input = 'threeight';
      expect(part2(input)).toBe(38);

      input = 'fiveight';
      expect(part2(input)).toBe(58);

      input = 'sevenine';
      expect(part2(input)).toBe(79);

      input = 'eighthree';
      expect(part2(input)).toBe(83);

      input = 'nineight';
      expect(part2(input)).toBe(98);

      input = 'szsvltgsc1onecccbfour3oneightfh';
      expect(part2(input)).toBe(18);

      input = 'zoneight234';
      expect(part2(input)).toBe(14);
    });
    test('should ignore any spelled out digits in between, when the first and last digits in the string are actual digits', () => {
      const input = '4nineeightseven2';
      expect(part2(input)).toBe(42);
    });
    test('should parse a multi-line input string, create a single two-digit number for each line, and add them together', () => {
      let input = `two1nine
        eightwothree`;
      expect(part2(input)).toBe(112);

      input = `two1nine
      eightwothree
      abcone2threexyz
      xtwone3four
      4nineeightseven2
      zoneight234
      7pqrstsixteen`;
      expect(part2(input)).toBe(281);
    });
    test('should create a total with the actual AOC input', () => {
      expect(part2(mainInputData)).toBe(53855);
    });
  });
});
