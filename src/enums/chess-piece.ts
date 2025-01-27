import { Direction } from '../types/direction'

export enum ChessPiece {
  PAWN = 'PAWN',
  KING = 'KING',
  QUEEN = 'QUEEN',
}

export const getMoveDirections = (chessPiece: ChessPiece): Direction[] => {
  const allDirections: Direction[] = [
    [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0],
  ]

  switch (chessPiece) {
    case ChessPiece.PAWN: return [[0, 1]]
    case ChessPiece.KING: return allDirections
    default: return []
  }
}
