const { converter, part1 } = require('../day5/day5');
const mainDataInput = require('../day5/day5-input');

describe.skip('AOC 2023 Day 5', () => {
  describe('Part 1', () => {
    test('util: should convert a small seed-to-soil map to a list of seed numbers and corresponding soil numbers, ensures where a source number isnt mapped is handled and set to same destination number', () => {
      const input = [
        [7, 5, 5],
        [5, 10, 2],
      ];
      const output = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 7,
        6: 8,
        7: 9,
        8: 10,
        9: 11,
        10: 5,
        11: 6,
      };
      expect(converter(input)).toEqual(output);
    });
    test('util: should convert test data from AOC seed-to-soil map to a list of seed numbers and corresponding soil numbers, ensures where a source number isnt mapped is handled and set to same destination number', () => {
      const input = [
        [50, 98, 2],
        [52, 50, 48],
      ];
      const output = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        20: 20,
        21: 21,
        22: 22,
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        29: 29,
        30: 30,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        38: 38,
        39: 39,
        40: 40,
        41: 41,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
        50: 52,
        51: 53,
        52: 54,
        53: 55,
        54: 56,
        55: 57,
        56: 58,
        57: 59,
        58: 60,
        59: 61,
        60: 62,
        61: 63,
        62: 64,
        63: 65,
        64: 66,
        65: 67,
        66: 68,
        67: 69,
        68: 70,
        69: 71,
        70: 72,
        71: 73,
        72: 74,
        73: 75,
        74: 76,
        75: 77,
        76: 78,
        77: 79,
        78: 80,
        79: 81,
        80: 82,
        81: 83,
        82: 84,
        83: 85,
        84: 86,
        85: 87,
        86: 88,
        87: 89,
        88: 90,
        89: 91,
        90: 92,
        91: 93,
        92: 94,
        93: 95,
        94: 96,
        95: 97,
        96: 98,
        97: 99,
        98: 50,
        99: 51,
      };
      expect(converter(input)).toEqual(output);
    });
    test.only('should run AOC day 5 test data', () => {
      const input = `seeds: 79 14 55 13

        seed-to-soil map:
        50 98 2
        52 50 48
        
        soil-to-fertilizer map:
        0 15 37
        37 52 2
        39 0 15
        
        fertilizer-to-water map:
        49 53 8
        0 11 42
        42 0 7
        57 7 4
        
        water-to-light map:
        88 18 7
        18 25 70
        
        light-to-temperature map:
        45 77 23
        81 45 19
        68 64 13
        
        temperature-to-humidity map:
        0 69 1
        1 0 69
        
        humidity-to-location map:
        60 56 37
        56 93 4`;

      expect(part1(input)).toBe(35);
    });
    test('should test with AOC Day 5 main data input', () => {
      expect(part1(mainDataInput)).toBe(35);
    });
  });
  describe('Part 2', () => {});
});
