import { assertThat } from '../../j4b1-assert.js'
/**
 * b10-object-initialization
 * Warm up
 *
 * Popatrz no mnie, jaki ten dżawaskript jest dziwny...
 * Tutaj to nawet klas nie potrzeba, żeby obiekty działały 😯
 *
 * * Reguły:
 * - musisz dopisać cały kod, potrzebny do poprawnego działania przypadków testowych
 */

const myItCrowd = {
	characters: {
		list: ['Maurice', 'Jen', 'Roy']
	},
	office: {
		answerPhone() {
			return 'Have you tried to turn it off and on again?'
		}
	}
}

console.log([] === []);
console.log({} === {});
console.log(new Object() === new Object());
console.log(new Date() === new Date());


console.log(1n === 1n);
console.log('A' === 'A');

// symbol jest unikatowy dlatego false tutaj:
console.log(Symbol() === Symbol())

// console.log(Symbol('dev'))
// console.log(Symbol('dev2'))


console.log(typeof '');
console.log(typeof 1);
console.log(typeof true);

console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());


// BUG:
console.log(typeof null);


// vs Java:
console.log(new Date() instanceof Date);
console.log(new Date() instanceof Object);

// Matrix:
// const x = {}; // literał obiektowy
// -----
// const x = new Object();

// const y = []; // literał tablicowy
// ------
// const y = new Array();

// const z = /\d/; // literał wyrażenia regularnego
// ------
// const z = new RegExp("\\d");

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'myItCrowd should have a list of [Maurice, Jen, Roy] present',
	expect => expect(myItCrowd.characters.list).toEqual(['Maurice', 'Jen', 'Roy'])
)  //=
assertThat(
	'myItCrowd should have answerPhone method with proper text returned',
	expect => expect(myItCrowd.office.answerPhone()).toBe('Have you tried to turn it off and on again?')
)  //=
