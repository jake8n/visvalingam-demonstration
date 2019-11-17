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
function simplify(points) {
  if (points.length <= 2) return points
  var areas = points.map(function(point, i) {
    if (i === 0 || i === points.length - 1) return -1
    return calculateArea(points[i - 1], points[i], points[i + 1])
  })
  var areasAscending = areas.slice(1, areas.length - 1).sort(function(a, b) {
    return a - b
  })
  var smallestAreaIndex = areas.indexOf(areasAscending[0])
  return points.filter(function(point, i) {
    return i !== smallestAreaIndex
  })
}

export { calculateArea, simplify }
