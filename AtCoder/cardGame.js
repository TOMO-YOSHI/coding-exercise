function main(input) {
    let inputedArray = input.split('\n')[1].split(' ')
    inputedArray = inputedArray.sort((a, b) => b - a)
    let alice = 0
    let bob = 0
    for(let i = 0; i < inputedArray.length; i++) {
        if(i % 2 === 0) {
            alice += parseInt(inputedArray[i])
        } else {
            bob += parseInt(inputedArray[i])
        }
    }
    console.log(Math.abs(alice - bob))
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

// const args = "4\n20 18 2 18"

// main(args)