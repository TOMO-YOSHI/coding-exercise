function minimumAbsoluteDifference(arr) {
    // Write your code here
    // const inputArr = arr.sort((a, b) => a - b);
    // let smallestDif = null;

    // for (let i = 0; i < inputArr.length - 1; i++) {
    //     const dif = Math.abs(inputArr[i] - inputArr[i + 1]);
    //     if (smallestDif === null) {
    //         smallestDif = dif;
    //     } else {
    //         smallestDif > dif ? smallestDif = dif : null;
    //     }
    // }
    // return smallestDif;

    const array = arr.sort((a, b) => a - b);
    let minDif = Math.abs(array[0] - array[1]);

    for (let i = 1; i < array.length - 1; i++) {
        const dif = Math.abs(array[i] - array[i + 1]);
        if (dif < minDif) {
            minDif = dif;
        }
    }

    return minDif;
}