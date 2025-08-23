(() => {
	const celsiusTemperatures = [33.6, 12.34];

	const serverIpAddress = '123.123.123.123';

	const users = [
		{ id: 1, email: 'fernando@google.com' },
		{ id: 2, email: 'juan@google.com' },
		{ id: 3, email: 'melissa@google.com' },
	];

	const userEmails = users.map((user) => user.email);

	const canJump = false;
	const isRunning = true;
	const hasItems = false;
	const isLoading = false;

	// Otros ejercicios
	const startTime = new Date().getTime();
	//....
	// 3 doritos después
	//...
	const endTime = new Date().getTime() - startTime;

	// Funciones
	function getBooks() {
		throw new Error('Function not implemented.');
	}

	function getBooksByUrl(url: string) {
		throw new Error('Function not implemented.');
	}

	function getSquareArea(side: number) {
		throw new Error('Function not implemented.');
	}

	function printWork() {
		throw new Error('Function not implemented.');
	}
})();
