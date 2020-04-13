import { calculateArea, Point, simplify } from "../src/simplify";

describe("simplify", () => {
  let points: Point[], simplified: Point[];

  describe("shortest input (length=3)", () => {
    beforeAll(() => {
      points = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ];
      simplified = simplify(points);
    });

    it("outputs a shorter array than the one inputted", () => {
      expect(simplified.length).toBeLessThan(points.length);
    });

    it("removes the least important point, according to the algorithm", () => {
      expect(simplified.indexOf(points[1])).toEqual(-1);
    });

    it("does not simplify when the input is at minimum length", () => {
      expect(simplify(simplified).length).toEqual(simplified.length);
    });
  });

  describe("longer input", () => {
    beforeAll(() => {
      points = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
      ];
      simplified = simplify(points);
    });

    it("removes the first least important point, according to the algorithm", () => {
      expect(simplified.indexOf(points[2])).toEqual(-1);
    });

    it("removes the next least important point when run again", () => {
      expect(simplify(simplified).indexOf(points[1])).toEqual(-1);
    });
  });

  describe("using the second argument", () => {
    beforeAll(() => {
      points = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
      ];
      simplified = simplify(points, 2);
    });

    it("removes the two least important points when 2 is passed as the second argument", () => {
      expect(simplified.length).toEqual(points.length - 2);
    });
  });
});

describe("calculateArea", () => {
  let A: Point, B: Point, C: Point;

  beforeAll(() => {
    A = { x: 0, y: 0 };
    B = { x: 1, y: 0 };
    C = { x: 1, y: 1 };
  });

  it("calculates area between three coordinates", () => {
    expect(calculateArea(A, B, C)).toEqual(0.5);
  });
});
