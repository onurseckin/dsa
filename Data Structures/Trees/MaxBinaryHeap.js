class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        let index = this.values.length-1;
        while(index>0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMax(){
        const swap = (a,b,v=this.values) => [v[a],v[b]]=[v[b],v[a]];
        const length = this.values.length
        swap(0,length-1);
        let extracted = this.values.pop();
        let parentIndex = 0;
        let leftIndex = 1;
        let rightIndex = 2;
        while(leftIndex < length || rightIndex < length){
            if(this.values[leftIndex] > this.values[parentIndex] || this.values[rightIndex] > this.values[parentIndex]){
            if(this.values[leftIndex] > this.values[rightIndex]){
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);



// 41,39,33,18,27,12




