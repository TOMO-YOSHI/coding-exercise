function welcome(a, b, c, s) {
  let error = false
  let msg = ""

  if (a < 1 || a > 1000 || b < 1 || b > 1000 || c < 1 || c > 1000) {
    msg += "Invalid number inputed! "
    error = true
  }

  if ( !s.length || s.length > 100) {
    msg += "Invalid string inputed!"
    error = true
  }

  if(error) {
    return msg
  }

  return a + b + c + " " + s;
}

console.log(welcome(1, 2, 3, "test"));