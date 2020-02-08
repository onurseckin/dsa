// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null; 
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    getByIndex(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    setByIndex(index,val){
        let foundNode = this.getByIndex(index);
        if(!foundNode) return false;
        foundNode.val = val;
        return true;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let prev = this.getByIndex(index-1);
        let furtherNode = prev.next;
        prev.next = newNode;
        newNode.next = furtherNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();
        
        let prev = this.getByIndex(index-1);
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.length--;
        return removeNode;
    }
    // deleting with two pointer technique
    deleteAtIndex(index) {
    if(index < 0 || index >= this.length) return false;
    let counter = 0;
    let current = this.head;
    let prev;
    while(counter < index){
        prev = current;
        current = current.next;
        counter++;
    }
    prev.next = current.next;
    this.length--;
}
    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let before = null;
        let after = null;

        while(current){
            after = current.next;
            current.next = before;
            before = current;
            current = after;
        }
        return this;
    }
    printForDebug(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}


