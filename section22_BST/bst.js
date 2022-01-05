class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let nodeCheck = this.root;
        while (true) {
            if (val > nodeCheck.val) {
                if (nodeCheck.right) nodeCheck = nodeCheck.right;
                else {
                    nodeCheck.right = newNode;
                    return this;
                }
            } else if (val < nodeCheck.val) {
                if (nodeCheck.left) nodeCheck = nodeCheck.left;
                else {
                    nodeCheck.left = newNode;
                    return this;
                }
            } else { //equal
                return false;
            }
        }
    }
    find(val) {
        if (!this.root) return false;
        let thisNode = this.root
        while (true) {
            if (val === thisNode.val) return thisNode;
            if (val > thisNode.val) {
                if (!thisNode.right) return false; 
                thisNode = thisNode.right;
            } else if (val < thisNode.val) {
                if (!thisNode.left) return false;
                thisNode = thisNode.left;
            }
        }
    }
}

let BST = new BinarySearchTree();
