// let user = prompt("Enter your age");
// if (user === null) {
//     console.error("You cancelled it");
// } else if (user.trim() === "") {
//     console.error("You entered nothing");
// } else {
//     let age = Number(user);
//     if (isNaN(age)) {
//         console.error('Not a number');
//     } else if (age < 18) {
//         console.error('You are not old enough');
//     } else {
//         console.log('You are old enough');
//     }
// }

let n = 10
let Multiples = 3;
for (let i = 1; i <= n; i++) {
    let Mul= Multiples * i;
    console.log(Mul);
}
