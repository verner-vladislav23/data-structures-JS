
let Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if (this.count === 0) return undefined;

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];

        return result;
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(5);

console.log(stack.size());
<<<<<<< HEAD
console.log(stack.peek())
=======
console.log(stack.peek())
>>>>>>> 34bff7893d4a4c549e95a429741c540eef996655
