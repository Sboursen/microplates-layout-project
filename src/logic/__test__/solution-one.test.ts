import { describe, it, expect } from "vitest";
import solutionOne from "../solution-one";

describe("solutionOne", () => {
  describe.skip("with one simple experiment", () => {
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

  describe.skip("with two experiments", () => {
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

  describe.skip("with a lot of experiments giving multiple rows", () => {
    it("should contain the correct number of plates", () => {
      const PlateDimension = 96;
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
      const PlateDimension = 96;
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
      const PlateDimension = 96;
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

      expect([result[0].length, result[0][0].length]).toEqual([8, 12]);
    });

    it("should return an array of plates with the correct content", () => {
      const PlateDimension = 96;
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
          ],
          [
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
      console.log(result[0].slice(0, 4));

      result.forEach((plate, plateIndex) => {
        plate.forEach((row, rowIndex) => {
          expect(row).toEqual(expected[plateIndex][rowIndex]);
        });
      });
    });
  });

  describe("with a lot of experiments giving multiple plates", () => {
    it("should contain the correct number of plates", () => {
      const PlateDimension = 96;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
        ["Sam 4", "Sam 5"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
        ["Reag X", "Reag Y", "Reag Z"],
      ];
      const replicates = [10, 5, 3];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect(result.length).toBe(2);
    });

    it("should contain the correct number of empty wells", () => {
      const PlateDimension = 96;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
        ["Sam 4", "Sam 5"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
        ["Reag X", "Reag Y", "Reag Z"],
      ];
      const replicates = [10, 5, 3];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);
      console.log(JSON.stringify(result));
      expect(result.flat(2).filter((well) => well === null).length).toBe(
        PlateDimension * 2 - 108
      );
    });

    it("should contain plates with the correct dimension", () => {
      const PlateDimension = 96;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
        ["Sam 4", "Sam 5"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
        ["Reag X", "Reag Y", "Reag Z"],
      ];
      const replicates = [10, 5, 3];

      const result = solutionOne(PlateDimension, samples, reagents, replicates);

      expect([result[0].length, result[0][0].length]).toEqual([8, 12]);
    });

    it.skip("should return an array of plates with the correct content", () => {
      const PlateDimension = 96;
      const samples = [
        ["Sam 1", "Sam 2", "Sam 3"],
        ["Sam 1", "Sam 3", "Sam 4"],
        ["Sam 4", "Sam 5"],
      ];
      const reagents = [
        ["Reag X", "Reag Y"],
        ["Reag Y", "Reag Z"],
        ["Reag X", "Reag Y", "Reag Z"],
      ];
      const replicates = [10, 5, 3];
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
          ],
          [
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
      console.log(result[0].slice(0, 4));

      result.forEach((plate, plateIndex) => {
        plate.forEach((row, rowIndex) => {
          expect(row).toEqual(expected[plateIndex][rowIndex]);
        });
      });
    });
  });
});
