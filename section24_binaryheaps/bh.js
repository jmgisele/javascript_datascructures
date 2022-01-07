class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(val) {
        this.values.push(val);
        let i = this.values.length - 1
        let parentIndex = Math.floor((i - 1) / 2)
        while (this.values[i] > this.values[parentIndex]) {
            this.swap(i, parentIndex)
            i = parentIndex;
            parentIndex = Math.floor((i - 1) / 2);
        }
        return this;
    }
    extractMax() {
        if (!this.values.length) return;
        this.swap(0, this.values.length - 1);
        const oldNode = this.values.pop();

        //trickle down
        let parent = 0, childLeft = 1, childRight = 2;
        //Math.max returns NaN is one of the arguments is undefined
        let max = Math.max(this.values[childLeft], this.values[childRight] || -Infinity);

        while (this.values[parent] < max) {

            let child = this.values[childLeft] === max ? childLeft : childRight;
            this.swap(parent, child);
            parent = child;

            childLeft = parent * 2 + 1;
            childRight = parent * 2 + 2;
            max = Math.max(this.values[childLeft], this.values[childRight] || -Infinity);
        }
        return oldNode;
    }
    swap(a, b) {
        [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
    }
}

let values = new MaxBinaryHeap();
values.insert(41);
values.insert(39);
values.insert(33);
values.insert(18);
values.insert(27);
values.insert(12);
values.insert(55);
values.insert(44);
values.insert(40);
values.insert(9);
values.insert(10);
values.insert(45);

