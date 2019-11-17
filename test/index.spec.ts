import { Point, simplify } from '../src/index'

describe('simplify', () => {
  let points: Point[], simplified: Point[]

  describe('shortest input (length=3)', () => {
    beforeAll(() => {
      points = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
      ]
      simplified = simplify(points)
    })

    it('outputs a shorter array than the one inputted', () => {
      expect(simplified.length).toBeLessThan(points.length)
    })

    it('removes the least important coordiate, accordint to the algorithm', () => {
      expect(simplified.indexOf(points[1])).toEqual(-1)
    })
  })
})
