import { describe, it, expect } from "vitest";
import solutionOne from "../solution-one";

describe("solutionOne", () => {
  it("should return the correct layout", () => {
    const PlateDimension = 96;
    const samples = [["sample 1", "sample 2"]];
    const reagents = [["reagent 1", "reagent 2"]];
    const replicates = [2];

    const result = solutionOne(PlateDimension, samples, reagents, replicates);

    console.log(JSON.stringify(result));
  });
});
