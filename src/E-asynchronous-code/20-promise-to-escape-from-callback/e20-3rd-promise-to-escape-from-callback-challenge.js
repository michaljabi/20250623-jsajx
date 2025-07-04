import { assertThat } from '../../j4b1-assert.js'
/**
 * e20-promise-to-escape-from-callback
 *
 * Wiemy już że świat nie jest kolorowy,
 * Nasza najnowsza wersja lib'a do Ajax'a - musi być nowoczesna
 *
 * Dzięki za pomoc z callbacks, jednak w wersji 0.3.1
 * Chcemy przejść z obsługi callbacks na - promises!
 *
 * * Reguły:
 * - Kod zmieniaj tylko w środku implementacji getJSON()
 */

function coutdownTime(ms = 1000) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, ms)
	})
}

coutdownTime(4000).then(() => {
	console.log('!')
})


const DZej = {
	getJSON(url) {
		// #Reguła:
		// Kodzik można pisać i zmieniać tylko w tym bloku.
		if (url.endsWith('/it')) {
			return Promise.resolve({ message: 'did you try?' })
		}
		return Promise.reject({ status: 404, message: 'Invalid URL!' })
	},
	// Rozwiązanie nr 2 (jeśli setTimeout by był to TYLKO TAK możemy to zrobić)
	getJSON(url) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (url.endsWith('/it')) {
					resolve({ message: 'did you try?' })
				} else {
					reject({ status: 404, message: 'Invalid URL!' })
				}
			}, 3000)
		})
	},
	async getJSON(url) {
		// await coutdownTime(4000)
		if (url.endsWith('/it')) {
			return { message: 'did you try?' }
		}
		throw { status: 404, message: 'Invalid URL!' }
	}
}


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
DZej.getJSON('https://reynholm-industries.com/it').then((ajaxResult) => {
	assertThat(
		'Should resolve with did you try message - object',
		expect => expect(ajaxResult).toEqual({ message: 'did you try?' })
	)//=
})

DZej.getJSON('https://reynholm-industries.com/not-existing').catch(err => {
	assertThat(
		'should reject with error',
		expect => expect(err).toEqual({ status: 404, message: 'Invalid URL!' })
	)//=
})

