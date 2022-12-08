import type { PlateType, SolutionType } from "./utils/types";

import {
  minNumberOfPlates,
  createEmptyPlate,
  getWidthAndHeight,
} from "./utils/utils";

const solutionOne: SolutionType = (
  plateDimension,
  samples,
  reagents,
  replicates
) => {
  const minimumNumberOfPlates = minNumberOfPlates(
    plateDimension,
    samples,
    reagents,
    replicates
  );

  const plates = new Array<PlateType>(minimumNumberOfPlates).fill(
    createEmptyPlate(plateDimension)
  );

  const sampleMap: { [key: string]: { replicate: number; reagent: string }[] } =
    {};
  for (let i = 0; i < replicates.length; i++) {
    const experimentSamples = samples[i];
    const experimentReagents = reagents[i];
    const experimentReplicate = replicates[i];
    for (const sample of experimentSamples) {
      if (sampleMap[sample] === undefined) {
        sampleMap[sample] = experimentReagents.map((reagent) => ({
          replicate: experimentReplicate,
          reagent: reagent,
        }));
      } else {
        sampleMap[sample].concat(
          experimentReagents.map((reagent) => ({
            reagent: reagent,
            replicate: experimentReplicate,
          }))
        );
      }
    }
  }

  let i = 0;
  let j = 0;
  let k = 0;

  const { width, height } = getWidthAndHeight(plateDimension);

  Object.keys(sampleMap).forEach((sample) => {
    sampleMap[sample].forEach(({ replicate, reagent }) => {
      let r = 0;
      do {
        if (i === width) {
          j++;
          i = 0;
        }

        if (j === height) {
          k++;
          j = 0;
          i = 0;
        }
        console.log(k, j, i);

        plates[k][j][i] = [sample, reagent];
        i++;
        r++;
      } while (r < replicate);
    });
  });

  return plates;
};

export default solutionOne;
