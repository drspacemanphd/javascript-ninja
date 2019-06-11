var feint = 2;
let feintTwo = 2;

function Ninja() {
    var feint = 0;
    let feintTwo = 0;
    this.feint = function () {
        feint++;
    }
    this.feintTwo = function () {
        feintTwo++;
    }
    this.getFeint = function () {
        return feint;
    }
    this.getFeintTwo = function () {
        return feintTwo;
    }
}

var ninjaOne = new Ninja();
console.log(ninjaOne.getFeint());
console.log(ninjaOne.getFeintTwo());