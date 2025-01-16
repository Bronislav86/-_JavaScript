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
	const arrayOfReviews = object.reviews;

	for (let element of arrayOfReviews) {
		const reviewEl = document.createElement("li");
		if (isNaN(element.text)) {
			reviewEl.textContent = element.text;
			productEl.appendChild(reviewEl);
		}
	}

	commentContainer.appendChild(productEl);

	const inputReview = document.createElement("input");
	inputReview.classList.add("comment");
	const submitBtn = document.createElement("button");
	submitBtn.classList.add("submit-btn");
	submitBtn.textContent = "Оставить отзыв";

	productEl.appendChild(inputReview);
	productEl.appendChild(submitBtn);
});

const buttonEls = document.querySelectorAll(".submit-btn");

buttonEls.forEach((button) => {
	button.addEventListener("click", () => {
		const comment = button.previousElementSibling.value;

		const parentElement = button.parentNode.childNodes;
		let titleOfProduct = null;

		for (const item of parentElement) {
			if (item.tagName === "P") {
				titleOfProduct = item.textContent;
			}
		}

		try {
			if (comment.length < 5 || comment.length > 50) {
				throw new Error("Длина сообщения не удовлетворяет условиям");
			}
			let reviewId = 0;

			for (const item of initialData) {
				if (item.product == titleOfProduct) {
					const reviewsArrayLength = item.reviews.length - 1;

					reviewId = parseInt(item.reviews[reviewsArrayLength].id) + 1;

					const newComment = {
						id: reviewId,
						text: comment,
					};

					item.reviews.push(newComment);
				}
			}

			const listEls = document.querySelectorAll(".productReviewsList");

			initialData.forEach((object) => {
				if (object.product == titleOfProduct) {
					const arrayOfReviews = object.reviews;
					const reviewEl = document.createElement("li");
					for (let element of arrayOfReviews) {
						if (element.id == reviewId) {
							reviewEl.textContent = element.text;
						}
					}

					listEls.forEach((element) => {
						if (element.firstChild.textContent == titleOfProduct) {
							element.lastElementChild.previousSibling.previousSibling.appendChild(reviewEl);

							const inputReview = element.lastElementChild.previousSibling;
							inputReview.value = "";
						}
					});
				}
			});
		} catch (error) {
			console.log(error.message);
		}
	});
	console.log(initialData);
});
