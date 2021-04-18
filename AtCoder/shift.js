function main(input){
  let opNum = 0
  let checker = true
  let ints = input.split("\n")[1]
  ints = ints.split(" ")
  for(let i = 0; i < ints.length; i++) {
    ints[i] = parseInt(ints[i])
  }

  while(checker) {
    for  (let i = 0; i < ints.length; i++) {
      if(ints[i] % 2 !== 0) {
        checker = false
        break
      }
      ints[i] = ints[i] / 2
      if (i === ints.length - 1) {
        opNum += 1
      }
    }
  }

  console.log(opNum)
}

// const arg = "8\n382253568 723152896 37802240 379425024 404894720 471526144"

// main(arg)

main(require("fs").readFileSync("/dev/stdin", "utf8"));