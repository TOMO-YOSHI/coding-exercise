function main (input) {
  const inputArray = input.split("")
  const result = inputArray.filter(num => num === "1").length
  console.log(result)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));