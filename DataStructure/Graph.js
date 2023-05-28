class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Connect two vertex
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Remove connect two vertex
  removeEgde(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // Dùng Filter => Good
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);

      // Dùng Slice and Concat
      //   const indexVertex1 = this.adjacencyList[vertex1].indexOf(vertex2);
      //   const indexVertex2 = this.adjacencyList[vertex2].indexOf(vertex1);
      //   console.log(indexVertex1, indexVertex2);
      //   if (indexVertex1 >= 0 || indexVertex2 >= 0) {
      //     this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
      //       .slice(0, indexVertex1)
      //       .concat(this.adjacencyList[vertex1].slice(indexVertex1 + 1, this.adjacencyList[vertex1].length));
      //     this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
      //       .slice(0, indexVertex2)
      //       .concat(this.adjacencyList[vertex2].slice(indexVertex2 + 1, this.adjacencyList[vertex1].length));
      //   }
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    const lengthVertex = this.adjacencyList[vertex].length;
    const edgeOfVertex = this.adjacencyList[vertex];
    for (let i = 0; i < lengthVertex; i++) {
      this.removeEgde(vertex, edgeOfVertex[i]); // Cách 1;
      //   this.removeEgde(vertex, this.adjacencyList[vertex].pop());// Cách 2;
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursion(start) {
      
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("HaNoi");
graph.addVertex("LaoCai");
graph.addVertex("TrungQuoc");
graph.addVertex("SaiGon");
graph.addEdge("Tokyo", "HaNoi");
graph.addEdge("Tokyo", "TrungQuoc");
graph.addEdge("Tokyo", "SaiGon");
graph.addEdge("Tokyo", "LaoCai");
graph.addEdge("TrungQuoc", "LaoCai");
console.log(graph);
// graph.removeEgde("Tokyo", "TrungQuoc");
// graph.removeEgde("Tokyo", "HaNoi");
// console.log(graph);
graph.removeVertex("Tokyo");
console.log(graph);
