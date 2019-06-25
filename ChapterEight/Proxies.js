// Proxy for a function declaration
function sum(a, b) {
    return a + b;
}

const sumProxy = new Proxy(sum, {
    apply: function(target, thisArg, argsList) {
        console.log();
        console.log(target);
        console.log(thisArg);
        console.log(argsList);
        return 'me';
    }
});

const obj = {
    sum: sumProxy
}

const sumProxyTwo = sumProxy.bind(global);

// Without specifying a specific this context, you'll notice that the thisArg is undefined
// Notice that we are overwriting the return of the sum function within the 'apply' trap
console.log(sumProxy(0, 3) === 'me');

// Upon binding to the global object, thisArg is now defined
console.log(sumProxyTwo(0, 4) === 'me');

// Upon binding to the obj object, thisArg is now defined
console.log(obj.sum(1, 4) === 'me');