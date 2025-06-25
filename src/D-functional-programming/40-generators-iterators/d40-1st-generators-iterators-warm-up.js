import { assertThat } from '../../j4b1-assert.js'
/**
 * d40-generators-iterators
 * Warm up
 *
 * * Reguły:
 * - Możesz zmieniać kod tam gdzie jest to wyraźnie zapisane, lub gdzie nie ma co do tego reguł.
 */

const splitter = [];
for (const x of 'Latte') {
	// Możesz pisać kod tutaj (wewnątrz tego bloku):
	splitter.push(x);
}
// #Reguła:
// Nie możesz zmieniać tego kodu:
assertThat(
	'splitter should collect the word Latte - after join',
	expect => expect(splitter.join('')).toBe('Latte')
)  //=

// Nie możesz zmieniać wartości w `numeric`
const numeric = [[1, 2], [3, 4]];
// Możesz ruszać przypisania w num1 i num2
let num1 = '';
let num2 = '';
// pętla musi zostać i iterować po `numeric`, jednak możesz modyfikować jej zawartość
for (const [a, b] of numeric) {
	// Możesz pisać kod tutaj (wewnątrz tego bloku):
	// console.log(placeholder);
	num1 += a;
	num2 += b;
}
// #Reguła:
// Nie możesz zmieniać tego kodu:
assertThat(
	'num1 suppose to equal "13"',
	expect => expect(num1).toBe('13')
)  //=
assertThat(
	'num2 suppose to equal "24"',
	expect => expect(num2).toBe('24')
)  //=
// ------------------------------

// Możesz edytować ten wpis
const DYNAMIC_KEY = 'showMeSomeNumbers';
const DYNAMIC_KEY2 = Symbol();

const myOBj = {
	name: 'Michał',
	[DYNAMIC_KEY2]() { }
}

console.log(Object.keys(myOBj));
console.log(Object.getOwnPropertySymbols(myOBj));

// Nie możesz dodawać nowych metod to tej klasy!
// Możesz edytować nazwy metod
class MyIterableConcept {

	name = 'Michał';

	myMethod() { }

	['thisIsSimple']() {
		// Tutaj można pisać kodzik
		return 'FUN';
	}

	[DYNAMIC_KEY]() {
		// Tutaj można pisać kodzik
		return [90, 10, 20];
	}

	*[Symbol.iterator]() {
		yield 100;
	}

	/*
	[Symbol()]() {}
	[Symbol()]() {}
	[Symbol()]() {}
	[Symbol()]() {}
	[Symbol()]() {}
	[Symbol()]() {}
	*/
}

const iterables = new MyIterableConcept();

console.log(Object.keys(iterables));
Object.getOwnPropertyNames(Object.getPrototypeOf(iterables)) //=
Object.getOwnPropertyNames(MyIterableConcept.prototype) //=
Object.getOwnPropertySymbols(Object.getPrototypeOf(iterables)) //=

// #Reguła:
// Nie możesz zmieniać tego kodu:
assertThat(
	'MyIterableConcept instance should have method thisIsSimple() which return "FUN" ',
	expect => expect(iterables.thisIsSimple()).toBe('FUN')
)  //=
assertThat(
	'MyIterableConcept instance should have method showMeSomeNumbers() which return [90, 10, 20] ',
	expect => expect(iterables.showMeSomeNumbers().toString()).toBe('90,10,20')
)  //=
