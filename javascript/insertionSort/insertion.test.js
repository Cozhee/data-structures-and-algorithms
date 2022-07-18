const insertionSort = require("./index");

describe('It should sort', () =>{
  test('It should be in order', () => {

    const testArr = [6, 3, 2, 7, 10, 9, 8]
    const result = insertionSort(testArr)
    expect(result).toEqual([2, 3, 6, 7, 8, 9, 10])

  })
})
