const { part1, part2 } = require('../day4/day4');
const mainDataInput = require('../day4/day4-input');

describe('AOC 2023 Day 4', () => {
  describe('Part 1', () => {
    test('should return 0 when passed an empty string', () => {
      expect(part1('')).toBe(0);
    });
    test('should return 1 when passed a single card with 1 matching winning number', () => {
      const input = `Card 1: 42 48 82 85 16 | 83 86  6 31 17  9 48 53`;
      expect(part1(input)).toBe(1);
    });
    test('should return 0 when passed a single card with 0 matching numbers', () => {
      let input = `Card 1: 42 47 82 85 16 | 83 86  6 31 17  9 48 53`;
      expect(part1(input)).toBe(0);

      input = `Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
      Card 62: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
      expect(part1(input)).toBe(0);
    });
    test('should return the total points when passed a single card with multiple matching numbers', () => {
      let input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53`;
      expect(part1(input)).toBe(8);

      input = `Card 1: 41 48 83 86 17 | 83 86  6 41 17  9 48 53`;
      expect(part1(input)).toBe(16);
    });
    test('should return the total points when passed multiple cards with multiple matching numbers', () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
        Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19`;
      expect(part1(input)).toBe(10);
    });
    test('should test with the AOC day 4 test input', () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
        Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
        Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
        Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
        Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
        Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
      expect(part1(input)).toBe(13);
    });
    test('should test with AOC day 4 full main input', () => {
      expect(part1(mainDataInput)).toBe(25651);
    });
  });
  describe('Part 2', () => {
    test('should return 0 when passed an empty string', () => {
      expect(part2('')).toBe(0);
    });
    test('should return the total number of scratchcards when given a single card with matching numbers', () => {
      let input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53`;
      expect(part2(input)).toBe(1);

      input = `Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19`;
      expect(part2(input)).toBe(1);
    });
    test('should return only the total number of cards when given a card(s) with no matching numbers, 1 representing just the card on its own', () => {
      let input = `Card 1: 42 47 82 85 16 | 83 86  6 31 17  9 48 53`;
      expect(part2(input)).toBe(1);

      input = `Card 1: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
        Card 2: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
      expect(part2(input)).toBe(2);
    });
    test('should not make a copy of a card past the end of the table', () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
          Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
          Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1`;
      expect(part2(input)).toBe(7);
    });
    test('should return the total number of scratchcards when given multiple cards with matching numbers', () => {
      let input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
            Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19`;
      expect(part2(input)).toBe(3);

      input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
                Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
                Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1`;
      expect(part2(input)).toBe(7);
    });
    test('should test with AOC 2023 day 4 test input', () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
        Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
        Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
        Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
        Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
        Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
      expect(part2(input)).toBe(30);
    });
    test('should test with AOC 2023 day 4 main data input', () => {
      expect(part2(mainDataInput)).toBe(19499881);
    });
  });
});
