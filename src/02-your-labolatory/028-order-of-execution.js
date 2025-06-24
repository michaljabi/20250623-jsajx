setTimeout(() => {
    console.log('I am 1')
})
setTimeout(() => {
    console.log('I am 1.2')
})

Promise.resolve().then(() => {
    console.log('I am 2.1')
})

Promise.resolve().then(() => {
    console.log('I am 2.2')
})

queueMicrotask(() => {
    console.log('I am 2.3')
})

console.log('I am 3rd')

console.log('I am 3.1')
