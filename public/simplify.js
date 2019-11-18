function calculateArea(A, B, C) {
  var Ax = A.x,
    Ay = A.y
  var Bx = B.x,
    By = B.y
  var Cx = C.x,
    Cy = C.y
  var areaDoubled = Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)
  return Math.abs(areaDoubled / 2)
}
function simplify(points, amount) {
  if (amount === void 0) {
    amount = 1
  }
  if (points.length - amount < 2 || amount <= 0)
    return points.map(function(_a) {
      var x = _a.x,
        y = _a.y
      return { x: x, y: y }
    })
  var areas = points.map(function(point, i) {
    if (i === 0 || i === points.length - 1) {
      point.area = -1
      return point
    }
    point.area = calculateArea(points[i - 1], points[i], points[i + 1])
    return point
  })
  var areasAscending = areas.sort(function(a, b) {
    return a.area && b.area ? a.area - b.area : 0
  })
  areasAscending.splice(2, amount)
  areasAscending.sort(function(a, b) {
    return b.x - a.x
  })
  return areasAscending.map(function(_a) {
    var x = _a.x,
      y = _a.y
    return { x: x, y: y }
  })
}

export { calculateArea, simplify }
