function main(input) {
    const inputedArray = input.split("\n")
    inputedArray.shift()
    inputedArray.sort((a, b) => a - b)
    const newArray = []
    inputedArray.forEach(element => {
        if(newArray.indexOf(element) === -1) {
            newArray.push(element)
        }
    });
    console.log(newArray.length.toString())

}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

const args = "7\n50\n30\n50\n100\n50\n80\n30"

main(args)