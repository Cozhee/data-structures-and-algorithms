const fizzBuzz = (root) => {
  if (root === null) return []

  let stack = [ root ]

  while(stack.length > 0) {
    let current = stack.pop()

    if (current.val % 5 === 0 && current.val % 3 === 0) {
      current.val = 'fizzbuzz'
    } else if (current.val % 5 === 0) {
      current.val = 'buzz'
    } else if (current.val % 3 === 0){
      current.val = 'fizz'
    } else {
      current.val = String(current.val)
    }


    if(current.right !== null) stack.push(current.right)
    if(current.left !== null) stack.push(current.left)
  }
  return root
}

module.exports = fizzBuzz

//        a
//      /   \
//     b     c
//   /  \     \
//  d    e     f
