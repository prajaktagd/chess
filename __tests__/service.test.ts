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

  it('should return the possible moves for the queen', () => {
    const moves = calculatePossibleMoves(ChessPiece.QUEEN, 'G3')
    expect(moves).toEqual([
      'F2', 'E1', 'G2', 'G1', 'H2', 'H3', 'H4', 'G4', 'G5', 'G6', 'G7', 'G8',
      'F4', 'E5', 'D6', 'C7', 'B8', 'F3', 'E3', 'D3', 'C3', 'B3', 'A3',
    ])
  })

  it('should return the possible moves for the knight', () => {
    const moves = calculatePossibleMoves(ChessPiece.KNIGHT, 'E4')
    expect(new Set(moves)).toEqual(new Set(['G5', 'C5', 'D2', 'F2', 'F6', 'D6', 'C3', 'G3']))
  })

  it('should return empty array if there are no possible moves for the given chess piece', () => {
    const moves = calculatePossibleMoves(ChessPiece.PAWN, 'E8')
    expect(moves).toEqual([])
  })
})
