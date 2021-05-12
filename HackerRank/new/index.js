function countingValleys(steps, path) {
    // Write your code here
    // let newPath = path.split('').map(el => el === 'U' ? 1 : -1);
    // let count = 0;

    // while (newPath.length > 0) {
    //     let onTravel = parseInt(newPath.splice(0, 1))

    //     if (onTravel === 1) {
    //         while (onTravel !== 0) {
    //             onTravel += parseInt(newPath.splice(0, 1))
    //         }
    //     } else {
    //         while (onTravel !== 0) {
    //             onTravel += parseInt(newPath.splice(0, 1))
    //         }
    //         count++
    //     }
    // }
    // return count;

    let newPath = path.split('').map(el => el === 'U' ? 1 : -1);
    let count = 0;
    let isValley = newPath[0] === -1 ? true : false;
    let onTravel = newPath[0];

    for (let i = 1; i < newPath.length; i++) {
        onTravel += newPath[i];
        if (onTravel === 0 && isValley) {
            count++;
            isValley = newPath[i + 1] === -1 ? true : false;
        } else if (onTravel === 0) {
            isValley = newPath[i + 1] === -1 ? true : false;
        }
    }

    console.log(count);
    return count;
}

countingValleys(8, 'UDDDUDUU')