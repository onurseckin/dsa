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
