const merge = (leftArr, rightArr) => {
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const left = leftArr[leftIndex]
        const right = rightArr[rightIndex]

        if(left < right) {
            output.push(left)
            leftIndex++
        } else {
            output.push(right)
            rightIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort = array => {
    // base case
    if(array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left), mergeSort(right)
    )
}


const someArr = [3, 5, 2, 1, 32, 31, 65, 20, 13, 25, 15, 14, 8]

console.log(mergeSort(someArr))
