'use strict';

// Require our linked list implementation
const linkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {

    linkedList.addToFront(6)
    expect(linkedList.head.value).toEqual(6);

  });

  it('works', () => {

    linkedList.addToEnd(4)
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
});
