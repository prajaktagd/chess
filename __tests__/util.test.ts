import { convertCellNameToCoordinate } from '../src/util'

describe('Util Test', () => {
  it('should convert the given cell name to cell coordinate', () => {
    expect(convertCellNameToCoordinate('B1')).toEqual({ x: 1, y: 0 })
  })

  it('should convert the given cell name to cell coordinate when column is in lower case', () => {
    expect(convertCellNameToCoordinate('a7')).toEqual({ x: 0, y: 6 })
  })

  it('should return undefined if the cell name is more than 2 characters', () => {
    expect(convertCellNameToCoordinate('invalid1')).toBeUndefined()
  })

  it('should return undefined if the cell name is less than 2 characters', () => {
    expect(convertCellNameToCoordinate('2')).toBeUndefined()
  })

  it('should return undefined if the cell name is empty', () => {
    expect(convertCellNameToCoordinate('')).toBeUndefined()
  })

  it('should return undefined if the cell name is empty', () => {
    expect(convertCellNameToCoordinate('')).toBeUndefined()
  })

  it('should return undefined if the column in cell name is more than the allowed number of columns', () => {
    expect(convertCellNameToCoordinate('I4')).toBeUndefined()
  })

  it('should return undefined if the row in cell name is more than the allowed number of rows', () => {
    expect(convertCellNameToCoordinate('C9')).toBeUndefined()
  })

  it('should return undefined if the order of column and row is interchanged', () => {
    expect(convertCellNameToCoordinate('9C')).toBeUndefined()
  })
})
