import type {
  PlateType,
  PlateDimType,
  SamplesType,
  ReagentsType,
  ReplicatesType,
  WellType,
  RowType,
} from "./types";

const getWidthAndHeight = (
  plateDimension: PlateDimType
): { width: number; height: number } => {
  let width = 0;
  let height = 0;

  if (plateDimension === 96) {
    width = 12;
    height = 8;
  } else {
    width = 24;
    height = 16;
  }

  return {
    width,
    height,
  };
};

const createEmptyPlate = (plateDimension: PlateDimType): PlateType => {
  const { width, height } = getWidthAndHeight(plateDimension);

  const row: RowType = new Array<WellType>(width).fill(null);
  const plate = [...new Array<RowType>(height)].map(() => [...row]);

  return plate;
};

const minNumberOfPlates = (
  plateDimension: PlateDimType,
  samples: SamplesType,
  reagents: ReagentsType,
  replicates: ReplicatesType
): number => {
  const experimentCount = samples.length;

  if (experimentCount === 0) return 0;

  let numberOfPlates = 0;

  for (let i = 0; i < experimentCount; i += 1) {
    numberOfPlates += samples[i].length * reagents[i].length * replicates[i];
  }

  numberOfPlates = Math.ceil(numberOfPlates / plateDimension);

  return numberOfPlates;
};

export { getWidthAndHeight, createEmptyPlate, minNumberOfPlates };
