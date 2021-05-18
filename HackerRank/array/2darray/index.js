function hourglassSum(arr) {
    // Write your code here
    const sums = [];
    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 4; row++) {
            let sum = 0;
            sum += arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
            sum += arr[row + 1][col + 1];
            sum += arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
            sums.push(sum);
        }
    }
    return Math.max(...sums);
}