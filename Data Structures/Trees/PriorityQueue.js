class Node {
    constructor(value,priority){
        this.value = value;
        this.p = priority;
    }
}
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value,priority){
        let newNode = new Node(value,priority);
        this.values.push(newNode);
        let index = this.values.length-1;
        while(index>0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(newNode.p >= parent.p) break;
            this.values[parentIndex] = newNode;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    dequeue(){
        const swap = (a,b,v=this.values) => [v[a],v[b]]=[v[b],v[a]];
        const length = this.values.length
        swap(0,length-1);
        let extracted = this.values.pop();
        let parentIndex = 0;
        let leftIndex = 1;
        let rightIndex = 2;
        while(leftIndex < length || rightIndex < length){
            if(this.values[leftIndex].p < this.values[parentIndex].p || this.values[rightIndex].p < this.values[parentIndex].p){
            if(this.values[leftIndex].p < this.values[rightIndex].p){
                swap(leftIndex,parentIndex);
                 parentIndex = leftIndex;
            } else {
                swap(rightIndex,parentIndex);
                parentIndex = rightIndex;
            }
            leftIndex = 2*parentIndex+1;
            rightIndex = 2+parentIndex+2;
            } else break;
        }
        return extracted;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)






