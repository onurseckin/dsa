class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(value){
        let newNode = new Node(value);
        if(!this.size){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.size) return null;
        let oldHead = this.head;
        this.head = this.head.next;
        if(!this.size){
            this.tail = null;
        }
        this.length--;
        return oldHead.value;
    }
}
export default Queue;