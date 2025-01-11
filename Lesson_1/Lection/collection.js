// let map = new Map();

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");

// console.log(map);

// //---------------------------------

// console.log(map.get(1));
// console.log(map.get("1"));
// console.log(map.size);

//----------------get & set

// let map = new Map();
// map.set("1", "We");
// map.set(1, "likes");
// map.set(true, "JS");

// console.log(map);

//--------------Перебор коллекции Map

// let = recipeMap = new Map([
// 	["огурец", 500],
// 	["помидор", 350],
// 	["лук", 50],
// ]);

// console.log(recipeMap);

// for (const vegitable of recipeMap.keys()) {
// 	console.log(vegitable);
// }

// for (const amount of recipeMap.values()) {
// 	console.log(amount);
// }

// for (const entry of recipeMap) {
// 	console.log(entry);
// }

// recipeMap.forEach((value, key, map) => {
// 	console.log(`${key}: ${value}`);
// });

//---------------------------------Работа с объектами

// let map = new Map(Object.entries(obj));

// let obj = Object.fromEntries(map);

//------------------------------------SET----------------

// let buddies = ["Жучка", "Тузик", "Булька", "Тузик", "Бобик", "Жучка", "Валера", "Жучка", "Тузик", "Манька"];
// let uniqBuddies = new Set(buddies);

// console.log(uniqBuddies);

// //------------------------------------------------

// let arr = Array.from(uniqBuddies);
// console.log(arr);

// for (const element of uniqBuddies) {
// 	console.log(element);
// }
