//in general this doesn't handle duplicates etc!! need to implement that
//on your own, future me

class UndirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return false; //no duplicates
        this.adjacencyList[vertex] = [];

    }
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        return this
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
        return this

    }
    removeVertex(vertex) {
        for (let v of this.adjacencyList[vertex]) this.removeEdge(vertex, v);
        delete this.adjacencyList[vertex];
        return this
    }
    depthFirstSearchIter(start, Stack = [], visited = {}, results = []) {
        Stack.push(start);
        while (Stack.length > 0) {
            let vertex = Stack.pop()
            if (!visited[vertex]) {
                visited[vertex] = true;
                results.push(vertex);
                for (let neighbor of this.adjacencyList[vertex]) {
                    Stack.push(neighbor)
                }
            }
        }
        return results
    }

    depthFirstSearchRecurs(start, resultsList = [], visited = {}) {
        if (this.adjacencyList[start].length === 0) return;
        resultsList.push(start);
        visited[start] = true;
        for (let neighbor of this.adjacencyList[start]) {
            if (!visited[neighbor]) this.depthFirstSearchRecurs(neighbor, resultsList, visited)
        }
        return resultsList
    }

    breadthFirstSearch() {

    }
}


let g = new UndirectedGraph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
