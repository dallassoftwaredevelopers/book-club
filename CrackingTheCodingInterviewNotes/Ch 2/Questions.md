<h1> Chapter 2 Questions </h1>

<h2>2.1 Remove Dups</h2>
<p> Write code to remove duplicates from an unsorted linked list. </p>

<h2>2.2 Return Kth to Last</h2>
<p> Implement an algorithm to find the kth to last element of a singly linked list. </p>

<h2>2.3 Delete Middle Node</h2>
<p> Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node. </p>

<p> Example </p>
<p> Input: the node c from the linked list a->b->c->d->e->f </p>
<p> Result: nothing is returned, but the new linked list looks like a->b->d->e->f </p>

<h2>2.4 Partition</h2>
<p> Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing in the example below indicates the partition. Yes, the output below is one of many valild outputs!)</p>

<p> Example </p>
<p> Input: 3->5->8->5->10->2->1 [partition = 5] </p>
<p> Output: 3->1->2->10->5->5->8 </p>

<h2>2.5 Sum Lists</h2>
<p> You have two numbers by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer.)</p>

<p>Example</p>
<p>Input: (7->1->6) + (5->9->2). That is, 617 + 295.</p>
<p>Output: 2->1->9. That is, 912.</p>

<p>Follow Up</p>
<p>Suppose the digits are stored in forward order. Repeat the above problem.</p>
<p>Input (6->1->7) + (2->9->5). That is, 617 + 295.</p>
<p>Output: 9->1->2. That is, 912.</p>

<h2>2.6 Palindrome</h2>
<p> Implement a function to check if a linked list is a palindrome. </p>

<h2>2.7 Intersection</h2>
<p> Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

<h2>2.8 Loop Detection<h2>
<p> Given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop (if one exists). </p>

<p> Example </p>
<p> Input: A->B->C->D->E->C [the same C as earlier] </p>
<p> Output: C </p>
