function mySet() {
    let collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    this.values = function() {
        return collection;
    }

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = function(element) {
        if (!this.has(element)) {
            collection.splice(collection.indexOf(element), 1);
        }
    }

    this.size = function() {
        return collection.length;
    }

    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function(element) {
            unionSet.add(element);
        })
        secondSet.forEach(function(element) {
            unionSet.add(element);
        })
        return unionSet;
    }

    this.intersection = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function(element) {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        })
        return differenceSet;
    }

    this.subset = function(otherSet) {
        let firstSet = this.value();
        return firstSet.every(function(element) {
            return otherSet.has(element);
        })
    }
}
