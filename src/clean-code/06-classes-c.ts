(() => {
	// Aplicando el principio de responsabilidad única
	// Priorizar la composición sobre la herencia

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

		constructor({ name, birthDate, gender }: PersonProps) {
			this.name = name;
			this.birthDate = birthDate;
			this.gender = gender;
		}
	}

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		private lastAccess: Date;
		public email: string;
		public role: string;

		constructor({ email, role }: UserProps) {
			this.lastAccess = new Date();
			this.email = email;
			this.role = role;
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	interface SettingsProps {
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class Settings {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	interface UserSettingsProps {
		birthDate: Date;
		email: string;
		gender: Gender;
		lastOpenFolder: string;
		name: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings {
		public person: Person;
		public settings: Settings;
		public user: User;

		constructor({ birthDate, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingsProps) {
			this.person = new Person({ name, birthDate, gender });
			this.settings = new Settings({ workingDirectory, lastOpenFolder });
			this.user = new User({ email, role });
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
