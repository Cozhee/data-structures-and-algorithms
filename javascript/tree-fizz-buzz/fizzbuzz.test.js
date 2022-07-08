const fizzBuzz = require('./index')

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(15)
const b = new Node(3)
const c = new Node(5)
const d = new Node(4)
const e = new Node(30)
const f = new Node(9)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


describe('Fizzbuzz node value convertor', () => {

  it('Should change values to fizz, buzz, or fizzbuzz', () => {

    fizzBuzz(a)
    expect(a.val).toEqual('fizzbuzz')
    expect(b.val).toEqual('fizz')
    expect(c.val).toEqual('buzz')
    expect(d.val).toEqual('4')
    expect(e.val).toEqual('fizzbuzz')
    expect(f.val).toEqual('fizz')
  })

})
