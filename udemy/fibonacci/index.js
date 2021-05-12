// function fibo (arg) {
//     let num_1 = 0;
//     let num_2 = 1;

//     console.log(1)

//     for(let i = 1; i < arg; i++) {
//         console.log(num_1 + num_2);
//         let temp = num_2
//         num_2 = num_1 + num_2;
//         num_1 = temp;
//     }
// }

function fibo(n) {
    if(n<2){
        console.log(n)
    }
    console.log( fibo(n-1) + fibo(n-2) );
}

fibo(10);

// function fibonacci(n) {
//     const fibArr = [0, 1];

//     while (fibArr.length - 1 < n) {
//         fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
//     }

//     return fibArr[n]
// }