import { dummyTrue } from './dummy'

describe('My dummy module',() => {
  it('should always return true', () => {
    expect(dummyTrue()).toBe(true)
  })
})
