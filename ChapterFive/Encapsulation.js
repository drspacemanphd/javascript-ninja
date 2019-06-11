function Ninja() {
    var feint = 0;
    this.getFeint = () => feint;
    this.feint = () => ++feint;
}

var ninjaOne = new Ninja();
console.log(ninjaOne.getFeint() === 0);
ninjaOne.feint();
ninjaOne.feint();
console.log(ninjaOne.getFeint() === 2);

var ninjaTwo = new Ninja();
console.log(ninjaTwo.getFeint() === 0);

console.log(typeof ninjaOne.feint === 'function');
console.log(typeof ninjaTwo.feint === 'function');