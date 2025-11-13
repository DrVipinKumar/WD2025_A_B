//promise

const checkAge = new Promise((resolve,reject) => {
    let age = 2;
    if (age >= 18) {
        resolve("You can vote!");
    } else {
        reject("Sorry!, you can not vote!");
    }
});
checkAge.then(msg => console.log(msg))
    .catch(error => console.log(error))
