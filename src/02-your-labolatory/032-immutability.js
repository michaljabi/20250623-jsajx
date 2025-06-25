
// Prtimitive type jest zawsze IMMUTABLE (zwłaszcza jeśli const!)
const x = 1;

console.log(x);

// x = 2;

// vs Objects:

let user = {
    name: 'Michał'
}

let user2 = user;

// MUTABLE !!!!!!
user.lastName = 'Kowalski'


user = null;
user2 = null;

console.log(user);

console.log(user2);