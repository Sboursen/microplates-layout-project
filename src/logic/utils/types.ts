export type WellType = [string, string] | null;
export type RowType = WellType[];
export type PlateType = RowType[];
export type PlateDimType = 96 | 384;
export type SamplesType = string[][];
export type ReagentsType = string[][];
export type ReplicatesType = number[];

export type SolutionType = (
  plateDimension: PlateDimType,
  samples: SamplesType,
  reagents: ReagentsType,
  replicates: ReplicatesType
) => PlateType[];
