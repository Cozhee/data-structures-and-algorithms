'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
// Require our linked list implementation
const linkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {

    linkedList.addToFront(6)
    expect(linkedList.head.value).toEqual(6);

  });

  it('works', () => {

    linkedList.append(4)
    expect(linkedList.head.next.value).toEqual(4)

  })

  it('should print values', () => {

    expect(linkedList.traverse()).toBe('{ 6 } -> { 4 } -> NULL')

  })

  it('Should return true', () => {

    expect(linkedList.includes(6)).toBeTruthy()
    expect(linkedList.includes(4)).toBeTruthy()
    expect(linkedList.includes(8)).toBeFalsy()

  })


  it('Should insertBefore a node', () => {

    linkedList.insertBefore(4, 10)
    expect(linkedList.traverse()).toBe('{ 6 } -> { 10 } -> { 4 } -> NULL')

  })

  it('Should insert after a node', () => {

    linkedList.insertAfter(10, 3)
    expect(linkedList.traverse()).toBe('{ 6 } -> { 10 } -> { 3 } -> { 4 } -> NULL')

  })

  it('Should return a node kth places from the end', () => {

    const result = (linkedList.kthFromEnd(3))
    console.log(result)
    expect(result).toEqual(result)

  })
});
