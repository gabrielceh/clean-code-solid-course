(() => {
	// función para obtener información de una película por Id
	function getMovieById(movieId: string) {
		console.log({ movieId });
	}

	// función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
	function getMovieCastById(movieId: string) {
		console.log({ movieId });
	}

	// funcion para obtener el bio del actor por el id
	function getActorBioById(actorId: string) {
		console.log({ actorId });
	}

	// Crear una película
	interface MovieData {
		cast: string[];
		description: string;
		rating: number;
		title: string;
	}
	function createMovie({ title, description, rating, cast }: MovieData) {
		console.log({ title, description, rating, cast });
	}

	// Crea un nuevo actor
	function checkActorName(fullName: string): boolean {
		return fullName === 'fernando';
	}

	function createActor(fullName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (checkActorName(fullName)) return false;

		console.log('Crear actor: ', { fullName, birthdate });
		return true;
	}

	// continuacion
	//  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
	//       let result;
	//       if ( isDead ) {
	//           result = 1500;
	//       } else {
	//           if ( isSeparated ) {
	//               result = 2500;
	//           } else {
	//               if ( isRetired ) {
	//                   result = 3000;
	//               } else {
	//                   result = 4000;
	//               }
	//           }
	//       }

	//       return result;
	//   }

	const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
		if (isDead) return 1500;

		if (isSeparated) return 2500;

		return isRetired ? 3000 : 4000;
	};
})();
