export interface Point {
  x: number
  y: number
}

export function simplify(points: Point[]): Point[] {
  return points.splice(1, 1)
}
