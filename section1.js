// SECTION 1 - BASICS

// Ep1
let city = 'London';
let country = 'England';
let location = city + ',' + ' ' +  country;

console.log(location);

// Ep2
let studentScore = 41;
let maxScore = 100;
let percent = (studentScore / maxScore) * 100;

console.log(percent);

// Ep4 - challenge (temp conversion)
let fahrenheit = 32;
let celsius = (fahrenheit - 32) * 5 / 9;
let kelvin = (fahrenheit + 459.67) * 5 / 9;

console.log(celsius, kelvin);

// Ep5
let age = 65;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild, isSenior); 

// Ep6
let age2 = 6;

if (age2 >= 65) {
    console.log('Free senior pass')
};

if (age2 <= 7) {
    console.log('Free child pass')
};

// Ep7
let temp = 1000;

if (temp <= 32) {
    console.log('Its is cold!')
} else if (temp >= 110) {
    console.log('It is too hot!')
} else {
    console.log('It is a nice day!')
}; 

// Ep8
let isGuestVegan = false;
let isGuestVegan2 = false;

if (isGuestVegan && isGuestVegan2) {
    console.log('Only vegan food')
} else if (isGuestVegan || isGuestVegan2) {
    console.log('Serve all kinds of dishes')
} else {
    console.log('Meat menu')
}