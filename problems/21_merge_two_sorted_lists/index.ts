export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let sorted: ListNode;

  if (!l1 || !l2) return l1 || l2;

  if (l1.val < l2.val) {
    sorted = l1;
    sorted.next = mergeTwoLists(l1.next, l2);
  } else {
    sorted = l2;
    sorted.next = mergeTwoLists(l1, l2.next);
  }

  return sorted;
}

export default mergeTwoLists;
