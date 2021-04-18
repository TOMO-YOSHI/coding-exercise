function main(input) {
    let inputedArr = input.split("\n")[0].split("")

    while(inputedArr.length !== 0) {
        // console.log(inputedArr)
        if (inputedArr[inputedArr.length - 1] === 'r' && inputedArr[inputedArr.length - 3] === 'm') {
            let splicedArray = inputedArr.splice(inputedArr.length - 7)
            splicedArray = splicedArray.join('')
            // console.log(splicedArray)
            if (splicedArray !== "dreamer") {
                console.log('NO')
                return
            }
        }
        else if (inputedArr[inputedArr.length - 1] === 'r' && inputedArr[inputedArr.length - 3] === 's') {
            let splicedArray = inputedArr.splice(inputedArr.length - 6)
            splicedArray = splicedArray.join('')
            // console.log(splicedArray)
            if (splicedArray !== "eraser") {
                console.log('NO')
                return
            }
        }
        else if (inputedArr[inputedArr.length - 1] === 'm') {
            let splicedArray = inputedArr.splice(inputedArr.length - 5)
            splicedArray = splicedArray.join('')
            // console.log(splicedArray)
            if (splicedArray !== "dream") {
                console.log('NO')
                return
            }
        }
        else if (inputedArr[inputedArr.length - 1] === 'e') {
            let splicedArray = inputedArr.splice(inputedArr.length - 5)
            splicedArray = splicedArray.join('')
            // console.log(splicedArray)
            if (splicedArray !== "erase") {
                console.log('NO')
                return
            }
        }
        else {
            console.log('NO')
            return
        }
    }
    console.log('YES')
    return
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))

const args = "dreamer"

main(args)