(() => {
	// No aplicando el principio de responsabilidad única
	type Gender = 'M' | 'F';
	class Person {
		// crear clases en typescript: Corta
		constructor(public name: string, public birthDaye: Date, public gender: Gender) {}
	}

	class User extends Person {
		private lastAccess: Date;
		constructor(public email: string, public role: string, name: string, birthDate: Date, gender: Gender) {
			super(name, birthDate, gender);
			this.lastAccess = new Date();
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			name: string,
			birthDate: Date,
			gender: Gender
		) {
			super(email, role, name, birthDate, gender);
			this;
		}
	}

	const userSettings = new UserSettings('src/user', 'src/user/settings', 'user@email.com', 'admin', 'Gabriel', new Date('1990-01-01'), 'M');

	console.log({ userSettings });

	// class Person {

	//   // crear clases en typescript: Larga
	//   public name: string;
	//   public birthDaye: Date;
	//   public gender: Gender;

	//   constructor(name: string, birthDate: Date, gender: Gender) {
	//   	this.name = name;
	//   	this.birthDaye = birthDate;
	//   	this.gender = gender;
	//   }
	// }
})();
