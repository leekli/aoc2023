const {
  part1,
  convertHandToNums,
  convertHandToType,
} = require('../day7/day7.js');
const {
  part2,
  convertHandToNumsP2,
  convertHandToTypeP2,
} = require('../day7/day7-p2.js');
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
    test('should take larger data with a range of hands', () => {
      let input = `AAAAA 635
        32T3J 893
        A9942 54
        J57Q8 571
        779TK 931
        69696 457
        Q55Q5 478
        99399 735
        TA756 782
        QQQKQ 838
        QTJJA 995
        J7T7T 8
        22792 790
        588K8 376
        6656T 151
        64725 78
        J65AA 193
        68744 920
        63943 399
        9KQQ9 685
        4K2A9 240`;
      expect(part1(input)).toBe(125927);
    });
    test('should work with AOC Day 7 main data input', () => {
      expect(part1(mainDataInput)).toBe(251545216);
    });
  });
  describe('Part 2', () => {
    test('util convertHandToTypeP2: should return an empty string and 0 rank when given empty input', () => {
      const { handType, typeRank } = convertHandToTypeP2(``);
      expect(handType).toBe('');
      expect(typeRank).toBe(0);
    });
    test('util convertHandToTypeP2: should convert a single hand to a type and rank number for 5 of a kind', () => {
      const { handType, typeRank } = convertHandToTypeP2(`AAAAA`);
      expect(handType).toBe('5aK');
      expect(typeRank).toBe(7);
    });
    test('util convertHandToTypeP2: should convert a single hand to a type and rank number for 4 of a kind', () => {
      const { handType, typeRank } = convertHandToTypeP2(`AA8AA`);
      expect(handType).toBe('4aK');
      expect(typeRank).toBe(6);
    });
    test('util convertHandToTypeP2: should convert a single hand to a type and rank number for full house', () => {
      const { handType, typeRank } = convertHandToTypeP2(`23332`);
      expect(handType).toBe('Fh');
      expect(typeRank).toBe(5);
    });
    test('util convertHandToTypeP2: should convert a single hand to a type and rank number for 3 of a kind', () => {
      const { handType, typeRank } = convertHandToTypeP2(`TTT98`);
      expect(handType).toBe('3aK');
      expect(typeRank).toBe(4);
    });
    test('util convertHandToTypeP2: should convert a single hand to a type and rank number for two pair', () => {
      const { handType, typeRank } = convertHandToTypeP2(`23432`);
      expect(handType).toBe('2p');
      expect(typeRank).toBe(3);
    });
    test('util convertHandToTypeP2: should convert a single hand to a type and rank number for one pair', () => {
      const { handType, typeRank } = convertHandToType(`A23A4`);
      expect(handType).toBe('1p');
      expect(typeRank).toBe(2);
    });
    test('util convertHandToTypeP2: should convert a single hand to a type and rank number for high card', () => {
      const { handType, typeRank } = convertHandToTypeP2(`23456`);
      expect(handType).toBe('Hc');
      expect(typeRank).toBe(1);
    });
    test('util convertHandToTypeP2: should convert a hand to the strongest possible type if it contains a `J` card', () => {
      // Original five of a kind with 5 J cards --> stays 5 of a kind
      let hand = convertHandToTypeP2(`JJJJJ`);
      expect(hand.handType).toBe('5aK');
      expect(hand.typeRank).toBe(7);

      // Original four of a kind with 1 J card --> becomes 5 of a kind
      hand = convertHandToTypeP2(`KKKJK`);
      expect(hand.handType).toBe('5aK');
      expect(hand.typeRank).toBe(7);

      // Original full house with 2 J cards --> becomes 5 of a kind
      hand = convertHandToTypeP2(`KKKJJ`);
      expect(hand.handType).toBe('5aK');
      expect(hand.typeRank).toBe(7);

      // Original 3 of a kind given 1 J card --> becomes 4 of a kind
      hand = convertHandToTypeP2(`TTT9J`);
      expect(hand.handType).toBe('4aK');
      expect(hand.typeRank).toBe(6);

      // Original 3 of a kind given 2 J cards --> becomes 5 of a kind
      hand = convertHandToTypeP2(`TTTJJ`);
      expect(hand.handType).toBe('5aK');
      expect(hand.typeRank).toBe(7);

      // Original 2 pair given 1 J card --> becomes a full house
      hand = convertHandToTypeP2(`23J32`);
      expect(hand.handType).toBe('Fh');
      expect(hand.typeRank).toBe(5);

      // Original 2 pair given 2 J cards --> becomes 4 of a kind
      hand = convertHandToTypeP2(`2J4J2`);
      expect(hand.handType).toBe('4aK');
      expect(hand.typeRank).toBe(6);

      // Original 2 pair given 3 J cards --> becomes 5 of a kind
      hand = convertHandToTypeP2(`2JJJ2`);
      expect(hand.handType).toBe('5aK');
      expect(hand.typeRank).toBe(7);

      // Original 1 pair given 1 J card --> becomes 3 of a kind
      hand = convertHandToTypeP2(`A2JA4`);
      expect(hand.handType).toBe('3aK');
      expect(hand.typeRank).toBe(4);

      // Original 1 pair given 2 J cards --> becomes 3 of a kind
      hand = convertHandToTypeP2(`AJ3AJ`);
      expect(hand.handType).toBe('4aK');
      expect(hand.typeRank).toBe(6);

      // Original 1 pair given 2 J cards --> becomes 3 of a kind
      hand = convertHandToTypeP2(`AJJAJ`);
      expect(hand.handType).toBe('5aK');
      expect(hand.typeRank).toBe(7);
    });
    test('util convertHandToNumsP2: should return empty array when given empty input', () => {
      const testHand = ``;
      expect(convertHandToNumsP2(testHand)).toEqual([]);
    });
    test('util convertHandToNumsP2: should convert a single hand to numbers', () => {
      let testHand = `32T3K`;
      expect(convertHandToNumsP2(testHand)).toEqual([3, 2, 10, 3, 12]);

      testHand = `KK677`;
      expect(convertHandToNumsP2(testHand)).toEqual([12, 12, 6, 7, 7]);

      testHand = `T55J5`;
      expect(convertHandToNumsP2(testHand)).toEqual([10, 5, 5, 1, 5]);
    });
    test('should return a number', () => {
      expect(typeof part2('')).toBe('number');
    });
    test('should return 0 when given an empty input', () => {
      expect(part2('')).toBe(0);
    });
    test('should return the total winnings for a single hand and single bet', () => {
      const input = `32T3K 765`;
      expect(part2(input)).toBe(765);
    });
    test('should return the total winnings for a multiple hands with distinct hand types', () => {
      let input = `32T3K 765
        T55J5 684`;
      expect(part2(input)).toBe(2133);

      input = `32T3K 765
      T55J5 684
      AAAAA 245`;
      expect(part2(input)).toBe(2868);
    });
    test('should return the total winnings for 2 hands where they share the same hand type, therefore cards need to be compared to determine rank', () => {
      let input = `KK677 28
              KTJJT 220`;
      expect(part2(input)).toBe(468);

      input = `T55J5 684
            QQQJA 483`;
      expect(part2(input)).toBe(1650);
    });
    test('should work with AOC Day 7 test input', () => {
      let input = `32T3K 765
        T55J5 684
        KK677 28
        KTJJT 220
        QQQJA 483`;
      expect(part2(input)).toBe(5905);
    });

    // 👇 does not work yet 😭
    test.skip('should work with AOC Day 7 main data input', () => {
      expect(part2(mainDataInput)).toBe(251545216);
    });
  });
});
