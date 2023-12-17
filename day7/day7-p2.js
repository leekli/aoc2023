const part2 = (input) => {
  if (input.length === 0) return 0;

  const parsedInput = input
    .split('\n')
    .map((line) => line.trim())
    .map((line) => line.split(' '));

  const handsInfoObj = [];

  for (let i = 0; i < parsedInput.length; i++) {
    const { handType, typeRank } = convertHandToTypeP2(parsedInput[i][0]);

    handsInfoObj.push({});

    handsInfoObj[i].hand = parsedInput[i][0];
    handsInfoObj[i].bid = Number(parsedInput[i][1]);
    handsInfoObj[i].handConvToNum = convertHandToNumsP2(parsedInput[i][0]);
    handsInfoObj[i].handType = handType;
    handsInfoObj[i].handTypeRank = typeRank;
    handsInfoObj[i].rank = 0;
  }

  let total = 0;

  // Order the hands by the strength of the hand type ranking
  const orderHandsByStrength = handsInfoObj.sort(
    (a, b) => b.handTypeRank - a.handTypeRank
  );

  // 👇 a bit brute force, sorry! 👇

  // Now go through the ranked types and check if any are the same, then conduct the card-by-card check
  let handSortCount = 1000;

  while (handSortCount !== 0) {
    for (let i = 0; i < orderHandsByStrength.length; i++) {
      if (orderHandsByStrength[i + 1] !== undefined) {
        if (
          orderHandsByStrength[i].handTypeRank ===
          orderHandsByStrength[i + 1].handTypeRank
        ) {
          for (let j = 0; j < 5; j++) {
            const currHandCard = orderHandsByStrength[i].handConvToNum[j];
            const nextHandCard = orderHandsByStrength[i + 1].handConvToNum[j];

            // Check if cards are not equal before comparing and swapping
            if (currHandCard !== nextHandCard) {
              if (currHandCard > nextHandCard) {
                break;
              } else if (nextHandCard > currHandCard) {
                const currHandTmp = orderHandsByStrength[i];
                const nextHandTmp = orderHandsByStrength[i + 1];
                orderHandsByStrength[i] = nextHandTmp;
                orderHandsByStrength[i + 1] = currHandTmp;
                break;
              }
            }
          }
        }
      }
    }
    handSortCount--;
  }

  orderHandsByStrength.forEach(
    (hand, index) => (hand.rank = orderHandsByStrength.length - index)
  );

  // Now total up the ranks by multiplying the bid and the rank number, add to 'total'
  orderHandsByStrength.forEach((hand) => (total += hand.bid * hand.rank));

  return total;
};

const convertHandToTypeP2 = (hand) => {
  let handType = '';
  let typeRank = 0;

  const typeRankLookup = {
    '5aK': 7,
    '4aK': 6,
    Fh: 5,
    '3aK': 4,
    '2p': 3,
    '1p': 2,
    Hc: 1,
  };

  const handCardCount = {};

  hand.split('').forEach((card) => {
    if (!handCardCount.hasOwnProperty(card)) handCardCount[card] = 0;

    handCardCount[card]++;
  });

  const cardNumsSorted = Object.values(handCardCount).sort((a, b) => b - a);

  if (cardNumsSorted.length === 1) {
    handType = `5aK`;
    typeRank = typeRankLookup[handType];
  } else if (cardNumsSorted.length === 2) {
    if (cardNumsSorted[0] === 4 && cardNumsSorted[1] === 1) {
      handType = `4aK`;
    } else if (cardNumsSorted[0] === 3 && cardNumsSorted[1] === 2) {
      handType = `Fh`;
    }
    typeRank = typeRankLookup[handType];
  } else if (cardNumsSorted.length === 3) {
    if (
      cardNumsSorted[0] === 3 &&
      cardNumsSorted[1] === 1 &&
      cardNumsSorted[2] === 1
    ) {
      handType = `3aK`;
    } else if (
      cardNumsSorted[0] === 2 &&
      cardNumsSorted[1] === 2 &&
      cardNumsSorted[2] === 1
    ) {
      handType = `2p`;
    }
    typeRank = typeRankLookup[handType];
  } else if (cardNumsSorted.length === 4) {
    if (
      cardNumsSorted[0] === 2 &&
      cardNumsSorted[1] === 1 &&
      cardNumsSorted[2] === 1 &&
      cardNumsSorted[3] === 1
    ) {
      handType = `1p`;
    }
    typeRank = typeRankLookup[handType];
  } else if (cardNumsSorted.length === 5) {
    handType = `Hc`;
    typeRank = typeRankLookup[handType];
  }

  // Now check the Joker cards and make amendment to hand if needed
  const jokerCards = hand.split('').filter((card) => card === 'J').length;

  if (handType === '4aK') {
    if (jokerCards === 1) {
      handType = '5aK';
      typeRank = typeRankLookup[handType];
    }
  }

  if (handType === '3aK') {
    if (jokerCards === 1) {
      handType = '4aK';
      typeRank = typeRankLookup[handType];
    }
  }

  if (handType === '2p') {
    if (jokerCards === 1) {
      handType = '3aK';
      typeRank = typeRankLookup[handType];
    }
    if (jokerCards === 2) {
      handType = '4aK';
      typeRank = typeRankLookup[handType];
    }
  }

  if (handType === '1p') {
    if (jokerCards === 1) {
      handType = '3aK';
      typeRank = typeRankLookup[handType];
    }
  }

  if (handType === 'Hc') {
    if (jokerCards === 1) {
      handType = '1p';
      typeRank = typeRankLookup[handType];
    }
  }

  return { handType, typeRank };
};

const convertHandToNumsP2 = (hand) => {
  const handToNumLookup = {
    A: 13,
    K: 12,
    Q: 11,
    T: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
    J: 1,
  };

  const handToNumArr = hand.split('').map((card) => handToNumLookup[card]);

  return handToNumArr;
};

module.exports = { part2, convertHandToNumsP2, convertHandToTypeP2 };
