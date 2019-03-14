//Linked list

function LinkedList(){
    let length = 0;
    let head = 0;

    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    this.size = function() {
        return length;
    }

    this.head = function() {
        return head;
    }

    this.add = function(element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }

        length++;
    }

    this.remove = function(element) {
        let currentNode = head;
        let previousNode;
        if (currentNode.element = element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.indexOf = function(element) {
        let currentNode = head;
        let index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            } 
            currentNode = currentNode.next;
        }
        
        return -1;
    }

    this.elementAt = function(index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

    this.addAt = function(index, element) {
        if (index >= length || index < 0) return false;

        let node = new Node(element);

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    this.removeAt = function(index) {
        if (index >= length || index < 0) return false;

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentIndex;
                currentNode = currentIndex.next;
            }
            previousNode.next = currentIndex.next;
        }
        length--;
    }
}

let list = new LinkedList();
list.add('Vladislav');
list.add('Katy');
list.add(5);
console.log(list.indexOf(5));