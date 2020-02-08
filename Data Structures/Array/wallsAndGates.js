/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    for(let i = 0; i<rooms.length; i++)
        for(let j = 0; j<rooms[i].length; j++)
            if(rooms[i][j] === 0)
                dfs(i,j,0,rooms);
};

var dfs = function(row, col, count, rooms){
    if(row < 0 || col < 0 || row >= rooms.length || col >= rooms[row].length || rooms[row][col]<count) return;
    rooms[row][col] = count;
    dfs(row+1, col, count+1,rooms);
    dfs(row, col+1, count+1,rooms);
    dfs(row-1, col, count+1,rooms);
    dfs(row, col-1, count+1,rooms);
}