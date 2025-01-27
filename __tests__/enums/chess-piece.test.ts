import { ChessPiece, getMoveDirections } from '../../src/enums/chess-piece'

describe('Chess Piece', () => {
  it('should return the chess pieces', () => {
    const chessPieces = Object.values(ChessPiece)
    expect(chessPieces).toEqual(['PAWN', 'KING', 'QUEEN'])
  })

  describe('getMoveDirections', () => {
    it('should return the move directions for a pawn', () => {
      expect(getMoveDirections(ChessPiece.PAWN)).toEqual([[0, 1]])
    })

    it('should return the move directions for a king', () => {
      expect(getMoveDirections(ChessPiece.KING)).toEqual([
        [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0],
      ])
    })

    it('should return no directions if the given piece has no direction', () => {
      expect(getMoveDirections(ChessPiece.QUEEN)).toEqual([])
    })
  })
})
