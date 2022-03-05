/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    let cur = head;
    let cur1 = l1, cur2 = l2;
    while (cur1 !== null && cur2 !== null) {
        if (cur1.val < cur2.val) {
            cur.next = cur1; // point new list to this node
            cur1 = cur1.next; // advance ptr of list 1
        } else {
            cur.next = cur2; // point new list to this node
            cur2 = cur2.next; // advance ptr of list 2
        }
        cur = cur.next; // advance ptr of new list
    }
    // in case the end of one list is reached earlier
    if (cur1 !== null) {
        cur.next = cur1;
    }
    if (cur2 !== null) {
        cur.next = cur2;
    }
    return head.next;
    
};