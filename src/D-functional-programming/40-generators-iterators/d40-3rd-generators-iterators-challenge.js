import { assertThat } from '../../j4b1-assert.js'
/**
 * d40-generators-iterators
 * Challenge
 *
 * * Reguły:
 * - Swój kod pisz w klasie GuestList
 * - W odpowiednim momencie implementacji odkomentuj blok z pętlą for
 */

class GuestList {

	// b60 - private things
	#guests = [];

	get guests() {
		// 1. niestety to jest tylko shallow copy!
		// return [...this.#guests]

		// 2. powinien być `clone`
		// b40 - cloning
		return structuredClone(this.#guests)
	}

	signGuest(name, lastName) {
		this.#guests.push({ name, lastName })
	}

	*[Symbol.iterator]() {
		for (const { name } of this.#guests) {
			yield name;
		}
	}
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
const myGuests = new GuestList();

myGuests.signGuest('Jane', 'Doe');
myGuests.signGuest('Joe', 'Doe');
myGuests.signGuest('Jan', 'Doe');
myGuests.signGuest('Janina', 'Doe');

// zabezpieczenie przed Trollami - to nasz getter.
myGuests.guests.push('TROLL')
myGuests.guests[1].name = 'TROLL';
console.log(myGuests.guests);

const collector = [];
// odkomentuj poniższy blok, kiedy będzie już implementacja:
for (const guestName of myGuests) {
	collector.push(guestName);
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'should have 4 guest on myGuests GuestList',
	expect => expect(myGuests.guests.length).toBe(4)
)  //=
assertThat(
	'second guest should be Joe',
	expect => expect(myGuests.guests[1]).toEqual({ name: 'Joe', lastName: 'Doe' })
)  //=
assertThat(
	'collector should have all the names from GuestList',
	expect => expect(collector).toEqual(['Jane', 'Joe', 'Jan', 'Janina'])
)  //=


console.log(JSON.stringify(myGuests.guests))