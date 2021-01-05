import mergeTwoLists, { ListNode } from './index';

describe('Merge Two Sorted Lists', () => {
  test('should return the right output for l1 = [1, 2, 4] l2 = [1, 3, 5]', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const result = new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))),
    );

    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  test('should return the right output for l1 = [] l2 = []', () => {
    const list1 = null;
    const list2 = null;
    const result = null;

    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  test('should return the right output for l1 = [] l2 = [0]', () => {
    const list1 = null;
    const list2 = new ListNode(0);
    const result = new ListNode(0);

    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });
});
