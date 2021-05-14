function savings(deposit, percent, years) {
    const per = percent / 100;
    let savings = 0;

    for (let i = 0; i < years; i++) {
        savings += savings * per;
        if(i>6){
            savings += deposit + 600;
        } else {
            savings += deposit;
        }
        
        console.log(`${i} year: `, savings);
    }

    console.log(`Result: `, savings);
    return;
}

savings(200, 7, 26);