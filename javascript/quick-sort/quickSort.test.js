const quickSort = require('./index')

describe('Sort a list with qucksort', () => {

  test('Should be sorted least to greatest', () => {

    const arr = [3, 5, 2, 76, 23, 1, 53]
    const result = quickSort(arr)
    expect(result).toEqual([1, 2, 3, 5, 23, 53, 76])

  })

})
