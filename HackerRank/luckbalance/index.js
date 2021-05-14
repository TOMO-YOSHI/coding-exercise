// function luckBalance(k, contests) {
//     // Write your code here
//     let array = contests;
//     let luck = 0;
//     let importantCon = [];

//     for (let contest of array) {
//         if (contest[1] === 0) {
//             luck += contest[0];
//         } else {
//             importantCon.push(contest[0]);
//         }
//     }

//     const wins = importantCon.sort((a, b) => a - b).splice(0, importantCon.length - k);
//     luck += importantCon.reduce((a, b) => a + b) - wins.reduce((a, b) => a + b);

//     return luck;
// }

function luckBalance_2(k, contests) {
    // Write your code here
    const importantCons =
        contests.filter(contest => contest[1] === 1)
            .sort((a, b) => a[0] - b[0])
    const notImportantCons =
        contests.filter(contest => contest[1] === 0);
    let luck = 0;

    const reducer = (a, b) => a + b[0];
    if (notImportantCons.length > 0) {
        luck = notImportantCons.reduce(reducer, 0);
    }
    console.log(luck);
    if (importantCons.length > 0) {
        for (let i = 0; i < importantCons.length; i++) {
            if (i >= importantCons.length - k) {
                luck += importantCons[i][0];
            } else {
                luck -= importantCons[i][0];
            }
        }
    }
    return luck;
}