export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  if (head.val === head.next.val) {
    head.next = head.next.next;
    deleteDuplicates(head);
  } else {
    deleteDuplicates(head.next);
  }

  return head;
}

export default deleteDuplicates;
