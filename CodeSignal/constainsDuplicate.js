function containsDuplicates(a) {
    const array = [...new Set(a)];
    return array.length === a.length ? false : true;

    // a.sort((x, y)=>x-y);
    // for(let num of a) {
    //     if(a.indexOf(num) !== a.lastIndexOf(num)) {
    //         return true;
    //     }
    // }
    // return false;
}
