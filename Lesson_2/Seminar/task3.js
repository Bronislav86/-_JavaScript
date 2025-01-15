const inputEl = document.querySelector(".input");
const button = document.querySelector(".checkbtn");
const answerBox = document.querySelector(".answer");

button.addEventListener("click", () => {
	try {
		const result = inputEl.value;

		if (isNaN(result) || result === null || result === "") {
			throw new Error("Это не число");
		}
		const answerEl = document.createElement("p");
		answerEl.classList.add("answertext");
		answerEl.textContent = "Значение является числом";
		answerBox.appendChild(answerEl);
	} catch (error) {
		const answerEl = document.createElement("p");
		answerEl.classList.add("answertext");
		answerEl.textContent = error.message;
		answerBox.appendChild(answerEl);
	}
});
