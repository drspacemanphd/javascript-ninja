function Ninja() {
    this.whoAmI = function() {
        return this;
    }.bind(this);
}

var ninjaOne = new Ninja();

var ninjaTwo = {
    whoAmI: ninjaOne.whoAmI
}

// The function context is set to ninjaOne
console.log(ninjaOne.whoAmI() === ninjaOne);

// Because we are binding to this within the function constructor, the function context is always ninjaOne
console.log(ninjaTwo.whoAmI() === ninjaOne);
