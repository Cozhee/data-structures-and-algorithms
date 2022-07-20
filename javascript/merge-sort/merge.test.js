const mergeSort = require('./index')

describe('Merge sort a list', () => {

  test('It should be sorted', () => {

    const testArr = [3, 5, 1, 6, 7, 10]
    const results = mergeSort(testArr)
    expect(results).toEqual([1, 3, 5, 6, 7, 10])

  })

})
