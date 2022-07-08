const zip = require('./index')

class Node{
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')

const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.next= b
b.next = c

d.next = e
e.next = f

describe('Zip two linked lists together', () => {

  it('Should be a => d => b => e', () => {

    const result = zip(a, d)
    expect(result.val).toEqual('a')
    expect(result.next.val).toEqual('d')
    expect(result.next.next.val).toEqual('b')
    expect(result.next.next.next.val).toEqual('e')
  })

})
