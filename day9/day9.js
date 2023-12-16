const solve = (input) => {
  if (input.length === 0) return 0;

  // Format input data into nested arrays of nums
  const firstSequencesDataSet = input.split('\n').map((line) => {
    const splitNums = line.split(' ').map((num) => Number(num));

    return splitNums;
  });

  // Hold all the info on history datasets in an object
  const historyDataSets = {};

  // Populare the historyDataSets object with the inital sequences
  firstSequencesDataSet.forEach((dataSet, i) => {
    historyDataSets[i] = {};
    historyDataSets[i].sequences = [[...dataSet]];
  });

  // Start working through a histories sequence(s) to get the step differences, and keep looping this until all sequences are all 0 in the final array
  for (const dataSet in historyDataSets) {
    const currentSequences = historyDataSets[dataSet].sequences;
    let finalSequence = currentSequences[currentSequences.length - 1];

    while (!finalSequence.every((num) => num === 0)) {
      let currentWorkngSequence = currentSequences[currentSequences.length - 1];
      const stepDifferences = findDifferencesBetweenStep(currentWorkngSequence);

      currentSequences.push(stepDifferences);

      currentWorkngSequence = currentSequences[currentSequences.length - 1];
      finalSequence = currentSequences[currentSequences.length - 1];
    }
  }

  let p1Total = part1(historyDataSets);
  let p2Total = part2(historyDataSets);

  return { p1Total, p2Total };
};

const part1 = (input) => {
  const historyDataSets = structuredClone(input);
  let total = 0;

  // Now add a placeholder to the end of each sequence, to be replaced later with actual values
  for (const dataSet in historyDataSets) {
    const currentSequences = historyDataSets[dataSet].sequences;

    currentSequences.forEach((sequence) => sequence.push('X'));
  }

  // Now work from the botttom up in sequences, fill in place holders
  for (const dataSet in historyDataSets) {
    const currentSequences = historyDataSets[dataSet].sequences;

    for (let i = currentSequences.length - 1; i >= 0; i--) {
      const allNumsBeforePlaceHolderIdentical = currentSequences[i]
        .slice(0, -1)
        .every(() => {});

      if (i === currentSequences.length - 1)
        currentSequences[i][currentSequences[i].length - 1] = 0;

      if (allNumsBeforePlaceHolderIdentical)
        currentSequences[i][currentSequences[i].length - 1] =
          currentSequences[i][currentSequences[i].length - 2];

      if (
        !allNumsBeforePlaceHolderIdentical &&
        i !== currentSequences.length - 1
      )
        currentSequences[i][currentSequences[i].length - 1] =
          currentSequences[i][currentSequences[i].length - 2] +
          currentSequences[i + 1][currentSequences[i + 1].length - 1];
    }
  }

  // Now grab each of the last digit predictions and add them up
  for (const dataSet in historyDataSets) {
    const firstSequence = historyDataSets[dataSet].sequences[0];
    const predictionNum = firstSequence[firstSequence.length - 1];

    total += predictionNum;
  }

  return total;
};

const part2 = (input) => {
  const historyDataSets = structuredClone(input);
  let total = 0;

  for (const dataSet in historyDataSets) {
    const currentSequences = historyDataSets[dataSet].sequences;

    currentSequences.forEach((sequence) => sequence.unshift('X'));
  }

  for (const dataSet in historyDataSets) {
    const currentSequences = historyDataSets[dataSet].sequences;

    for (let i = currentSequences.length - 1; i >= 0; i--) {
      const numsWithPlaceholderRemoved = currentSequences[i].slice(1);
      const everyNumSame = numsWithPlaceholderRemoved.every(
        (num) => num === numsWithPlaceholderRemoved[0]
      );

      if (i === currentSequences.length - 1) currentSequences[i][0] = 0;

      if (everyNumSame) currentSequences[i][0] = currentSequences[i][1];

      if (!everyNumSame && i !== currentSequences.length - 1)
        currentSequences[i][0] =
          currentSequences[i][1] - currentSequences[i + 1][0];
    }
  }

  for (const dataSet in historyDataSets) {
    const firstSequence = historyDataSets[dataSet].sequences[0];
    const predictionNum = firstSequence[0];

    total += predictionNum;
  }

  return total;
};

const findDifferencesBetweenStep = (steps) => {
  const stepDifferences = [];

  for (let i = 1; i < steps.length; i++) {
    const diff = steps[i] - steps[i - 1];
    stepDifferences.push(diff);
  }

  return stepDifferences;
};

module.exports = { solve, findDifferencesBetweenStep };
