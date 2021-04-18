function main(input) {
    const inputArray = input.split("\n")
    let c500 = inputArray[0] // 1 + 10 = 11
    let used500 = 0
    let c100 = inputArray[1] // 2
    let used100 = 0
    let c50 = inputArray[2] // 1
    let used50 = 0
    let total = inputArray[3]

    while(total >= 500 && c500 > 0) {
        total -= 500
        c500 -= 1
        used500 += 1
    }
    while(total >= 100 && c100 > 0) {
        total -= 100
        c100 -= 1
        used100 += 1
    }
    while(total >= 50 && c50 > 0) {
        total -= 50
        c50 -= 1
        used50 += 1
    }

    if(total === 0) {
        const ans = used500 * 11 + used100 * 2
        console.log(ans)
    }
    console.log(0)
    
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

const args = "5\n1\n0\n150"

main(args)

// console.log(213/12)
