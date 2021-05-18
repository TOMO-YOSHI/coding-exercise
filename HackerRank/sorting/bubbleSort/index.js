function countSwaps(a) {
    // Write your code here

    const array = a;
    let swaps = 0;

    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - j; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
                swaps++;
            }
        }
    }

    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${array[0]}`)
    console.log(`Last Element: ${array[array.length - 1]}`)
    return;
}