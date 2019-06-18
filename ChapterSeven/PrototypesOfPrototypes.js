function Test() {
    this.test = 'test';
}

function AnotherTest() {
    return 'anotherTest';
}

var aThirdTest = function () {
    return this;
}

var aFourthTest = () => {
    return this;
}

var obj = {
    aSixthTest: function () {
        return this;
    }
}

obj.aSeventhTest = function () {
    return this;
}

Test.prototype.anotherTest = AnotherTest;
Test.prototype.aThirdTest = aThirdTest;
Test.prototype.aFourthTest = aFourthTest;
Test.prototype.aFifthTest = function () {
    return this;
}
Test.prototype.aSixthTest = obj.aSixthTest;
Test.prototype.aSeventhTest = obj.aSeventhTest;

const test = new Test();

// AnotherTest is a function declaration, so it has a AnotherTest prototype
console.log(Test.prototype.anotherTest.prototype); // => AnotherTest {}
console.log(Test.prototype.anotherTest.prototype === AnotherTest.prototype) // => true
console.log();

// aThirdTest is a functionalExpression so it has a aThirdTest prototype
console.log(Test.prototype.aThirdTest.prototype); // => aThirdTest {}
console.log(Test.prototype.aThirdTest.prototype === aThirdTest.prototype);
console.log();

// aFourthTest will have undefined for its prototype because prototypes are NOT created for arrow fxns
console.log(Test.prototype.aFourthTest.prototype); // => undefined
console.log();

// aFifthTest is a property dynamically created on the Test.prototype object, so it has it's own prototype but it isn't named
console.log(Test.prototype.aFifthTest.prototype); // => {}
console.log(Test.prototype.aFifthTest.prototype.constructor.name === '');
console.log();

// aSixthTest is a functional expression that is the value reference by an object literal's property. It will have aSixthTest prototype
console.log(Test.prototype.aSixthTest.prototype); // => aSixthTest {}
console.log(Test.prototype.aSixthTest.prototype === obj.aSixthTest.prototype);
console.log();

// aSeventhTest is a property dynamically created on the Test.prototype object, so it will have it's own unnamed prototype
console.log(Test.prototype.aSeventhTest.prototype); // => {}
console.log(Test.prototype.aSeventhTest.prototype.constructor.name === '');
console.log();