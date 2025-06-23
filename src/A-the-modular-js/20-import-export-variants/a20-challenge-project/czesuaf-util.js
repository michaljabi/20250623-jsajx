import someUtil, { toSecondPower } from './main/utils/some-util.js'
import { firstLetterToUpper } from './main/tools/tool-1.js'
import { countWords } from './main/tools/tool-2.js'
import { addNumbers, averageFrom } from './main/helpers/my-things.js'


export const stringHelper = {
    lastLetter: someUtil.lastLetter,
    numberOfChars: someUtil.numberOfChars,
    capitalize: firstLetterToUpper,
    countWords, // object property shorthand
}


export const numberHelper = {
    addNumbers: addNumbers,
    averageFrom,
    toSecondPower
}