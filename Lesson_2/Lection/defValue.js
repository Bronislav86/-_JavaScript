const user = {
	name: "John",
	age: 30,
	address: {
		city: "New York",
		street: "123 Main Str",
	},
	contacts: {
		email: "john@gmail.com",
		phone: "+123456789",
	},
};

const email = user?.contacts?.email;
console.log(email);

const defaultValue = user?.otherValue ?? "Default Value";
console.log(defaultValue);

const streetName = user?.address?.street ?? "Unknown";
console.log(streetName);
