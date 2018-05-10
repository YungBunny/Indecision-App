console.log('utils.js is running');

// named exports

const square = (x) => x * x; 

const add = (a,b) => a + b;

// default export: 
// can't have more than one 
// import declaration different
// can call it anything you want when importing, best to use logical name
// no rules on when to use which
// usually biggest component is set as default export

const subtract = (a, b) => a - b;

export { square, add, subtract as default };

// alternative declarations of exports: 

// export const square = (x) => x * x; 

// export const add = (a,b) => a + b;
// export default  (a, b) => a - b;
