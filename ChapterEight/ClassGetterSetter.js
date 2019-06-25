class Ninja {
    constructor(fizz) {
        this.fizz = fizz
    }

    whoAmI() {
        return 'A Ninja';
    }

    // These also get put on the Ninja Prototype as methods, but getFizz becomes a property of an instance such that any instance's fizz value can be obtained
    get getFizz() {
        return this.fizz;
    }

    set setFizz(fizz) {
        this.fizz = fizz;
    }
}

const ninja = new Ninja('fizz');
console.log(ninja.getFizz === 'fizz');
ninja.setFizz = 'buzz';
console.log(ninja.getFizz === 'buzz');

console.log(Ninja.prototype.whoAmI !== undefined);
