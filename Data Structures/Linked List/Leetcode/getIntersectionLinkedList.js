
var getIntersection = function(head) {
    let slow = head;
    let fast = head;
    while( slow!= null && slow.next!= null){
        if(fast == null || fast.next == null) return null;
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return slow;
    }
    return null;
};





    var detectCycle = function(head) {
        if (head == null) {
            return null;
        }

        // If there is a cycle, the fast/slow pointers will intersect at some
        // node. Otherwise, there is no cycle, so we cannot find an entrance to
        // a cycle.
        let intersection = getIntersection(head);
        if (intersection == null) {
            return null;
        }

        // To find the entrance to the cycle, we have two pointers traverse at
        // the same speed -- one from the front of the list, and the other from
        // the point of intersection.
        let p1 = head;
        let p2 = intersection;
        while (p1 != p2) {
            p1 = p1.next;
            p2 = p2.next;
        }

        return p1;
    }
