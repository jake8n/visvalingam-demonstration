function getDomain(points, key) {
  var values = points.map(function(point) {
    return point[key]
  })
  return [Math.min.apply(Math, values), Math.max.apply(Math, values)]
}
function scale(value, domain, range) {
  var domainDelta = domain[1] - domain[0]
  var normalized = (value - domain[0]) / domainDelta
  var rangeDelta = range[1] - range[0]
  var scaled = range[0] + rangeDelta * normalized
  return scaled
}
function getScaleFunction(domain, range) {
  return function scaleWithDomainAndRange(value) {
    return scale(value, domain, range)
  }
}
function useChart(canvas, points) {
  var xDomain = getDomain(points, 'x')
  var yDomain = getDomain(points, 'y')
  var xScaleFn = getScaleFunction(xDomain, [0, canvas.width])
  var yScaleFn = getScaleFunction(yDomain, [canvas.height, 0])
  var coordinates = points.map(function(_a) {
    var x = _a.x,
      y = _a.y
    return {
      x: xScaleFn(x),
      y: yScaleFn(y),
    }
  })
  var context = canvas.getContext('2d')
  if (context === null) throw new Error('Canvas context is null')
  context.strokeStyle = 'blue'
  context.beginPath()
  context.moveTo(coordinates[0].x, coordinates[0].y)
  coordinates.forEach(function(_a) {
    var x = _a.x,
      y = _a.y
    context.lineTo(x, y)
  })
  context.stroke()
}
function clearCanvas(canvas) {
  var context = canvas.getContext('2d')
  if (context === null) throw new Error('Canvas context is null')
  context.clearRect(0, 0, canvas.width, canvas.height)
}

export { clearCanvas, useChart }
