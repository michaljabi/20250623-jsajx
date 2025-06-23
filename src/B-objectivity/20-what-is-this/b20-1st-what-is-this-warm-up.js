import { assertThat } from '../../j4b1-assert.js'
/**
 * b20-what-is-this
 * Warm up
 *
 * Do dwóch obiektów "zapomniałem" dopisać jednej metody... pomożesz?
 *
 * * Reguły:
 * - Popraw kodzik tak, aby działał.
 * - Postaraj się zastosować zasadę "DRY" - Don't Repeat Yourself
 */
function sayYourName() {
	console.log(this);
	return this.fullName;
}

sayYourName()

const personJen = {
	fullName: 'Jen Barber',
	profession: 'IT Manager',
	sayYourName
	// sayYourName() {
	// 	return this.fullName;
	// }
}

const personRoy = {
	fullName: 'Roy Trenneman',
	profession: 'The IT Guy',
	sayYourName
	// sayYourName() {
	// 	return this.fullName;
	// }
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'Jen should be able to introduce herself',
	expect => expect(personJen.sayYourName()).toBe('Jen Barber')
)  //=
assertThat(
	'Roy should be able to introduce himself',
	expect => expect(personRoy.sayYourName()).toBe('Roy Trenneman')
)  //=
