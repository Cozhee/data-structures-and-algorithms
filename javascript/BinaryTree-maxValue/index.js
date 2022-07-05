class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxValue = (root) => {
  const stack = [ root ];
  let maxValue = null;
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val > maxValue) {
      maxValue = current.val;
    }
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return maxValue;
};

module.exports = maxValue
