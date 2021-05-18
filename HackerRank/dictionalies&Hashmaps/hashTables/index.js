function checkMagazine(magazine, note) {
    // Write your code here
    // if (magazine.length < note.length) {
    //     console.log('No');
    //     return;
    // };
    // while (note.length) {
    //     const index = magazine.indexOf(note.splice(0, 1)[0]);
    //     if (index === -1) {
    //         console.log('No');
    //         return;
    //     };
    //     magazine.splice(index, 1);
    // };
    // console.log('Yes');
    // return;

    if (magazine.length < note.length) {
        console.log('No');
        return;
    }

    const mag = magazine;

    for (let word of note) {
        const found = mag.indexOf(word);
        if (found === -1) {
            console.log('No');
            return;
        } else {
            mag.splice(found, 1);
        }
    }
    console.log('Yes');
    return;
}