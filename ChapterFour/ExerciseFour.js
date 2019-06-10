var ninjaOne = {
    whoAmI: function() {
        return this;
    }
}

var ninjaTwo = {
    whoAmI: ninjaOne.whoAmI
}

var identify = ninjaTwo.whoAmI;

// Function invoked as object method has function context set to that object
console.log(ninjaOne.whoAmI() === ninjaOne);

// Still invoked as object method, even though the function is a reference to one that is referenced by ninjaOne
console.log(ninjaTwo.whoAmI() === ninjaTwo);

// The function is invoked in the global context, even though the function is a reference to a function that is also referenced by an object method
console.log(identify() === global);

// We can set the function context of an object's method to another object
console.log(ninjaOne.whoAmI.call(ninjaTwo) === ninjaTwo);