function getSamurai(samurai) {
    'use strict';
    arguments[0] = 'Ishida';
    return samurai;
}

function getNinja(ninja) {
    arguments[0] = 'Fuma';
    return ninja;
}

// The below is true because in strict mode arguments elements do not alias passed in arguments
console.log(getSamurai('Samurai') === 'Samurai');

// Without strict mode, we can modulate the passed-in arguments via the arguments object
console.log(getNinja('Ninja') === 'Fuma');