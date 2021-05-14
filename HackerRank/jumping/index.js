function jumpingOnClouds(c) {
    // Write your code here
    let i = 0;
    let steps = 0;
    while (i < c.length - 1) {

        if (c[i + 2] === 0) {
            i += 2;
        } else if (c[i + 1] === 0) {
            i += 1;
        }

        steps += 1;
    }
    return steps;
}
console.log(
jumpingOnClouds([
    0, 0, 1, 0,
    0, 1, 0
]))