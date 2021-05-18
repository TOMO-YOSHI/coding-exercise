function luckBalance(k, contests) {
    // Write your code here
    // const importantCons =
    //     contests.filter(contest => contest[1] === 1)
    //         .sort((a, b) => a[0] - b[0])
    // const notImportantCons =
    //     contests.filter(contest => contest[1] === 0);
    // let luck = 0;

    // const reducer = (a, b) => a + b[0];
    // if (notImportantCons.length > 0) {
    //     luck = notImportantCons.reduce(reducer, 0);
    // }
    // console.log(luck);
    // if (importantCons.length > 0) {
    //     for (let i = 0; i < importantCons.length; i++) {
    //         if (i >= importantCons.length - k) {
    //             luck += importantCons[i][0];
    //         } else {
    //             luck -= importantCons[i][0];
    //         }
    //     }
    // }
    // return luck;

    const importantCon =
        contests
            .filter(con => con[1] === 1)
            .sort((a, b) => a[0] - b[0]);
    const notImportantCon = contests.filter(con => con[1] === 0);
    let totalLuck = notImportantCon.reduce((a, b) => a + b[0], 0);

    for (let i = 0; i < importantCon.length; i++) {
        if (i < importantCon.length - k) {
            totalLuck -= importantCon[i][0];
        } else {
            totalLuck += importantCon[i][0];
        }
    }

    return totalLuck;
}