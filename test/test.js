// Requiriendo el módulo
const expect = require("chai").expect

// Requiriendo Platzom (ir un nivel atrás)
// Ahí busca el main de packgaje.json
const platzom = require("..").default

// Qué es lo que tienen que hacer
// y qué es lo que tienen que devolver
describe("#platzom", function(){
	// Incluye todos los test aquí
	
	// Regla 1
	it("Si la palabra termina en 'ar', se le quitan esos dos caracteres", function(){
		// Se ejecuta la función
		const traslation = platzom("Programar")
		
		// Cuál debería ser el resultaod
		expect(traslation).to.equal("Program")
	})

	// Regla 2
	it('Si la palabra inicia con "z", se le añade "pe" al final', function(){
		// Se ejecuta la función
		const traslation = platzom("Zorro")
		const traslation2 = platzom("Zarpar")
		
		// Cuál debería ser el resultaod
		expect(traslation).to.equal("Zorrope")
		expect(traslation2).to.equal("Zarppe")
	})

	// Regla 3
	it('Si la palabra traducida tiene 10 o más letras, se parte a la mitad y se pone un caracter "-"', function(){
		// Se ejecuta la función
		const traslation = platzom("abecedario")
		
		// Cuál debería ser el resultaod
		expect(traslation).to.equal("abece-dario")
	})

	// Regla 4
	it('Si la palabra anterior es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra, intercalando mayúsculas y minúsculas', function(){
		// Se ejecuta la función
		const traslation = platzom("sometemos")
		
		// Cuál debería ser el resultaod
		expect(traslation).to.equal("SoMeTeMoS")
	})
})