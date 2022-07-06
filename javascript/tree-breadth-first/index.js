const breadthFirst = (root) => {
  if (root === null) return []

  let queue = [ root ]
  let values = []

  while(queue.length > 0) {
    let current = queue.shift()
    values.push(current.val)
    if(current.left !== null) queue.push(current.left)
    if(current.right !== null) queue.push(current.right)
  }
  return values
}

         //      a
         //    /   \
         //   b     c
         //  / \     \
         // d   e     f

module.exports = breadthFirst
