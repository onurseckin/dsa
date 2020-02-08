/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//one pass two pointer with dummy node solution
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let front = dummy;
  let back = dummy;
  while (n >= 0) {
    front = front.next;
    n--;
  }
  while (front) {
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  return dummy.next;
};