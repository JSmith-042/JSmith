
// Dynamic age calculator

let birthyear = prompt("Enter your birth year");
let age = calculateAge(birthyear);
window.alert( "Your age is :"+ age);


function calculateAge(birthyear) {
    let currentyear = new Date().getFullYear();
    let age = currentyear - birthyear;
    return age;
}




