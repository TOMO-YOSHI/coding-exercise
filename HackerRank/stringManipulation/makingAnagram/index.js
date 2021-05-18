function makeAnagram(a, b) {
    // Write your code here
    // let arrayA = a.split('');
    // let arrayB = b.split('');
    // let count = 0;
    // for (let i = 0; i < arrayA.length; i++) {
    //     if (arrayB.length > 0) {
    //         const index = arrayB.indexOf(arrayA[i]);
    //         if (index === -1) {
    //             count++;
    //         } else {
    //             arrayB.splice(index, 1);
    //         }
    //     } else {
    //         count += arrayA.length - i;
    //         break;
    //     }
    // }
    // return count + arrayB.length;

    let arrayA = a.split('');
    let arrayB = b.split('');
    let counter = 0;

    for (let i = 0; i < arrayA.length; i++) {
        const found = arrayB.indexOf(arrayA[i]);
        if (found === -1) {
            counter++; // the char should be removed from A.
        } else {
            arrayB.splice(found, 1);
        }
    }

    return counter + arrayB.length;
}