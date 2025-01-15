class Library {
	#listOfBooks;

	constructor(listOfBooks = []) {
		const uniqueBooks = [...new Set(listOfBooks)];

		if (uniqueBooks.length !== listOfBooks.length) {
			throw new Error("Массив содержит дубликаты книг.");
		}

		this.#listOfBooks = listOfBooks;
	}

	get listOfBooks() {
		return this.#listOfBooks.toString();
	}

	addNewBook(book) {
		const indexOfBook = this.#listOfBooks.indexOf(book);
		if (indexOfBook !== -1) {
			throw new Error("Такая книга уже есть в библиотеке");
		}
		this.#listOfBooks.push(book);
		return this.#listOfBooks;
	}

	removeBook(book) {
		const indexOfBook = this.#listOfBooks.indexOf(book);

		if (indexOfBook !== -1) {
			this.#listOfBooks.splice(indexOfBook, 1);
		} else {
			throw new Error("Книга не найдена");
		}

		return this.#listOfBooks;
	}

	hasBook(book) {
		let result;
		const indexOfBook = this.#listOfBooks.indexOf(book);
		if (indexOfBook !== -1) {
			result = true;
		} else {
			result = false;
		}
		return result;
	}
}

const library = new Library(["Книга1", "Книга2", "Книга3", "Книга4"]);

console.log(library.listOfBooks);

library.addNewBook("Книга5");

console.log(library.listOfBooks);

library.removeBook("Книга5");
console.log(library.listOfBooks);

console.log(library.hasBook("Книга3"));
