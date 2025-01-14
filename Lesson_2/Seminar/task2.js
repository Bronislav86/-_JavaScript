class User {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}

	get getName() {
		return this.name;
	}

	get getLastname() {
		return this.lastname;
	}
}

class PremiumUser extends User {
	premiumAccount = null;

	constructor(name, lastname, premiumAccount) {
		super(name);
		this.lastname = lastname;
	}

	setPremiumAccount() {
		this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
	}

	get getPremiumAccount() {
		return parseFloat(this.premiumAccount);
	}
}

class RegularUser extends User {
	constructor(name, lastname) {
		super(name, lastname);
	}
}

class Cat {}

const getAccountInfo = (user) => {
	if (user instanceof PremiumUser) {
		console.log(
			`Премиум аккаунт действителен до: ${new Date(user?.premiumAccount).getFullYear()}` ?? "Информация отсутствует",
			user.getName,
			user.getLastname
		);
	}

	if (user instanceof RegularUser) {
		console.log("Пользователь без премиум аккаунта", user.getName, user.getLastname);
	}

	if (!(user instanceof PremiumUser) && !(user instanceof RegularUser)) {
		console.log("Тип пользователя не определен");
	}
};

const premUser = new PremiumUser("John", "Doe", null);
premUser.setPremiumAccount();
const regUser = new RegularUser("John", "Smith");
const user = new User("User", "Luser");
const user2 = new Cat();

getAccountInfo(premUser);
