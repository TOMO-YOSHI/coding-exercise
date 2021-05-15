function savings(deposit, percent, years) {
    const per = percent / 100;
    let savings = 400;

    for (let i = 0; i < years; i++) {
        savings += savings * per;
        savings += deposit;
        
        console.log(`${i+1} year: `, savings);
    }

    console.log(`Result: `, savings);
    return;
}

savings(0, 6, 25);