function quickSort(array) {
  if (array.length === 1){
    return array
  }

  const pivot = array[array.length - 1]
  const left = []
  const right = []

  for (const el of array.slice(0, array.length - 1)) {
    el < pivot ? left.push(el) : right.push(el)
  }

  if (left.length > 0 && right.length > 0) {
    return [...quickSort(left), pivot, ...quickSort(right)]
  } else if (left.length > 0) {
    return [...quickSort(left), pivot]
  } else {
    return [pivot, ...quickSort(right)]
  }
}

module.exports = quickSort
