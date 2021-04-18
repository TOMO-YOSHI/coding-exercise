function welcome(input) {

  let inputArray = input.split('\n')
  let tmp = inputArray[1].split(' ')
  const a = parseInt(inputArray[0])
  const b = parseInt(tmp[0])
  const c = parseInt(tmp[1])
  const s = inputArray[2]

  console.log(a + b + c + " " + s);
}

welcome(require("fs").readFileSync("/dev/stdin", "utf8"));

// let data = "1\n2 3\ntest"

// console.log(welcome(data))