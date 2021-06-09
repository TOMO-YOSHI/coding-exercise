function areFollowingPatterns(strings, patterns) {
    const hash = {}

    for (let i = 0; i < strings.length; i++) {
        if (!hash[patterns[i]]) {
            hash[patterns[i]] = strings[i]
        } else {
            if (hash[patterns[i]] !== strings[i]) return false
        }
    }

    const checkerArr = []
    for (let key in hash) {
        if (checkerArr.includes(hash[key])) return false
        checkerArr.push(hash[key])
    }

    return true

    // ****************
    // const pairs = {};

    // for(let i = 0; i < patterns.length; i++) {

    //     if(!pairs[patterns[i]]) {

    //         for(let key in pairs) {
    //             if(pairs[key] === strings[i] && key !== patterns[i]) {
    //                 return false;
    //             }
    //         }
    //         pairs[patterns[i]] = strings[i];

    //     } else if (pairs[patterns[i]]) {

    //         if(pairs[patterns[i]] !== strings[i]) {
    //             return false;
    //         }

    //     }
    // }
    // return true;
}
