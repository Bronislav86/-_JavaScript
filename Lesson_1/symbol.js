// const symbol = Symbol();

// const dogId = Symbol("dog");

// const dog1 = Symbol("dog");
// const dog2 = Symbol("dog");

// console.log(dog1);
// console.log(dog2);

// console.log(dog1 == dog2);

//------------------------------------------------------------------

// const dogID = Symbol("dog");

// //alert(dogID);

// //console.log(dogID);

// console.log(dogID.description);

//-------------------------------------------------------------------

// let id = Symbol("dogID");

// let id = Symbol("id");

// let buddy = {
// 	[id]: "Жучка",
// };

// console.log(buddy[id]);

// buddy[id] = "Бобик";

// console.log(buddy[id]);

//---------------------------------------------------------------

// let buddy = { name: "Тузик" };
// buddy.id = "Наш идентификатор";
// buddy.id = "Их идентификатор";

// console.log(buddy.id);

// //-----------РЕШЕНИЕ

// let buddies = {
// 	[Symbol("Жучка")]: "Жучка",
// 	[Symbol("Мурка")]: "Мурка",
// 	[Symbol("Таракашка")]: "Таракашка",
// 	elephant: "Слон",
// 	cat: "Барсик",
// };

// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies, buddies);

// buddies.cat = "Барсик";

// console.log(newBuddies);
// console.log(buddies);

//-------------------------------------------------------Symbol.for  ----

// let id = Symbol.for("id");

// let idAgain = Symbol.for("id");

// alert(id === idAgain);

// console.log(id.description);

//--------------------Symbol.keyFor---------------------

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));
