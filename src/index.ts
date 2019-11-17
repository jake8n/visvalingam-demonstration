export interface Point {
  x: number
  y: number
}

export function calculateArea(A: Point, B: Point, C: Point): number {
  const { x: Ax, y: Ay } = A
  const { x: Bx, y: By } = B
  const { x: Cx, y: Cy } = C

  const areaDoubled = Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)
  return Math.abs(areaDoubled / 2)
}

export function simplify(points: Point[]): Point[] {
  if (points.length <= 2) return points

  const areas = points.map((point, i) => {
    if (i === 0 || i === points.length - 1) return -1

    return calculateArea(points[i - 1], points[i], points[i + 1])
  })
  const areasAscending = areas.slice(1, areas.length - 1).sort((a, b) => a - b)
  const smallestAreaIndex = areas.indexOf(areasAscending[0])

  return points.filter((point, i) => i !== smallestAreaIndex)
}
