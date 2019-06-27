const objOne = {
    "key": 1
}

const objTwo = {
    "key": 1
}

const map = new Map();
map.set(objOne, 1);
map.set(objTwo, 2);

// The below will console 1
console.log(map.get(objOne));

// The below will console 2
// While objOne and objTwo look the same, they are different objects with different memory locations
// As such, map.get(objOne) and map.get(objTwo) return different values because JS treats the keys as different
// Unlike in Java, you cannot override the equals method!
console.log(map.get(objTwo));