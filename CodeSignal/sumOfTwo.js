function sumOfTwo(a, b, v) {
    a = new Set(a);
    b = new Set(b);

    for (let num of a) {
        if (b.has(v - num)) {
            return true
        }
    }

    return false
}