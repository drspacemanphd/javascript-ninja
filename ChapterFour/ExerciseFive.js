function Ninja() {
    this.whoAmI = () => this;
}

var ninjaOne = new Ninja();

var ninjaTwo = {
    whoAmI: ninjaOne.whoAmI
}

// Arrow functions have their context set at definitition. Here the context is within the constructor function, so it is the object
console.log(ninjaOne.whoAmI() === ninjaOne);

// Still within the constructor function, even though invocation is as an object's method
console.log(ninjaTwo.whoAmI() === ninjaOne);

