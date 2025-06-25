import { assertThat } from '../../j4b1-assert.js'
/**
 * b40-cloning
 * Warm up
 *
 * Klonowanie obiektów
 *
 * * Reguły:
 * - Kod możesz pisać tylko w lokalnym scope funkcji `cloner`
 */

const myFirstObject = {
	name: 'August Oetker',
	age: 56,
	title: 'Dr.'
}

const myFirstImpressiveObject = {
	name: 'John Wick',
	age: 55,
	address: {
		zip: 11765,
		street: 'Horseshoe Road',
		neighbourhood: 'Long island',
		city: 'New York'
	}
}

function cloner(objectToClone) {
	// #Reguła:
	// Kodzik można pisać tylko w tym bloku.

	// to nie wystarczy bo shallow!
	// return { ...objectToClone };
	// To jest super: bo dziala !
	// return structuredClone(objectToClone);

	// To jest prawie super bo ograniczenia JSON:
	// JSON.parse(JSON.stringify(objectToClone));

	// Rozwiazanie "na piechote", ale tez ma ograniczenia!!
	const clonedObj = {};

	for (const key in objectToClone) {
		if (typeof objectToClone[key] === 'object' && objectToClone[key] !== null) {
			clonedObj[key] = cloner(objectToClone[key])
		} else {
			clonedObj[key] = objectToClone[key];
		}
	}

	return clonedObj;
}


// #Reguła:
// Nie możesz zmieniać kodu poniżej:

const clonedFirstObject = cloner(myFirstObject);

console.log(clonedFirstObject === myFirstObject)

const clonedFirstImpressiveObject = cloner(myFirstImpressiveObject);

console.log(clonedFirstImpressiveObject === myFirstImpressiveObject)
console.log(clonedFirstImpressiveObject.address === myFirstImpressiveObject.address)

assertThat(
	'clonedFirstObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstObject).toBe(typeof myFirstObject)
)  //=
assertThat(
	'clonedFirstObject > not being the same instance in memory!',
	expect => expect(clonedFirstObject).notToBe(myFirstObject)
)  //=
assertThat(
	'clonedFirstObject > objects structure should be the same',
	expect => expect(JSON.stringify(clonedFirstObject)).toBe(JSON.stringify(myFirstObject))
)  //=

assertThat(
	'clonedFirstImpressiveObject > both suppose to be an objects',
	expect => expect(typeof clonedFirstImpressiveObject).toBe(typeof myFirstImpressiveObject)
)  //=
assertThat(
	'clonedFirstImpressiveObject > has same structure but not being the same instance in memory!',
	expect => expect(clonedFirstImpressiveObject).notToBe(myFirstImpressiveObject)
)  //=
assertThat(
	'clonedFirstImpressiveObject > clone suppose to be deep !',
	expect => expect(clonedFirstImpressiveObject.address).notToBe(myFirstImpressiveObject.address)
)  //=
assertThat(
	'clonedFirstImpressiveObject > object structure should be the same',
	expect => expect(JSON.stringify(clonedFirstImpressiveObject)).toBe(JSON.stringify(myFirstImpressiveObject))
)  //=
