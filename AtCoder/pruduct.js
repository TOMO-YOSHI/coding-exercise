function main(input){
  const inputSt = input.split(" ")
  const a = parseInt(inputSt[0])
  const b = parseInt(inputSt[1])
  const ab = a * b
  let msg = ""
  if(ab % 2 === 0) {
    msg = "Even"
  } else {
    msg = "Odd"
  }
  console.log(msg)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
