/**
 * Crearemos un nuevo lenguaje llamado Platzom.
 *
 * 	- Regla 1
 *  	Si la palabra termina en "ar", se le quitan esos dos caracteres
 *
 * 	- Regla 2
 * 		Si la palabra inicia con "z", se le añade "pe" al final
 *
 * 	- Regla 3
 * 		Si la palabra traducida tiene 10 o más letras, se parte a la mitad
 * 		y se pone un caracter "-"
 *
 * 	- Regla 4
 * 		Si la palabra anterior es un palíndromo,
 * 		ninguna regla anterior cuenta y se devuelve la misma palabra,
 * 		intercalando mayúsculas y minúsculas
 */

export default function platzom(str) {
	// Definimos una variable del texto que vamos a transformar
	let traslation = str;

	// Regla 4
	
	// Dividir por cada uno de los caracteres, se le da vuelta y se pone otra vez dentro de un arreglo
	const reverse = (str) => str.split("").reverse().join("")

	function minMay(str) {
		const length = str.length
		let traslation = ''
		let capitalize = true // que sea o no mayúscula

		// Se recorre el string
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i) // Se obtiene cada uno de los caracteres
			traslation += capitalize ? char.toUpperCase() : char.toLowerCase() // Condicional en una sóla línea
			capitalize = !capitalize // Se invierte true o falso
		}

		return traslation
	}

	// Si el string original es igual al reverseado
	if (str == reverse(str)) {
		// ejecuta y retorna la función de mayúsculas y minúsculas intercaladas
		return minMay(str)
	}

	/**
	 * Regla 1
	 */
	if (str.toLowerCase().endsWith("ar")) {
		// Cortará desde el inicio hasta los últimos dos caracteres
		traslation = str.slice(0, -2)
	}

	/**
	 * Regla 2
	 */
	if (str.toLowerCase().startsWith("z")) {
		traslation += "pe"
	}

	/**
	 * Regla 3
	 */
	const length = traslation.length
	if (length >= 10) {
		// Dividimos la palabra en dos
		const primeraMitad = traslation.slice(0, Math.round(length / 2))
		const segundaMitad = traslation.slice(Math.round(length / 2))

		// Se concatena
		traslation = `${primeraMitad}-${segundaMitad}`
	}

	return traslation;
}