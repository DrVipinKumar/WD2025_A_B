//promise

const checkAge = new Promise((resolve,reject) => {
    let age = 24;
    if (age >= 18) {
        resolve("You can vote!");
    } else {
        reject("You are under age!");
    }
})

checkAge.then(response => console.log(response))
    .catch(error=>console.log(error))
