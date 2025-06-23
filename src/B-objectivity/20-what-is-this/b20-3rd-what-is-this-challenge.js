import { assertThat } from '../../j4b1-assert.js'
/**
 * b20-what-is-this
 * Challenge
 *
 * Napisałem kod, który ma wyświetlić nazwę działu po 2 sekundach.
 * Niestety, nie działa to tak, jak powinno. Nie wiem dlaczego, bo logika wygląda poprawnie.
 * Pomóż mi to naprawić!
 *
 * * Reguły:
 * - Nie możesz usuwać istniejącego kodu
 * - Kodzik możesz modyfikować w środku metody sayNameAfter
 */

let testSpy = '';

class ShowDepartment {

	name = 'IT Department'

	printMyName() {
		return this.name;
	}

	sayNameAfter(seconds = 2) {

		console.log(this);
		console.log(this.printMyName());
		// const result = 'This is ' + that.printMyName() // sposób 2
		// const that = this; // sposób 3
		// const printMyName = this.printMyName.bind(this); sposób 4

		/* sposób 5:

		setTimeout(function () {

			console.log(this);
			const result = 'This is ' + this.printMyName()

			console.log(result)
			// ten kod poniżej jest potrzebny tylko dla testu (nie zmieniaj go):
			testSpy = result;
		}.bind(this), seconds * 1000)
		
		*/

		setTimeout(() => {

			console.log(this);
			const result = 'This is ' + this.printMyName()

			console.log(result)
			// ten kod poniżej jest potrzebny tylko dla testu (nie zmieniaj go):
			testSpy = result;
		}, seconds * 1000)
	}
}


function setTimeout2(callback) {

	class TimeoutFake {
		method = callback;
	}

	const myObj = new TimeoutFake();

	myObj.method()
}


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
const department = new ShowDepartment();
department.sayNameAfter(2);

assertThat(
	'department name',
	expect => expect(department.name).toBe('IT Department')
)  //=
assertThat(
	'department should have printMyName method',
	expect => expect(typeof department.printMyName).toBe('function')
)  //=

setTimeout(() => {
	assertThat(
		'spy should have value "This is IT Department" after 2 seconds',
		expect => expect(testSpy).toBe('This is IT Department')
	)  //=
}, 2100)


