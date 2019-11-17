import { addOneToNumber } from '../src'

describe('addOneToNumber', () => {
  it('takes a number as an input and increments it by one', () => {
    expect(addOneToNumber(1)).toEqual(2)
  })
})
