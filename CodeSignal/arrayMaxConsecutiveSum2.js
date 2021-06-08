async function arrayMaxConsecutiveSum2(inputArray) {

    let maxSum = null;
    let partialSum = 0;

    for (let item of inputArray) { // for each item of arr
        partialSum += item; // add it to partialSum
        console.log(partialSum)
        if (maxSum === null) {
            maxSum = partialSum
        }
        else {
            maxSum = maxSum > partialSum ? maxSum : partialSum
            // maxSum = Math.max(maxSum, partialSum)
        } // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;

    // let prevSum
    // let currentMax = inputArray[0]
    // for(let i = 0; i < inputArray.length; i++) {
    //     prevSum = inputArray[i]
    //     if(prevSum > currentMax) currentMax = prevSum    
    //     for(let j = i + 1; j < inputArray.length; j++) {
    //         if(prevSum + inputArray[j] > currentMax) {
    //             currentMax = prevSum + inputArray[j]
    //         }
    //         prevSum = prevSum + inputArray[j]
    //     }
    // } 
    // return currentMax

    // let tmpArray = []
    // let currentMax = inputArray[0]
    // for(let i = 0; i < inputArray.length; i++) {
    //     // tmpArray.push(inputArray[i])
    //     tmpArray[0] = inputArray[i]
    //     for(let j = i + 1; j < inputArray.length; j++) {
    //         tmpArray.push(tmpArray[tmpArray.length - 1] + inputArray[j])
    //     }
    //     const tmpMax = Math.max(...tmpArray)
    //     if(tmpMax > currentMax) currentMax = tmpMax
    //     tmpArray = []
    // }   
    // return currentMax


    // let tmpArray = []
    // let sums = []
    // for(let i = 0; i < inputArray.length; i++) {
    //     tmpArray.push(inputArray[i])
    //     for(let j = i + 1; j < inputArray.length; j++) {
    //         tmpArray.push(tmpArray[tmpArray.length - 1] + inputArray[j])
    //     }
    //     sums = [...sums, ...tmpArray]
    //     tmpArray = []
    // }
    // return Math.max(...sums)

    // let max = inputArray[0]
    // let blank
    // let nums = []
    // for(let i = 1; i < inputArray.length; i++) {
    //     if(inputArray[i] > max && max < 0) {
    //         max = inputArray[i]
    //     } else if(inputArray[i] > 0 && max >= 0) {
    //         if(blank) {
    //             nums.push(max)
    //             max = inputArray[i]
    //         } else {
    //             max += inputArray[i]
    //         }
    //     } else {
    //         blank = true
    //     }
    // }

    // return nums.length > 0 ? Math.max(...nums) : max
}
