import { describe, it, expect } from "vitest";
import solutionOne from "../solution-one";

describe("solutionOne", () => {
  describe("with one simple experiment", () => {
    it("should contain the correct number of plates", () => {
      const PlateDimension = 96;
      const samples = [["sample 1", "sample 2"]];
      const reagents = [["reagent 1", "reagent 2"]];
      const replicates = [2];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect(result.length).toBe(1);
    });

    it("should contain the correct number of empty wells", () => {
      const PlateDimension = 96;
      const samples = [["sample 1", "sample 2"]];
      const reagents = [["reagent 1", "reagent 2"]];
      const replicates = [2];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect(result.flat(3).filter((well) => well === null).length).toBe(
        96 - 8
      );
    });

    it("should contain plates with the correct dimension", () => {
      const PlateDimension = 96;
      const samples = [["sample 1", "sample 2"]];
      const reagents = [["reagent 1", "reagent 2"]];
      const replicates = [2];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect([result[0].length, result[0][0].length]).toEqual([8, 12]);
    });

    it("should return an array of plates with the correct content", () => {
      const PlateDimension = 96;
      const samples = [["sample 1", "sample 2"]];
      const reagents = [["reagent 1", "reagent 2"]];
      const replicates = [2];
      const expected = [
        [
          [
            ["sample 1", "reagent 1"],
            ["sample 1", "reagent 1"],
            ["sample 1", "reagent 2"],
            ["sample 1", "reagent 2"],
            ["sample 2", "reagent 1"],
            ["sample 2", "reagent 1"],
            ["sample 2", "reagent 2"],
            ["sample 2", "reagent 2"],
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
        ],
      ];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      result.forEach((plate, plateIndex) => {
        plate.forEach((row, rowIndex) => {
          expect(row).toEqual(expected[plateIndex][rowIndex]);
        });
      });
    });
  });

  describe("with two experiments", () => {
    it("should contain the correct number of plates", () => {
      const PlateDimension = 384;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
      ];
      const replicates = [1, 3];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect(result.length).toBe(1);
    });

    it("should contain the correct number of empty wells", () => {
      const PlateDimension = 384;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
      ];
      const replicates = [1, 3];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect(result.flat(3).filter((well) => well === null).length).toBe(
        PlateDimension - 24
      );
    });

    it("should contain plates with the correct dimension", () => {
      const PlateDimension = 384;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
      ];
      const replicates = [1, 3];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect([result[0].length, result[0][0].length]).toEqual([16, 24]);
    });

    it("should return an array of plates with the correct content", () => {
      const PlateDimension = 384;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
      ];
      const replicates = [1, 3];
      const expected = [
        [
          [
            ["Sam 1", "Reag X"],
            ["Sam 1", "Reag Y"],
            ["Sam 1", "Reag Y"],
            ["Sam 1", "Reag Y"],
            ["Sam 1", "Reag Y"],
            ["Sam 1", "Reag Z"],
            ["Sam 1", "Reag Z"],
            ["Sam 1", "Reag Z"],
            ["Sam 2", "Reag X"],
            ["Sam 2", "Reag Y"],
            ["Sam 3", "Reag X"],
            ["Sam 3", "Reag Y"],
            ["Sam 3", "Reag Y"],
            ["Sam 3", "Reag Y"],
            ["Sam 3", "Reag Y"],
            ["Sam 3", "Reag Z"],
            ["Sam 3", "Reag Z"],
            ["Sam 3", "Reag Z"],
            ["Sam 4", "Reag Y"],
            ["Sam 4", "Reag Y"],
            ["Sam 4", "Reag Y"],
            ["Sam 4", "Reag Z"],
            ["Sam 4", "Reag Z"],
            ["Sam 4", "Reag Z"],
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
        ],
      ];
      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      result.forEach((plate, plateIndex) => {
        plate.forEach((row, rowIndex) => {
          expect(row).toEqual(expected[plateIndex][rowIndex]);
        });
      });
    });
  });
});
