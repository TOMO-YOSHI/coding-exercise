function groupingDishes(dishes) {
    const dishesObj = {}
    let ingredients = []
    let output = []

    for (let dish in dishes) {
        dishesObj[dishes[dish][0]] = dishes[dish].slice(1)
        ingredients = [...ingredients, ...dishes[dish].slice(1)]
    }
    ingredients = ingredients.filter(item =>
        ingredients.indexOf(item) !== ingredients.lastIndexOf(item)
    )
    ingredients = [...new Set(ingredients)].sort()
    // console.log(dishesObj)
    // console.log(ingredients)

    for (let i = 0; i < ingredients.length; i++) {
        output.push([ingredients[i]])
        for (let dish in dishesObj) {
            // console.log(dishesObj[dish])
            if (dishesObj[dish].includes(ingredients[i])) {
                output[i] = [...output[i], dish]
            }
        }
    }

    // console.log(output)

    for (let i = 0; i < output.length; i++) {
        tmpArr = output[i].slice(1).sort()
        output[i] = [output[i][0], ...tmpArr]
    }

    return output;


    // *************************
    // let ingredients = [];
    // const ingredientsGrp = [];
    // const result = [];

    // for(let dish of dishes) {
    //     ingredients = [...ingredients, ...dish.slice(1)]
    // }
    // for(let ing of ingredients) {
    //     if(ingredients.indexOf(ing) !== ingredients.lastIndexOf(ing) 
    //         && !ingredientsGrp.includes(ing)) {
    //         ingredientsGrp.push(ing);
    //     }
    // }

    // ingredientsGrp.sort();

    // for(let i = 0; i < ingredientsGrp.length; i++) {
    //     result[i] = [ingredientsGrp[i]]
    //     for(let j = 0; j < dishes.length; j++) {
    //         if(dishes[j].slice(1).includes(ingredientsGrp[i])) {
    //             result[i].push(dishes[j][0]);
    //         }
    //     }
    //     result[i] = [result[i][0], ...result[i].slice(1).sort()]
    // }

    // return result;

}
