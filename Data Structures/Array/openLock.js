/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 
 /*You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. 
 The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. 
 Each move consists of turning one wheel one slot.
The lock initially starts at '0000', a string representing the state of the 4 wheels.
You are given a list of deadends dead ends, meaning if the lock displays any of these codes, 
the wheels of the lock will stop turning and you will be unable to open it.
Given a target representing the value of the wheels that will unlock the lock, 
return the minimum total number of turns required to open the lock, or -1 if it is impossible.*/
var openLock = function(deadends, target) {
    let deadEnds = new Set(deadends);
    let visited = new Set();
    visited.add("0000");
    let q = ["0000"];
    let level = 0;
    while(q.length !== 0){
        let size = q.length;
        while(size > 0){
            let lockPosition = q.shift();
            if(deadEnds.has(lockPosition)){
                size--;
                continue;
            }
            if(lockPosition == target) return level;
            let s = lockPosition.slice(0);
            for(let i = 0 ; i < 4; i++){
                let digit = Number(s.charAt(i));
                let s1 = s.substring(0,i) + (digit === 9 ? 0 : digit+1) + s.substring(i+1);
                let s2 = s.substring(0,i) + (digit === 0 ? 9 : digit-1) + s.substring(i+1);
                if(!visited.has(s1) && !deadEnds.has(s1)){
                    q.push(s1);
                    visited.add(s1);
                }
                if(!visited.has(s2) && !deadEnds.has(s2)){
                    q.push(s2);
                    visited.add(s2);
                }
               
            }
            size--;
        }
        level++;
    }
    return -1;
}