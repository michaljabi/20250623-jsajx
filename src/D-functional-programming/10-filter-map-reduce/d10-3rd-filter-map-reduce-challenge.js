import { assertThat } from '../../j4b1-assert.js'
import { stringHelper } from '../../A-the-modular-js/20-import-export-variants/a20-challenge-project/czesuaf-util.js'

/**
 * d10-filter-map-reduce
 * Challenge
 *
 *  W naszej złożonej aplikacji część komponentów, potrzebuje danych w specjalnej formie,
 *  aby je poprawnie wyświetlić.
 *
 *  Postaraj się wykorzystać programowanie funkcyjne do osiągnięcia odpowiedniego formatu danych,
 *  tak aby każdy z komponentów mógł je obsługiwać.
 *
 * * Reguły:
 * - nie zmieniaj danych które przychodzą z pseud-backendu bezpośrednio na tablicy (nie ruszaj backendApiRequest)
 * - w przestrzeni tego scope muszą się zanjdować showNamesOnly, showWomanNamesOnly, showEmailsWithDomainSiteCom
 *   zawierające odpowiednio tablice z wynikami działań.
 * - zastosuj odpowiednie metody tablicowe aby uzyskać wyniki.
 */

// Nie zmieniaj tego kodu:
const backendApiRequest = () => [
	'adrian@site.com',
	'stefan@site.com',
	'jadwiga@domain.pl',
	'henryka@domain.pl',
	'anna@site.com'
];
const emailData = backendApiRequest();

// Pure functions:
// 1. same input - same output
// 2. Singular reponsibility
// 3. NO SIDE EFFECTS !
const pluckNameFromEmail = email => email.split('@')[0];
const { capitalize } = stringHelper;
const isAWomanName = name => name.toLowerCase().endsWith('a');
const endsWithSiteCom = email => email.endsWith('@site.com');

const endsWith = (domain) => (email) => email.endsWith(domain);
const endsWithDomainPl = endsWithFn('@domain.pl')
// Result: mam doskonale re-używalne mini funkcje.

function endsWithFn(domain = '') {
	return function (email = '') {
		return email.endsWith(domain)
	}
}

pluckNameFromEmail('helloMajk@gmail.com') //=
pluckNameFromEmail('janina@gmail.com') //=

endsWithFn('@gmail.com')('janina@gmail.com') //=


// jest możliwa optymalizacja (w razie czego) łamiemy regułę bo to nie Pure Function
const pluckNameFromEmailAndCapitalize = email => capitalize(pluckNameFromEmail(email))

// Tutaj możesz pisać:
// const showNamesOnly = emailData.map(pluckNameFromEmailAndCapitalize);

const showNamesOnly = emailData.map(pluckNameFromEmail).map(capitalize);
const showWomanNamesOnly = showNamesOnly.filter(isAWomanName);
const showEmailsWithDomainSiteCom = emailData.filter(endsWith('@site.com'));


// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'First component should consume data as Capitalized names',
	expect => expect(showNamesOnly).toEqual(['Adrian', 'Stefan', 'Jadwiga', 'Henryka', 'Anna'])
)  //=

assertThat(
	'Second component should consume data as Woman names only',
	expect => expect(showWomanNamesOnly).toEqual(['Jadwiga', 'Henryka', 'Anna'])
)  //=

assertThat(
	'Third component should have @site.com emails as data provided',
	expect => expect(showEmailsWithDomainSiteCom).toEqual(['adrian@site.com', 'stefan@site.com', 'anna@site.com'])
)  //=
