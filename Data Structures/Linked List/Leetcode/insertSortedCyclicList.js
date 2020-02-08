/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (head === null) {
      let newNode = new Node(insertVal, null);
      newNode.next = newNode;
      return newNode;
    }

    let prev = head;
    let curr = head.next;
    let toInsert = false;

    do {
      if (prev.val <= insertVal && insertVal <= curr.val) {
        // Case 1).
        toInsert = true;
      } else if (prev.val > curr.val) {
        // Case 2).
        if (insertVal >= prev.val || insertVal <= curr.val)
          toInsert = true;
      }

      if (toInsert) {
        prev.next = new Node(insertVal, curr);
        return head;
      }

      prev = curr;
      curr = curr.next;
    } while (prev != head);

    // Case 3).
    prev.next = new Node(insertVal, curr);
    return head;
  

}