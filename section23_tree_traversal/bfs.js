//queue
const { Node, Queue } = require("../section21_stack_queue/queue");

class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    bfsOne(val) {
        let q = new Queue();
        q.enqueue(this.root);
        while (q.size > 0) {
            let thisNode = q.dequeue();
            if (thisNode.val === val) return thisNode;
            for (let node of thisNode.children) {
                q.enqueue(node);
            }
        }
        return false
    }
    bfInsert(val, parentVal = null) {
        if (!this.root) { //first insert
            this.root = new TreeNode(val)
            this.size++;
            return this;
        }
        if (parentVal === null) { //new head
            let temp = this.root;
            this.root = new TreeNode(val);
            this.root.children = [temp];
            this.size++;
            return this;
        }
        let parent = this.bfsOne(parentVal);
        if (parent === false) return false; //no node with parent val
        parent.children = [...parent.children, new TreeNode(val)];
        this.size++;
        return this;
    }
    bfsAll() {
        if (!this.root) return [];
        let q = new Queue();
        q.enqueue(this.root);
        let list = [];
        while (q.size > 0) {
            let thisNode = q.dequeue();
            list = [...list, thisNode.val];
            for (let node of thisNode.children) {
                q.enqueue(node);
            }
        }
        return list;
    }

}

let BST = new Tree();
BST.bfInsert(1)
BST.bfInsert(2,1)
BST.bfInsert(3,1)
BST.bfInsert(4,1)
BST.bfInsert(5,2)
BST.bfInsert(6,2)
BST.bfInsert(7,3)
BST.bfInsert(8,7)
BST.bfInsert(9,8)
BST.bfInsert(10,8)
BST.bfInsert(11,10)
BST.bfInsert(12, 800)


