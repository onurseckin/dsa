/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k){
    // base cases
    if (head === null) return null;
    if (head.next === null) return head;

    // close the linked list into the ring
    let oldTail = head;
    let n;
    for(n = 1; oldTail.next !== null; n++)
      oldTail = oldTail.next;
    oldTail.next = head;

    // find new tail : (n - k % n - 1)th node
    // and new head : (n - k % n)th node
    let newTail = head;
    for (let i = 0; i < n - k % n - 1; i++)
      newTail = newTail.next;
    let newHead = newTail.next;

    // break the ring
    newTail.next = null;

    return newHead;
  
}