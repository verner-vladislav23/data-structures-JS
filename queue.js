function Queue() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        collection.push(element);
    }

    this.dequue = function() {
        collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}


function PriorityQueue() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added)
             collection.push(element);
        }
    }

    this.dequue = function() {
        let result = collection.shift();
        return result[0];
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }

}

let prqueue = new PriorityQueue();
prqueue.enqueue(['Edward Bill', 2]);
prqueue.enqueue(['Sarah Connor', 4]);
prqueue.enqueue(['Soaksad Aswisd', 3]);
prqueue.print();