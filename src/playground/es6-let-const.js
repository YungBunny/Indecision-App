var namevar = 'Chanel';
var nameVar = 'Rob';
console.log('nameVar', nameVar);

let nameLet = 'Jenn';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameconst', nameConst);

// Block scoping : bound to code blocks like for loops or if statements 
// not just to functions

const fullName = 'Chanel Fu';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);