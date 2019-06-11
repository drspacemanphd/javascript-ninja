function Ninja() {
    this.whoAmI = function() { return this; }
    this.whoAmIArrow = () => this;
}

var ninjaOne = new Ninja();

var ninjaTwo = {
    whoAmI: ninjaOne.whoAmI,
    whoAmIArrow: ninjaOne.whoAmIArrow,
}

console.log(ninjaOne.whoAmI() === ninjaOne);

// Arrow functions have their context set at definitition. Here the context is within the constructor function, so it is the object
console.log(ninjaOne.whoAmIArrow() === ninjaOne);

// Function context is ninjaTwo because the ninjaTwo whoAmI property simply references the same function referenced by whoAmI in Ninja constructor function
console.log(ninjaTwo.whoAmI() === ninjaTwo);

// Still within the constructor function, even though invocation is as an object's method
console.log(ninjaTwo.whoAmIArrow() === ninjaOne);