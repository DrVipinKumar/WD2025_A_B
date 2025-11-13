function sum(n1, n2) { //normal function
    console.log(`Sum =${n1 + n2}`);
}

const mul=(n1, n2)=>{ // arrow function
    console.log(`Multiply=${n1 * n2}`);
}
//calculate parameter
function calc(calculate) {  //calc higher order function
     calculate(23, 45);  //callback function
    console.log("this is higher order function")
}
calc(sum);
calc(mul);