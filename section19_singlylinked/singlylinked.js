class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        const popVal = this.tail;
        let currentVal = this.head;
        let newTail = currentVal;
        while (currentVal.next) {
            newTail = currentVal;
            currentVal = currentVal.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return popVal;
    }
    shift() {
        if (this.length === 0) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return currentHead;

    }
    unshift(val) {
        const newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length || index < 0) return null;
        let count = 0;
        let thisVal = this.head;
        while (count < index) {
            thisVal = thisVal.next;
            count++
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
        const beforeNext = nodeBefore.next;
        nodeBefore.next = nodeToAdd;
        nodeToAdd.next = beforeNext;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const nodeBefore = this.get(index - 1);
        const nodeToRemove = nodeBefore.next;
        nodeBefore.next = nodeToRemove.next;
        this.length--;
        return nodeToRemove;
    }
    reverse() {
        let thisNode = this.head;
        this.head = this.tail;
        this.tail = thisNode;
        let nextTemp;
        let prev = null;
        for (let index = 0; index < this.length; index++) {
            nextTemp = thisNode.next
            thisNode.next = prev;
            prev = thisNode;
            thisNode = nextTemp;
        }
        return this;
    }
    reverseRecurs(pre = null, curr = this.head) {
        if (curr.next) this.reverseRecurs(curr, curr.next)
        else {
            this.tail = this.head;
            this.head = curr;
        }
        curr.next = pre;
    }
}


const list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);

