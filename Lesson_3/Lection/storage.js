// // localStorage.setItem("username", "Dima");

// // let storageName = localStorage.getItem("username");

// // console.log(storageName);

// // localStorage.removeItem("username");

// // let storageName2 = localStorage.getItem("username");

// // console.log(storageName2);

// // localStorage.clear();

// // console.log("localStorage:", localStorage);

// if (localStorage.getItem("counter")) {
// 	let counter = parseInt(localStorage.getItem("counter")) + 1;
// 	localStorage.setItem("counter", counter.toString());
// } else {
// 	localStorage.setItem("counter", "1");
// }

// console.log("Счетчик посещений: ", localStorage.getItem("counter"));

// localStorage.clear();

//----------------------------------

let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

const updateCounter = () => {
	counter++;
	localStorage.setItem("counter", counter.toString());
};

document.querySelector(".counter").textContent = counter;

document.querySelector(".increment").addEventListener("click", () => {
	updateCounter();
	document.querySelector(".counter").textContent = counter;
});
