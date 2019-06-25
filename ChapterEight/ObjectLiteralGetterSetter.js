const obj = {
    fizz: 'fizz',
    get getFizz() {
        console.log('GETTING FUZZ');
        return this.fizz;
    },
    set setFizz(fizz) {
        console.log('SETTING FUZZ');
        this.fizz = fizz
    },
}
console.log(obj.getFizz);
obj.setFizz = 'buzz';
console.log(obj.getFizz === 'buzz')