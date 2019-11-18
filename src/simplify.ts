export interface Point {
  x: number
  y: number
  area?: number
}

export function calculateArea(A: Point, B: Point, C: Point): number {
  const { x: Ax, y: Ay } = A
  const { x: Bx, y: By } = B
  const { x: Cx, y: Cy } = C

  const areaDoubled = Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)
  return Math.abs(areaDoubled / 2)
}

export function simplify(points: Point[], amount: number = 1): Point[] {
  if (points.length - amount < 2 || amount <= 0) return points

  const areas = points.map((point, i) => {
    if (i === 0 || i === points.length - 1) {
      point.area = -1
      return point
    }

    point.area = calculateArea(points[i - 1], points[i], points[i + 1])
    return point
  })

  const areasAscending = areas.sort((a, b) =>
    a.area && b.area ? a.area - b.area : 0
  )

  areasAscending.splice(2, amount)
  areasAscending.sort((a, b) => b.x - a.x)

  return areasAscending.map(({ x, y }) => ({ x, y }))
}
