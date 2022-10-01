// define a union type alias
type NumStr = number | string;

// combine function using union types
function combine (value1: NumStr, value2: NumStr) {
    let result: NumStr;

    if (typeof value1 === "number" && typeof value2 === "number") {
        result = value1 + value2;
    } else {
        result = value1.toString() + value2.toString();
    }

    return result;
}

// assign a function to a variable
let comb: (v1: NumStr, v2: NumStr) => NumStr;
comb = combine;

console.log(comb(1, 2));
console.log(comb("Hello ", "World"));

// a function with a callback function
function addAndPrint (num1:number, num2:number, print: (msg:string) => void) {
    let result = num1 + num2;

    print(`${num1} + ${num2} is ${result}`);
}

addAndPrint(3, 5, (msg) => {
    console.log(msg);
});
