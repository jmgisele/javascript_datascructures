class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        const popVal = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popVal.prev;
            this.tail.next = null;
            popVal.prev = null; //deleting connection to list
        }
        this.length--;
        return popVal;
    }
    shift() {
        if (this.length === 0) return undefined;
        const currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }
    unshift(val) {
        const newHead = new Node(val);
        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length || index < 0) return null;
        if (index === this.length - 1) return this.tail;
        if (index === 0) return this.head;
        let count, thisVal;
        if (index <= this.length / 2) { //it's in the first half
            count = 0
            thisVal = this.head
            while (count < index) {
                thisVal = thisVal.next;
                count++;
            }
        } else {
            count = this.length - 1
            thisVal = this.tail
            while (count > index) {
                thisVal = thisVal.prev;
                count--;
            }
        }
        return thisVal;
    }
    set(val, index) {
        const valToChange = this.get(index);
        if (!valToChange) return false;
        valToChange.val = val;
        return true;
    }
    insert(val, index) {
        if (index > this.length || index < 0) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        const nodeToAdd = new Node(val);
        const nodeBefore = this.get(index - 1);
        const nodeAfter = nodeBefore.next;
        nodeBefore.next = nodeToAdd;
        nodeAfter.prev = nodeToAdd;
        nodeToAdd.next = nodeAfter;
        nodeToAdd.prev = nodeBefore;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const nodeToRemove = this.get(index);
        const nodeBefore = nodeToRemove.prev;
        const nodeAfter = nodeToRemove.next;
        nodeBefore.next = nodeAfter;
        nodeAfter.prev = nodeBefore;
        nodeToRemove.prev = null;
        nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
    }
    reverse() {
        if (this.length === 0) return undefined;
        if (this.length === 1) return this;
        else {
            let current = this.head;
            this.head = this.tail;
            this.tail = current;

            let prev = null;

            while (current) {
                let next = current.next;
                current.next = prev;
                current.prev = next;
                prev = current;
                current = next;
            }
            return this;
        }
    }
}


const list = new DoublyLinkedList()
list.push(5).push(10).push(15).push(20)
