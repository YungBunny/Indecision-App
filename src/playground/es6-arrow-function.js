/* // es5 function

const square = function(x) {
    return x * x;
};

function squarey(x) {
    return x * x;
};

console.log(squarey(3));

// es6 function
// arrow function expression syntax allows more concise functions 
// can do if it only returns one expression, implicitly returns

// const squareArrow = (x) => {
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(5));
*/

const getFirstName = (fullName) => {
    return (fullName.split(' ')[0])
};

const getFirstNamey = (fullName) => fullName.split(' ')[0];

console.log(getFirstNamey('Chanel Fu'));