// SECTION 3 - OBJECTS

// Ep1
let person = {
    name: 'Ibby',
    age: 15,
    location: 'Leeds'
};

console.log(`My name is ${person.name} and I am ${person.age} years old! I live in ${person.location}`);

console.log(`My name is ${person.name} and I am ${person.age + 1} years old! I live in ${person.location}`);

// Ep2
let convert = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
}

let temp = convert(74);
console.log(temp);

// Ep5
let restaurant = {
    name: "Henny's",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty = function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(checkAvailability(4));