import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//stateless function component is for more presentational purposes, render faster
//class base components use state

// class Header extends React.Component {
//     // es6 you don't have to define render, but for React you do
//     render() {
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     //     //alert('yo');
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         );
//     }
// }

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

//const jsx = (
//    <div>
//        <Header />
//        <Action />
//        <Options />
//        <AddOption />
//    </div>
//); used to be the first element rendered

// Webpack: asset/module bundler

// having several script tags can slow down your website so having a single request
// for a single script file is better

// art of getting multiple script tags down to one and how webpack does it is unique

// break up application into multiple files that can communicate with each other

// allows us to take all the stuff that makes up our application, 
// combine it with third party libraries
// spit out a single javascript File
// can break up our program in ie a file for each component

// Avoid using global modules, collab/ open source: 
// they don't have all the tools they need
// don't have exact version
// have to type entire command

// ------- utils and person examples --------

//import './utils.js'
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running!!');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 81));

// import isSenior, {isAdult, canDrink} from './person.js';

// console.log(isAdult(18));
// console.log(canDrink(21));
// console.log(isSenior(60));

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

// ------------------------------------------------

// babel cli allows you to run babel from command line
// babel core allows you to run babel through apps like webpack