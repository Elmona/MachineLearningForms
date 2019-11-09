
let xTravelled = 0
let yTravelled = 0
let prevX
let prevY

const distance = e => {
  prevY && (yTravelled += Math.abs(e.pageY - prevY))
  prevX && (xTravelled += Math.abs(e.pageX - prevX))

  prevX = e.pageX
  prevY = e.pageY

  return yTravelled + xTravelled
}

export default distance