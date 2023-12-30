const part1 = (input) => {
  const { formattedSeeds, formattedMaps } = parseInput(input);

  const [
    seedToSoil,
    soilToFertilizer,
    fertilizerToWater,
    waterToLight,
    lightToTemp,
    tempToHumidity,
    humidityToLocation,
  ] = formattedMaps;

  let lowestLocationNum = Infinity;

  const seedToSoilConvertedToLoc = converter(seedToSoil);
  const soilToFertilizerConvertedToLoc = converter(soilToFertilizer);
  const fertilizerToWaterConvertedToLoc = converter(fertilizerToWater);
  const waterToLightConvertedToLoc = converter(waterToLight);
  const lightToTempConvertedToLoc = converter(lightToTemp);
  const tempToHumidityConvertedToLoc = converter(tempToHumidity);
  const humidityToLocationConvertedToLoc = converter(humidityToLocation);

  for (let i = 0; i < formattedSeeds.length; i++) {
    const currentSeedNum = formattedSeeds[i];
    const soilLocNum =
      seedToSoilConvertedToLoc[currentSeedNum] !== undefined
        ? seedToSoilConvertedToLoc[currentSeedNum]
        : currentSeedNum;
    const fertilizerLocNum =
      soilToFertilizerConvertedToLoc[soilLocNum] !== undefined
        ? soilToFertilizerConvertedToLoc[soilLocNum]
        : soilLocNum;
    const waterLocNum =
      fertilizerToWaterConvertedToLoc[fertilizerLocNum] !== undefined
        ? fertilizerToWaterConvertedToLoc[fertilizerLocNum]
        : fertilizerLocNum;
    const lightLocNum =
      waterToLightConvertedToLoc[waterLocNum] !== undefined
        ? waterToLightConvertedToLoc[waterLocNum]
        : waterLocNum;
    const tempLocNum =
      lightToTempConvertedToLoc[lightLocNum] !== undefined
        ? lightToTempConvertedToLoc[lightLocNum]
        : lightLocNum;
    const humidityLocNum =
      tempToHumidityConvertedToLoc[tempLocNum] !== undefined
        ? tempToHumidityConvertedToLoc[tempLocNum]
        : tempLocNum;
    const finalLocNum =
      humidityToLocationConvertedToLoc[humidityLocNum] !== undefined
        ? humidityToLocationConvertedToLoc[humidityLocNum]
        : humidityLocNum;

    if (finalLocNum < lowestLocationNum) lowestLocationNum = finalLocNum;
  }

  return lowestLocationNum;
};

const parseInput = (input) => {
  const formattedSeeds = input
    .replace(/\n/g, '')
    .match(/seeds: ([\d\s]+)/)[1]
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((x) => +x);

  const splitInput = input
    .trim()
    .split('\n\n')
    .map((line) => line.trim())
    .join('\n');

  const formattedMaps = splitInput
    .replace('seed-to-soil map:\n', '')
    .split(/\n+[a-z\-]+ map:\n/)
    .map((line) =>
      line.split(/\n/).map((line) => line.split(' ').map((num) => Number(num)))
    );

  formattedMaps[0].shift();

  return { formattedSeeds, formattedMaps };
};

const converter = (map) => {
  const convertedMap = {};

  for (let i = 0; i < map.length; i++) {
    let destRangeStart = map[i][0];
    let sourceRangeStart = map[i][1];
    const rangeLength = map[i][2];

    for (let j = 0; j < rangeLength; j++) {
      convertedMap[sourceRangeStart + j] = destRangeStart + j;
    }
  }

  return convertedMap;
};

module.exports = { converter, part1 };
