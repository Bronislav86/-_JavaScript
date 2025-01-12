const chef = new Map();

chef.set("Виктор", "Пицца");
chef.set("Ольга", "Суши");
chef.set("Дмитрий", "Десерты");

const dishes = new Map();

dishes
	.set("Пицца 'Маргарита'", "Виктор")
	.set("Пицца 'Пепперони'", "Виктор")
	.set("Суши 'Филадельфия'", "Ольга")
	.set("Суши 'Калифорния'", "Ольга")
	.set("Тирамису", "Дмитрий")
	.set("Чизкейк", "Дмитрий");

const clientAlexey = { names: "Alexey" };
const clientMariya = { names: "Mariya" };
const clientIrina = { names: "Irina" };
const clientDmitriy = { names: "Irina" };

const orders = new Map([
	[clientAlexey, ["Пицца 'Пепперони'", "Тирамису"]],
	[clientMariya, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]],
	[clientIrina, ["Чизкейк"]],
	[clientDmitriy, [""]],
]);

function getChefForDish(dish) {
	return `повар ${dishes.get(dish)}` || "Неизвестный повар";
}

function displayOrder(client) {
	const clientOrder = orders.get(client);
	if (!clientOrder || clientOrder == "") {
		console.log(`У клиента ${client.names} нет заказов.`);
		return;
	}

	let resultString = `Заказ клиента ${client.names}: \n`;
	clientOrder.forEach((dish) => {
		const chef = getChefForDish(dish);
		resultString += `- ${dish} (готовит: ${chef})\n`;
	});
	console.log(resultString);
}

displayOrder(clientAlexey);
displayOrder(clientMariya);
displayOrder(clientIrina);
displayOrder(clientDmitriy);

console.log(getChefForDish("Чизкейк"));
console.log(getChefForDish("Суши 'Калифорния'"));
console.log(getChefForDish("Пицца 'Маргарита'"));
