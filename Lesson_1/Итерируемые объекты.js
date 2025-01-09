// const string = "Hello";
// console.log(string[2]);
// console.log(string.length);

// for (const str of string) {
// 	console.log(str);
// }

//------------------------

// let range = {
// 	from: 1,
// 	to: 10,
// };

// range[Symbol.iterator] = function () {
// 	return {
// 		current: this.from,
// 		last: this.to,

// 		next() {
// 			return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
// 		},
// 	};
// };

// for (let number of range) {
// 	console.log(number);
// }

//---------------------------

// let range = {
// 	from: 1,
// 	to: 17,
// 	[Symbol.iterator]() {
// 		this.current = this.from;
// 		return this;
// 	},
// 	next() {
// 		return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
// 	},
// };
// for (let number of range) {
// 	console.log(number);
// }

//---------------Arrray.form

let pseudo = {
	0: "first",
	1: "second",
	2: "newAlem",
	length: 3,
};

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

let pseudo2 = "It's Array Like!";
let array2 = Array.from(pseudo2);
console.log(array2);
