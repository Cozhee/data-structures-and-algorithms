const maxValue = require('../index')

class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('Testing maxValue function', () => {

  it('Should return 10 as the highest value', () => {
    const node1 = new Node(5);
    const node2 = new Node(3);
    const node3 = new Node(6);
    const node4 = new Node(8);
    const node5 = new Node(10);
    const node6 = new Node(2);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.right = node6;

    expect(maxValue(node1)).toEqual(10)
  })

})
