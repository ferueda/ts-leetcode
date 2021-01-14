import deleteDuplicates, { ListNode } from './index';

describe('Remove Duplicates From Sorted List', () => {
  test('should return the right output for each input', () => {
    const test1 = new ListNode(1, new ListNode(1, new ListNode(2)));
    const test2 = new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))),
    );
    const test3 = new ListNode(1, new ListNode(1, new ListNode(1)));

    expect(deleteDuplicates(test1)).toEqual(new ListNode(1, new ListNode(2)));
    expect(deleteDuplicates(test2)).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    expect(deleteDuplicates(test3)).toEqual(new ListNode(1));
  });
});
