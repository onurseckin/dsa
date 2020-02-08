import Queue from './Queue.js';
class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v !== v1);
    }
    removeVertex(vertex){
        while(adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start){
        let visited = {};
        let result = [];
        let adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) return dfs(neighbor);
            });
        })(start);
        return result;
    }
    depthFirstIterative(start){
        let visited = {};
        let result = [];
        let stack = [start];
        let currentVertex = null;
        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    BFS(start){
        let queue = new Queue();
        queue.enqueue(start);
        let visited = {start:true};
        let result = [];
        let currentVertex = null;
       
        while(queue.length){
            currentVertex = queue.dequeue();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.enqueue(neighbor);
                }
            });
        }
        return result;
    }
}