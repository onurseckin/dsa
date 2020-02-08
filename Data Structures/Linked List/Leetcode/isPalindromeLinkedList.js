    var isPalindrome = function(head) {

        if (head === null) return true;

        // Find the end of first half and reverse second half.
        let firstHalfEnd = endOfFirstHalf(head);
        let secondHalfStart = reverseList(firstHalfEnd.next);

        // Check whether or not there is a palindrome.
        let p1 = head;
        let p2 = secondHalfStart;
        let result = true;
        while (result && p2 !== null) {
            if (p1.val != p2.val) result = false;
            p1 = p1.next;
            p2 = p2.next;
        }        

        // Restore the list and return the result.
        firstHalfEnd.next = reverseList(secondHalfStart);
        return result;
    }

    // Taken from https://leetcode.com/problems/reverse-linked-list/solution/
    var reverseList = function(head) {
        let prev = null;
        let curr = head;
        while (curr !== null) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    }

    var endOfFirstHalf = function(head) {
        let fast = head;
        let slow = head;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    
    
    
