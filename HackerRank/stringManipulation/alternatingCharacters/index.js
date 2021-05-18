function alternatingCharacters(s) {
    // Write your code here
    let strArr = s.split('');
    let char = strArr[0];
    let count = 0;
    for (let i = 1; i < strArr.length; i++) {
        if (char === strArr[i]) {
            count++;
        } else {
            char = strArr[i];
        }
    }
    return count;
}