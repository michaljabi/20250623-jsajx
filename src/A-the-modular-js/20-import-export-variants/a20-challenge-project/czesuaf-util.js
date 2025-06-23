import someUtil, { toSecondPower } from './main/utils/some-util.js'
import { firstLetterToUpper as capitalize } from './main/tools/tool-1.js'
import { countWords } from './main/tools/tool-2.js'
import { addNumbers, averageFrom } from './main/helpers/my-things.js'


// const lastLetter = someUtil.lastLetter;
// const numberOfChars = someUtil.numberOfChars;

const { lastLetter, numberOfChars } = someUtil;

export const stringHelper = {
    lastLetter,
    numberOfChars,
    capitalize,
    countWords, // object property shorthand
}


export const numberHelper = {
    addNumbers,
    averageFrom,
    toSecondPower
}