import {
  ChessPiece,
  convertStrToChessPiece,
  getMoveDirectionsAndMaxSteps,
} from '../../src/enums/chess-piece'

describe('Chess Piece', () => {
  it('should return the chess pieces', () => {
    const chessPieces = Object.values(ChessPiece)
    expect(chessPieces).toEqual(['PAWN', 'KING', 'QUEEN', 'KNIGHT'])
  })

  describe('getMoveDirectionsAndMaxSteps', () => {
    it('should return the move directions and max steps for a pawn', () => {
      expect(getMoveDirectionsAndMaxSteps(ChessPiece.PAWN)).toEqual({
        directions: [[0, 1]], maxSteps: 1,
      })
    })

    it('should return the move directions and max steps for a king', () => {
      expect(getMoveDirectionsAndMaxSteps(ChessPiece.KING)).toEqual({
        directions: [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]],
        maxSteps: 1,
      })
    })

    it('should return the move directions and max steps for a queen', () => {
      expect(getMoveDirectionsAndMaxSteps(ChessPiece.QUEEN)).toEqual({
        directions: [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]],
        maxSteps: 8,
      })
    })

    it('should return the move directions and max steps for a knight', () => {
      expect(getMoveDirectionsAndMaxSteps(ChessPiece.KNIGHT)).toEqual({
        directions: [[-2, -1], [2, -1], [2, 1], [-2, 1], [-1, -2], [1, -2], [1, 2], [-1, 2]],
        maxSteps: 1,
      })
    })
  })

  describe('convertStrToChessPiece', () => {
    it('should return true if the given string is a valid chess piece', () => {
      expect(convertStrToChessPiece('Pawn')).toBe('PAWN')
    })

    it('should return true if the given string is a valid chess piece in lower case', () => {
      expect(convertStrToChessPiece('king')).toBe('KING')
    })

    it('should return false if the given string is a invalid chess piece', () => {
      expect(convertStrToChessPiece('invalid')).toBeUndefined()
    })
  })
})
