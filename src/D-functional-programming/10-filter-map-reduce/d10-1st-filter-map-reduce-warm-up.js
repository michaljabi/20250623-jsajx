import { assertThat } from '../../j4b1-assert.js'
import { stringHelper } from '../../A-the-modular-js/20-import-export-variants/a20-challenge-project/czesuaf-util.js'
/**
 * d10-filter-map-reduce
 * Warm up
 *
 * Zamiana kejsów!
 *
 * * Reguły:
 * - Dopisz brakujące metody
 * - Transformując dane staraj się korzystać z programowania funkcyjnego (metody tablicowe)
 */

const splitToWords = (sentence = '', splitter = '-') => sentence.split(splitter);

function capitalize(sentence) {
	return splitToWords(sentence, ' ').map((w, idx) => {
		if (idx === 0) {
			return stringHelper.capitalize(w);
		}
		return w.toLowerCase();
	}).join(' ');
}

function kebabCaseToCamelCase(sentence) {
	return splitToWords(sentence).map((w, idx) => {
		if (idx === 0) {
			return w.toLowerCase();
		}
		return stringHelper.capitalize(w);
	}).join('');
}

function kebabCaseToPascalCase(sentence) {
	return splitToWords(sentence).map((w) => stringHelper.capitalize(w)).join('');
}

function kebabCaseToSnakeCase(sentence) {
	return splitToWords(sentence).map(w => w.toLocaleLowerCase()).join('_');
}

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'capitalize > should make first letter to uppercase',
	expect => expect(capitalize('this is it')).toBe('This is it')
)  //=
assertThat(
	'kebabCaseToCamelCase > Should convert string hello-world in to helloWorld',
	expect => expect(kebabCaseToCamelCase('hello-world')).toBe('helloWorld')
)  //=
assertThat(
	'kebabCaseToPascalCase > Should convert string my-super-world in to MySuperWorld',
	expect => expect(kebabCaseToPascalCase('my-super-world')).toBe('MySuperWorld')
)  //=
assertThat(
	'kebabCaseToSnakeCase > Should convert string my-first-python-variable in to my_first_python_variable',
	expect => expect(kebabCaseToSnakeCase('my-first-Python-variable')).toBe('my_first_python_variable')
)  //=
