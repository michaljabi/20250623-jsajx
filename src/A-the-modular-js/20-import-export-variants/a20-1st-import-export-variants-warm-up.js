import { assertThat } from '../../j4b1-assert.js'
import $a_A45, { mySecretConstant, assertThat as aT } from './a20-1st-helper.js'

/**
 * a20-import-export-variants
 * Warm up
 *
 * Napraw kod wykorzystując plik ./a20-helper.js
 *
 * * Reguły:
 * - nie możesz edytować istniejącego kodu
 * - możesz usuwać istniejący kod
 * - musisz wykorzystać plik ./a20-1st-helper
 * - możesz dodawać kod w obydwu plikach - jednak wykluczając słowa kluczowe: let, const
 */

// const mySecretConstant = 'wrong way!';
console.log('start')

// #Reguła:
// Nie możesz zmieniać kodu poniżej:
assertThat(
	'it should have secret value from other ./a20-1st-helper file',
	expect => expect(mySecretConstant).toBe('HELLO $ecr3t...')
)  //=
