function main(input) {
    const inputArray = input.split(" ")
    const n = inputArray[0]
    const a = inputArray[1]
    const b = inputArray[2]
    let sum = 0

    for(let i = 1; i <= n; i++) {
        let convertedNum = i;
        if(i > 9) {
            convertedNum = i.toString().split("")
            convertedNum = convertedNum.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        }
        if(convertedNum >= a && convertedNum <= b) {
            sum += i
        }
    }

    console.log(sum)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

// const args = "100 4 16"

// main(args)