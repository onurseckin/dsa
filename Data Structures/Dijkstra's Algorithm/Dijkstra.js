//PriorityQueueNaive
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enq(value, priority){
        this.values.push({value,priority});
        this.sort();
    }
    deq(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node:v2, weight});
        this.adjacencyList[v2].push({node:v1, weight});
    }
    Dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enq(vertex,0);
            } else {
                distances[vertex] = Infinity;
                nodes.enq(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.deq().value;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got the neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}










