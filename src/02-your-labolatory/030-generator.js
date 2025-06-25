function giveMeNumber() {
    return 800;
}


console.log(giveMeNumber())


function* giveMeNumberAsync() {

    yield 1;
    yield 2;
    yield 3;

    return 800;
}

console.log(giveMeNumberAsync())
console.log(giveMeNumberAsync().next())
console.log(giveMeNumberAsync().next())
console.log(giveMeNumberAsync().next())
console.log(giveMeNumberAsync().next())

const genRef = giveMeNumberAsync();

console.log(genRef.next());
console.log(genRef.next());
console.log(genRef.next());

export { };


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
function* endlessGenerator() {
    for (let x = 100; ; x += 3) {
        yield x;
    }
}

const iterator = endlessGenerator();


iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=
iterator.next() //=