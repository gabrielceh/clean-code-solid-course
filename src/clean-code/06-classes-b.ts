(() => {
	// No aplicando el principio de responsabilidad única
	type Gender = 'M' | 'F';

	interface PersonProps {
		name: string;
		birthDate: Date;
		gender: Gender;
	}

	class Person {
		public name: string;
		public birthDate: Date;
		public gender: Gender;
		// crear clases en typescript: Corta
		constructor({ name, birthDate, gender }: PersonProps) {
			this.name = name;
			this.birthDate = birthDate;
			this.gender = gender;
		}
	}

	interface UserProps extends PersonProps {
		email: string;
		role: string;
	}

	class User extends Person {
		private lastAccess: Date;
		public email: string;
		public role: string;

		constructor({ birthDate, gender, email, role, name }: UserProps) {
			super({ name, birthDate, gender });
			this.lastAccess = new Date();
			this.email = email;
			this.role = role;
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	interface UserSettingsProps extends UserProps {
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({ birthDate, gender, email, role, name, workingDirectory, lastOpenFolder }: UserSettingsProps) {
			super({ birthDate, gender, email, role, name });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		birthDate: new Date('1990-01-01'),
		gender: 'M',
		email: 'user@email.com',
		role: 'admin',
		name: 'Gabriel',
		workingDirectory: 'src/user',
		lastOpenFolder: 'src/user/settings',
	});

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
