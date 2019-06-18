function Ninja() {
    this.swing = false;
    this.swingSword = function test() {
        return !this.swing;
    }
}

Ninja.prototype.swingSword = function() {
    return this.swing;
}

const ninjaOne = new Ninja();

// The JS Engine resolves the instance method first, so it returns true
console.log(ninjaOne.swingSword());