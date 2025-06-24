/*

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

-- to samo ale inaczej zapisane: --

const response = await fetch('https://jsonplaceholder.typicode.com/users')
const json = await response.json();
console.log(json)

*/

function giveMeNumber() {
    return 800;
}

console.log(giveMeNumber())


async function giveMeNumber2() {
    return 800;
}

function giveMeNumberAsync() {
    return Promise.resolve(800);
}

giveMeNumber2().then(v => console.log(v))
giveMeNumberAsync().then(v => console.log(v))