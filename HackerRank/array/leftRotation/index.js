function rotLeft(a, d) {
    // Write your code here
    const array = a;
    for (let i = 0; i < d; i++) {
        const num = array.shift();
        array.push(num);
    }
    return array;
}