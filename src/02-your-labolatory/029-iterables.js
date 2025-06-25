const simplest = 'HELLO WORLD'

console.log(simplest[0])
console.log(simplest[100])
console.log(simplest.length)
console.log(simplest[10])

for (const item of simplest) {
    console.log(item);
}


const simple = [1, 2, 3, 4, 'A', true];

simple.forEach((e, idx) => {
    console.log(e);
    console.log(idx);
})

for (let idx = 0; idx < simple.length; idx++) {
    console.log(simple[idx]);
    console.log(idx);
}

for (const item of simple) {
    console.log(item);
}

// Do czego służy pętla for...in
for (const item in simple) {
    console.log(item);
}
// odp: DO OBIEKTÓW ! innych niż Array!

const user = { name: "Michał", 1: 'hello' }

for (const myKey in user) {
    console.log(myKey)
}

const arrayLike = { 0: 'a', 1: 'b', length: 2 };

for (const values of Array.from(arrayLike)) {
    console.log(values);
}

const arrayLike2 = {
    0: 'a', 1: 'b', length: 2, *[Symbol.iterator]() {
        yield this[0];
        yield this[1];
    }
};

// to nie zadziała bo brakuje [Symbol.iterator]
// TODO. dostarcz Symbol.iterator + generator - żeby działało!
for (const values of [...arrayLike2]) {
    console.log(values);
}

// Obiekty ArrayLike w przeglądarce
// Array.from(document.querySelectorAll('a')).map(() => 'troll')
// [...document.querySelectorAll('a')].map(() => 'troll')