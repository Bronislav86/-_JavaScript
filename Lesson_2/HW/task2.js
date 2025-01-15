const initialData = [
	{
		product: "Apple iPhone 13",
		reviews: [
			{
				id: "1",
				text: "Отличный телефон! Батарея держится долго.",
			},
			{
				id: "2",
				text: "Камера супер, фото выглядят просто потрясающе.",
			},
		],
	},
	{
		product: "Samsung Galaxy Z Fold 3",
		reviews: [
			{
				id: "3",
				text: "Интересный дизайн, но дорогой.",
			},
		],
	},
	{
		product: "Sony PlayStation 5",
		reviews: [
			{
				id: "4",
				text: "Люблю играть на PS5, графика на высоте.",
			},
		],
	},
];

const inputEl = document.querySelector(".comment");
const button = document.querySelector(".submit-btn");
const commentContainer = document.querySelector(".comment-container");

button.addEventListener("click", () => {
	const comment = inputEl.value;

	try {
		if (comment.length < 50 || comment.length > 500) {
			throw new Error("Длина сообщения не удовлетворяет условиям");
		}
		const newComment = {
			id: initialData.product.reviews.id + 1,
			text: comment,
		};
	} catch (error) {
		console.log(error.message);
	}
});
