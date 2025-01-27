import {
  convertCellNameToCoordinate,
  convertCoordinateToCellName,
} from '../src/util'

describe('Util Test', () => {
  describe('convertCellNameToCoordinate', () => {
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

    it('should return undefined if the column in cell name is out of boundary', () => {
      expect(convertCellNameToCoordinate('I4')).toBeUndefined()
    })

    it('should return undefined if the row in cell name is out of boundary', () => {
      expect(convertCellNameToCoordinate('C9')).toBeUndefined()
    })

    it('should return undefined if the order of column and row is interchanged', () => {
      expect(convertCellNameToCoordinate('9C')).toBeUndefined()
    })
  })

  describe('convertCoordinateToCellName', () => {
    it('should convert the given cell coordinate to cell name', () => {
      expect(convertCoordinateToCellName({ x: 1, y: 1 })).toBe('B2')
    })

    it('should return undefined if x-coordinate is a negative number', () => {
      expect(convertCoordinateToCellName({ x: -1, y: 0 })).toBeUndefined()
    })

    it('should return undefined if y-coordinate is a negative number', () => {
      expect(convertCoordinateToCellName({ x: 1, y: -2 })).toBeUndefined()
    })

    it('should return undefined if x-coordinate is more than the allowed limit', () => {
      expect(convertCoordinateToCellName({ x: 8, y: 2 })).toBeUndefined()
    })

    it('should return undefined if y-coordinate is more than the allowed limit', () => {
      expect(convertCoordinateToCellName({ x: 7, y: 9 })).toBeUndefined()
    })
  })
})
