function maximumToys(prices, k) {
    // Write your code here
    let budget = k;
    let count = 0;
    let toys = prices;

    while (budget > 0) {
        const min = Math.min(...toys);
        toys.splice(toys.indexOf(min), 1);
        budget -= min;
        count++;
    }

    return count - 1;
}