/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const tempArray = [];
    const before = new ListNode();
    let tail = before;
    let currentNode1 = l1;
    let currentNode2 = l2;
    let carry = false;
    while ( currentNode1 || currentNode2 ) {
      let tempSum = currentNode1.val + currentNode2.val;
      if (carry) {
        tempSum++;
      }
      tail.val = tempSum%10;
      tail = tail.next;
      if (tempSum > 9) {
        carry = true;
      }
      currentNode1 = currentNode1.next;
      currentNode2 = currentNode2.next;
    }

    // return (parseInt(tempArray.reverse().join('')));
    console.log(tail);
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(3);
a.next = b;
b.next = c;

const d = new ListNode(5);
const e = new ListNode(6);
const f = new ListNode(4);
d.next = e;
e.next = f;

addTwoNumbers(a, d);