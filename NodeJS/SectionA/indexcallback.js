//callback
function sum(n1, n2) {  // normal function
    console.log(`Sum=${n1+n2}`);
}
const mul = (n1,n2) => { //normal function
    console.log(`Multiply=${n1*n2}`);
}
function calc(execute) {  //higher order function
     console.log("this is calc function.")
    execute(23, 45);
   
    // console.log(execute);
}
calc(sum);  
calc(mul);
// calc(20);
// let num = 40;
// calc(num);
