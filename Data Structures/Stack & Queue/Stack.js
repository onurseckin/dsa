class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null
        this.last = null;
        this.size = 0;
    }
    
    push(value){
        let newNode = new Node(value);
        if(!this.size){
            this.first = newNode;
            this.last = newNode;
        } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.size) return null;
        let poppedNode = this.first;
        if(this.size===1){
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return poppedNode.value;
    }
}





