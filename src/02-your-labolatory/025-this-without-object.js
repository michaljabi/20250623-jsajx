// "use strict";
// ponieważ w package.json jest "type":"module" to KAŻDY plik .js z automatu jest "use strict" !!!;
// czyli uruchamia się w tzw. strict mode

// bez strict mode -> pod this bedzie window / global (A.K.A globalThis)
// 

function sayYourName(a) {
    // mySample = 10; // patrz: konsekwencja 2 (ten sam case - jeśli nie strict mode!)
    console.log(this);
    console.log(a)
    return this.fullName;
}

// sayYourName()

// sayYourName.call({ fullName: 'cześć' }, 90 )
// sayYourName.apply({ fullName: 'cześć' }, [90] )

const newRef = sayYourName.bind({ fullName: 'Michał' });

// newRef(900);

// sayYourName()


// kosekwencja 2:
mySample = 10;



console.log(mySample);

// wyjaśnienie: zapis bez użycia let/var/const doprowadza do wycieku mySample do przestrzeni globalnej
console.log('from global', global.mySample);
console.log('from global', globalThis.mySample);