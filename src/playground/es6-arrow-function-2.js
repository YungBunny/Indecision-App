// arguments object - no longer cound with arrow function use es5 if you want arg

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Chanel',
    cities: ['LA', 'SF', 'London'],
    printPlacesLived() { //don't want to use arrow function for methods like here
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());