//find element in sorted matrix
function findElement( matrix, value){
    let rows = matrix.length;
    let columns = matrix[0].length;
    let r = rows - 1;
    let c = 0;
    
    while(r >= 0 && c < columns){
        if(matrix[r][c] == value){
            console.log("Found at "+r+" "+ c);
            return true;
        }
        if(matrix[r][c] > value)
            r--;
        else
            c++;
    }
    return false;
}
















