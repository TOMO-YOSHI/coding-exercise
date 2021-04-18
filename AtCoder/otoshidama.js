function main(input) {
    const n = parseInt(input.split(' ')[0])
    const y = parseInt(input.split(' ')[1])
    
    for(let i = n; i >= 0; i--) {
        for (let j = n - i; j >= 0; j--) {
            let k = n - i - j
            if(i + j + k === n && i * 10000 + j * 5000 + k * 1000 === y && k >= 0) {
                console.log(i, j, k)
                return
            }
        }
    }
    console.log(-1, -1, -1)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

// const args = "9 45000"
const args = "20 196000"

main(args)


// function main(input) {
//     const n = parseInt(input.split(' ')[0])
//     const y = parseInt(input.split(' ')[1])

//     for (let i = 0; i <= n; i--) {
//         for (let j = 0; j <= n - i; j--) {
//             let k = n - i - j
//             if (i + j + k === n && i * 10000 + j * 5000 + k * 1000 === y && k >= 0) {
//                 console.log(i, j, k)
//                 return
//             }
//         }
//     }
//     console.log(-1, -1, -1)
// }

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
