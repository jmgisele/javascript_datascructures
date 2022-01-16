class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        if (!this.values.length) return false;
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return false; //no duplicates
        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
        return this
    }
    dijkstras(start, end) {
        //setting up 
        let distances = {}
        let pq = new PriorityQueue();
        let previous = {}
        for (let node in this.adjacencyList) {
            previous[node] = null;
            if (node === start) {
                distances[node] = 0
                pq.enqueue(start, 0)
            }
            else {
                distances[node] = Infinity
                pq.enqueue(node, Infinity)
            }
        }

        //alg
        let smallest;
        while (pq.values.length) {
            smallest = pq.dequeue().val;
            if (smallest === end) break; //we're done!
            if (smallest || distances[smallest] !== Infinity) { //there's a node and we have visited it
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    //distance to this neighbor is the distance to current node plus this neighbor's weight
                    let newDistance = distances[smallest] + nextNode.weight
                    //replace the distance to that node if it's smaller
                    if (newDistance < distances[nextNode.node]) {
                        //update shortest distance to this node
                        distances[nextNode.node] = newDistance;
                        //update previous node that is shortest path from this node
                        previous[nextNode.node] = smallest;
                        //enqueue in pq with new priority
                        pq.enqueue(nextNode.node, nextNode.weight)
                    }
                }
            }
        }
        //display results
        let path = [];
        while (previous[smallest]) {
            path.push(smallest);
            smallest= previous[smallest];
        }
        return path.concat(smallest).reverse();
    }
}


let g = new WeightedGraph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)


