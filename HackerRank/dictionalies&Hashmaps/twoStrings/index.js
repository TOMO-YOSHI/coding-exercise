function twoStrings(s1, s2) {
    // Write your code here
    // console.log('s1', s1);
    // console.log('s2', s2);
    let str1 = s1.split('');
    let str2 = s2.split('');

    str1 = [...new Set(str1)];
    str2 = [...new Set(str2)];

    for (let str1Char of str1) {
        if (str2.includes(str1Char)) {
            return 'YES';
        };
    };

    return 'NO';
}