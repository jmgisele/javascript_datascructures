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
    dfsOnePre(val) {
        if (!this.root) return false;
        let found = false;
        let traverse = (node) => {
            if (!!found) return;
            if (node.val === val) {
                found = node;
                return;
            }
            for (let child of node.children) {
                traverse(child);
            }
        };
        traverse(this.root);
        return found;
    }

    dfInsertPre(val, parentVal = null) {
        if (!this.root) {
            //first insert
            this.root = new TreeNode(val);
            this.size++;
            return this;
        }
        if (parentVal === null) {
            //new head
            let temp = this.root;
            this.root = new TreeNode(val);
            this.root.children = [temp];
            this.size++;
            return this;
        }
        let parent = this.dfsOnePre(parentVal);
        if (parent === false) return false; //no node with parent val
        parent.children = [...parent.children, new TreeNode(val)];
        this.size++;
        return this;
    }
    dfsAllPre() {
        let data = [];
        if (!this.root) return data;
        let traverse = (node) => {
            data = [...data, node.val];
            for (let child of node.children) {
                traverse(child);
            }
        };
        traverse(this.root);
        return data;
    }
    dfsAllPost() {
        let data = [];
        if (!this.root) return data;
        let traverse = (node) => {
            for (let child of node.children) {
                traverse(child);
            }
            data = [...data, node.val];
        };
        traverse(this.root);
        return data;
    }
    dfsOnePost(val) {
        if (!this.root) return false;
        let found = false;
        let traverse = (node) => {
            for (let child of node.children) {
                if (!!found) return;
                traverse(child);
            }
            if (node.val === val) {
                found = node;
                return;
            }
        };
        traverse(this.root);
        return found;
    }
    dfsAllInOrder() {
        let data = [];
        if (!this.root) return data;
        let traverse = (node) => {
            if (node == null) return;
            for (let i = 0; i < node.children.length - 1; i++) {
                traverse(node.children[i]);
            }
            data = [...data, node.val];
            traverse(node.children[node.children.length - 1]);
        };
        traverse(this.root);
        return data;
    }
}

let tree = new Tree();
tree.dfInsertPre(10);
tree.dfInsertPre(6, 10);
tree.dfInsertPre(15, 10);
tree.dfInsertPre(3, 6);
tree.dfInsertPre(8, 6);
tree.dfInsertPre(20, 15);
