function main(input) {
    let inputedPoints = input.split('\n').slice(1).map(points => points.split(' '))
    inputedPoints.pop()
    inputedPoints.unshift([0, 0, 0])
    let msg = 'Yes'
    for(let i = 0; i < inputedPoints.length; i++) {
        if (
            parseInt(inputedPoints[i][0]) < parseInt(inputedPoints[i][1]) + parseInt(inputedPoints[i][2])
            ||
            parseInt(inputedPoints[i][0]) % 2 !== (parseInt(inputedPoints[i][1]) + parseInt(inputedPoints[i][2])) % 2
            )
        {
            msg = 'No'
            break
        }
    }
    console.log(msg)
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

const args = "1\n5 1 1\n100 1 1"
// const args = "2\n3 1 2\n6 1 1"

main(args)

// inputedPoints.array.forEach(el => {
//     if (el[0] > parseInt(el[1]) + parseInt(el[2])) {
//         msg = 'No'
//         break
//     }
// });
