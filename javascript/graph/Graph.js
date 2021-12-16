class Vertex {
    constructor(value) {
      this.value = value;
    }
  }
  
  class Edge {
    constructor(vertex, weight = 0) {
      this.vertex = vertex;
      this.weight = weight;
    }
  }
  
  class Graph {
    constructor() {
      this._adjacentList = new Map();
    }
    addVertex(vertex) {
      this._adjacentList.set(vertex, []);
      return vertex;
    }
    addDirectedEdge(startVertex, endVertex) {
      if (
        !this._adjacentList.has(startVertex) ||
        !this._adjacentList.has(endVertex)
      ) {
        return "Invalid vertex";
      }
      const adjacencies = this._adjacentList.get(startVertex);
      adjacencies.push(new Edge(endVertex));
    }
    printAll() {
      let str = "";
      for (const [vertex, edge] of this._adjacentList.entries()) {
        let edg;
        if (edge[0]) {
          edg = "";
          for (let i = 0; i < edge.length; i++) {
            edg += `${edge[i].vertex.value},`;
          }
        } else {
          edg = edge;
        }
        str = str + ` Vertex ${vertex["value"]} => edge ${edg} ||`;
      }
      return str;
    }
  
    getNeighbors(node) {
      for (const [vertex, edge] of this._adjacentList.entries()) {
        if (vertex === node) {
          return edge;
        }
      }
    }
  
    getGraphByNode(node) {
      if (this._adjacentList.has(node)) {
        return this.printAll();
      }
    }
  
    size() {
      if (this._adjacentList.size > 0) {
        return this._adjacentList.size;
      } else {
        return null;
      }
    }
  }
  
  module.exports = { Graph, Vertex, Edge };