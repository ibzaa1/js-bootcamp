// SECTION 2 - FUNCTIONS

// Ep1
let greetUser = function () {
    console.log('Welcome')
}

greetUser();
greetUser();

let square = function (num) {
    let result = num * num
    return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value, otherValue);

// challenge 

let convertTemp = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius; 
}

let value1 = convertTemp(32)
let value2 = convertTemp(68)

console.log (value1, value2);

// Ep3
let getTip = function (total, tipPercentage = .20) {
    let percent = tipPercentage * 100;
    let tip = total * tipPercentage;
    return `A tip percentage of ${percent}% of ${total}, would be a ${tip} dollar tip!`  
};

let tip = getTip (10, 0.3);
console.log(tip);

// Challenge video!!
let grade = function (score, totalScore) {
    let percent = (score / totalScore) * 100;
    
    if (percent >= 90) {
        return `Well done! You got A, (${percent}%)!`
    } else if (percent >= 80) {
        return `Good job! You got B, (${percent}%)!`
    } else if (percent >= 70) {
        return `Nice You got C, (${percent}%)!`
    } else if (percent >= 60) {
        return `Work harder! You got D, (${percent}%)!`
    } else if (percent <= 59) {
        return `You failed, (${percent}%)!`
    }
};

let result = grade(45, 100);
console.log(result);