var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;
  console.log(dummy);

  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
};
// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
var l1 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: null,
    },
  },
};
l2 = { val: 9, next: null };
addTwoNumbers(l1, l2);
