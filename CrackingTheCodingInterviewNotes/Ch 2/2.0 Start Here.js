// The code below is the prerequisite for the solution to the problems in
// chapter 2 on understanding linked lists. It is a linked list class and
// a function to populate a linked list with an array of items.

// Definition for singly-linked list.
function LinkedList(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Populate a linked list with an array of items
function PopulateLinkedList(items) {
  if (items.length === 0) return null;

  let root = new LinkedList(items[0]); //?

  for (let i = 1; i < items.length; i++) {
    let node = new LinkedList(items[i]);
    node.next = root;
    root = node;
  }

  return root;
}

PopulateLinkedList([1, 2, 3, 4, 5, 3]); //?
