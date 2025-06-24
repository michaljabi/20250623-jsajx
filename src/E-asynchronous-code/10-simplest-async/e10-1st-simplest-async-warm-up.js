import { assertThat, fireCount } from '../../j4b1-assert.js'
/**
 * e10-simplest-async
 * Warm up
 *
 * Dwie osoby zwróciły się po zwrot swoich należności,
 * jedna z nich powinna dostać aż 2-krotny zwrot
 *
 * * Reguły:
 * - nie możesz usuwać istniejącego kodu
 * - nie możesz użyć słowa kluczowego `return`
 * - możesz modyfikować parametry funkcji
 * - możesz dopisywać nowy kod
 */

function getTheRefund(refundFn) {
	const totalRefund = 300;
	fireCount(getTheRefund)

		; (() => {

			; (() => {
				//throw new Error('Not allowed to collect refund')
			})();
		})();

	setTimeout(() => {
		// PROVIDER:
		// refundFn(300);

		// todo: [e20] - need to fix this.... 
		/// throw new Error('Not allowed to collect refund')
		refundFn('Not allowed to collect refund', 0)
	}, 1000)
}

// Person 1
let collectedRefund = 0;

// CONSUMER:
try {
	getTheRefund((value) => {
		collectedRefund += value;
	})
} catch (e) {
	console.log(e.message)
}

// Person 2
let collectedTwoRefunds = 0;


// CONSUMER:
getTheRefund((err, value) => {
	if (err) {
		console.log(err.message)
		return;
	}
	collectedTwoRefunds += value;
})

// CONSUMER:
getTheRefund((value) => {
	collectedTwoRefunds += value;
})

setTimeout(() => {
	console.log('!')
}, 2000)


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'should have 300 on collectedRefund',
	expect => expect(collectedRefund).toBe(300)
)  //=

assertThat(
	'should have 600 on collectedTwoRefunds',
	expect => expect(collectedTwoRefunds).toBe(600)
)  //=

assertThat(
	'function getTheRefund should fire 3 times',
	expect => expect(getTheRefund.fired).toBe(3)
)  //=
