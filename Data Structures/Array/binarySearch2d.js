function binarySearch2d(arr, searchElement){
    let r = arr.length; // ROW Count
    let c = arr[0].length; // Column Count
    let start = 0; // Initialize with the 0
    let end = r*c-1; // Last Index
        while(start <= end){
    let mid = (start+end)/2;
    let midX = Math.floor(mid/c);
    let midY = Math.floor(mid%c);
        if(arr[midX][midY] == searchElement){
            console.log("found at "+ midX + " " + midY);
            return true;
        }
        if(arr[midX][midY] < searchElement)
            start = mid+1;
        else
            end = mid-1;
    }
    return false;
}
