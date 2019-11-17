interface Point {
  x: number
  y: number
}

type Domain = [number, number]
type Range = [number, number]

function getDomain(points: Point[], key: 'x' | 'y'): Domain {
  const values = points.map(point => point[key])

  return [Math.min(...values), Math.max(...values)]
}

function scale(value: number, domain: Range, range: Range): number {
  const domainDelta = domain[1] - domain[0]
  const normalized = (value - domain[0]) / domainDelta
  const rangeDelta = range[1] - range[0]
  const scaled = range[0] + rangeDelta * normalized

  return scaled
}

function getScaleFunction(domain: Domain, range: Range): Function {
  return function scaleWithDomainAndRange(value: number): number {
    return scale(value, domain, range)
  }
}

export function useChart(canvas: HTMLCanvasElement, points: Point[]): void {
  const xDomain = getDomain(points, 'x')
  const yDomain = getDomain(points, 'y')

  const xScaleFn = getScaleFunction(xDomain, [0, canvas.width])
  const yScaleFn = getScaleFunction(yDomain, [canvas.height, 0])

  const coordinates = points.map(({ x, y }) => ({
    x: xScaleFn(x),
    y: yScaleFn(y),
  }))

  const context = canvas.getContext('2d')

  if (context === null) throw new Error('Canvas context is null')

  context.strokeStyle = 'blue'

  context.beginPath()
  context.moveTo(coordinates[0].x, coordinates[0].y)
  coordinates.forEach(({ x, y }) => {
    context.lineTo(x, y)
  })

  context.stroke()
}

export function clearCanvas(canvas: HTMLCanvasElement): void {
  const context = canvas.getContext('2d')

  if (context === null) throw new Error('Canvas context is null')

  context.clearRect(0, 0, canvas.width, canvas.height)
}
