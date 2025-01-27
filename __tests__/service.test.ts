import { ChessPiece } from '../src/enums/chess-piece'
import { calculatePossibleMoves } from '../src/service'

describe('Service Test', () => {
  it('should return empty array if the given chess piece is invalid', () => {
    const moves = calculatePossibleMoves('invalid', 'E1')
    expect(moves).toEqual([])
  })

  it('should return empty array if the given cell name is invalid', () => {
    const moves = calculatePossibleMoves('Pawn', 'E2is')
    expect(moves).toEqual([])
  })

  it('should return the possible moves for a pawn', () => {
    const moves = calculatePossibleMoves(ChessPiece.PAWN, 'D1')
    expect(moves).toEqual(['D2'])
  })

  it('should return the possible moves for the king', () => {
    const moves = calculatePossibleMoves(ChessPiece.KING, 'C1')
    expect(moves).toEqual(['D1', 'D2', 'C2', 'B2', 'B1'])
  })

  it('should return empty array if there are no possible moves for the given chess piece', () => {
    const moves = calculatePossibleMoves(ChessPiece.PAWN, 'E8')
    expect(moves).toEqual([])
  })
})
