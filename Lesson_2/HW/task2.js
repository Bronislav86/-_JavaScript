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

const commentContainer = document.querySelector(".comment-container");

initialData.forEach((object) => {
	const productEl = document.createElement("ul");
	productEl.classList.add("productReviewsList");

	const titleEl = document.createElement("p");
	titleEl.textContent = object.product;
	productEl.appendChild(titleEl);

	object.reviews.forEach((review) => {
		const reviewEl = document.createElement("li");
		reviewEl.textContent = review.text;
		productEl.appendChild(reviewEl);
	});

	const inputReview = document.createElement("input");
	inputReview.classList.add("comment");

	const submitBtn = document.createElement("button");
	submitBtn.classList.add("submit-btn");
	submitBtn.textContent = "Оставить отзыв";

	productEl.appendChild(inputReview);
	productEl.appendChild(submitBtn);

	commentContainer.appendChild(productEl);
});

commentContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("submit-btn")) {
		const submitBtn = event.target;
		const inputReview = submitBtn.previousElementSibling;
		const productEl = submitBtn.closest(".productReviewsList");
		const titleOfProduct = productEl.querySelector("p").textContent;
		const comment = inputReview.value.trim();

		if (comment.length < 50 || comment.length > 500) {
			console.log("Длина сообщения не удовлетворяет условиям");
			return;
		}

		let reviewId = 0;

		initialData.forEach((item) => {
			if (item.product === titleOfProduct) {
				reviewId = item.reviews.length ? parseInt(item.reviews[item.reviews.length - 1].id) + 1 : 1;
				const newReview = { id: reviewId.toString(), text: comment };
				item.reviews.push(newReview);
			}
		});

		const reviewEl = document.createElement("li");
		reviewEl.textContent = comment;

		productEl.insertBefore(reviewEl, inputReview);

		inputReview.value = "";
	}
});
