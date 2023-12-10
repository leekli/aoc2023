const {
  part1,
  convertHandToNums,
  convertHandToType,
} = require('../day7/day7.js');
const mainDataInput = require('../day7/day7-input.js');

describe('AOC 2023 Day 7', () => {
  describe('Part 1', () => {
    test('util convertHandToType: should return an empty string and 0 rank when given empty input', () => {
      const { handType, typeRank } = convertHandToType(``);
      expect(handType).toBe('');
      expect(typeRank).toBe(0);
    });
    test('util convertHandToType: should convert a single hand to a type and rank number for 5 of a kind', () => {
      const { handType, typeRank } = convertHandToType(`AAAAA`);
      expect(handType).toBe('5aK');
      expect(typeRank).toBe(7);
    });
    test('util convertHandToType: should convert a single hand to a type and rank number for 4 of a kind', () => {
      const { handType, typeRank } = convertHandToType(`AA8AA`);
      expect(handType).toBe('4aK');
      expect(typeRank).toBe(6);
    });
    test('util convertHandToType: should convert a single hand to a type and rank number for full house', () => {
      const { handType, typeRank } = convertHandToType(`23332`);
      expect(handType).toBe('Fh');
      expect(typeRank).toBe(5);
    });
    test('util convertHandToType: should convert a single hand to a type and rank number for 3 of a kind', () => {
      const { handType, typeRank } = convertHandToType(`TTT98`);
      expect(handType).toBe('3aK');
      expect(typeRank).toBe(4);
    });
    test('util convertHandToType: should convert a single hand to a type and rank number for two pair', () => {
      const { handType, typeRank } = convertHandToType(`23432`);
      expect(handType).toBe('2p');
      expect(typeRank).toBe(3);
    });
    test('util convertHandToType: should convert a single hand to a type and rank number for one pair', () => {
      const { handType, typeRank } = convertHandToType(`A23A4`);
      expect(handType).toBe('1p');
      expect(typeRank).toBe(2);
    });
    test('util convertHandToType: should convert a single hand to a type and rank number for high card', () => {
      const { handType, typeRank } = convertHandToType(`23456`);
      expect(handType).toBe('Hc');
      expect(typeRank).toBe(1);
    });
    test('util convertHandToNums: should return empty array when given empty input', () => {
      const testHand = ``;
      expect(convertHandToNums(testHand)).toEqual([]);
    });
    test('util convertHandToNums: should convert a single hand to numbers', () => {
      let testHand = `32T3K`;
      expect(convertHandToNums(testHand)).toEqual([2, 1, 9, 2, 12]);

      testHand = `KK677`;
      expect(convertHandToNums(testHand)).toEqual([12, 12, 5, 6, 6]);
    });
    test('should return a number', () => {
      expect(typeof part1('')).toBe('number');
    });
    test('should return 0 when given an empty input', () => {
      expect(part1('')).toBe(0);
    });
    test('should return the total winnings for a single hand and single bet', () => {
      const input = `32T3K 765`;
      expect(part1(input)).toBe(765);
    });
    test('should return the total winnings for a multiple hands with distinct hand types', () => {
      let input = `32T3K 765
        T55J5 684`;
      expect(part1(input)).toBe(2133);

      input = `32T3K 765
      T55J5 684
      AAAAA 245`;
      expect(part1(input)).toBe(2868);
    });
    test('should return the total winnings for 2 hands where they share the same hand type, therefore cards need to be compared to determine rank', () => {
      let input = `KK677 28
              KTJJT 220`;
      expect(part1(input)).toBe(276);

      input = `T55J5 684
            QQQJA 483`;
      expect(part1(input)).toBe(1650);
    });
    test('should work with AOC Day 7 test input', () => {
      let input = `32T3K 765
        T55J5 684
        KK677 28
        KTJJT 220
        QQQJA 483`;
      expect(part1(input)).toBe(6440);
    });
    test('should work with AOC Day 7 main data input', () => {
      expect(part1(mainDataInput)).toBe(0);
    });
  });
  describe('Part 2', () => {});
});
