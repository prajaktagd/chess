import { Direction } from '../types/direction'

export enum ChessPiece {
  PAWN = 'PAWN',
  KING = 'KING',
  QUEEN = 'QUEEN',
  KNIGHT = 'KNIGHT',
}

export const getMoveDirectionsAndMaxSteps = (
  chessPiece: ChessPiece,
): { directions: Direction[], maxSteps: number } => {
  const allDirections: Direction[] = [
    [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0],
  ]
  const knightDirections: Direction[] = [
    [-2, -1], [2, -1], [2, 1], [-2, 1], [-1, -2], [1, -2], [1, 2], [-1, 2],
  ]

  switch (chessPiece) {
    case ChessPiece.PAWN: return { directions: [[0, 1]], maxSteps: 1 }
    case ChessPiece.KING: return { directions: allDirections, maxSteps: 1 }
    case ChessPiece.QUEEN: return { directions: allDirections, maxSteps: 8 }
    case ChessPiece.KNIGHT: return { directions: knightDirections, maxSteps: 1 }
  }
}

export const convertStrToChessPiece = (chessPieceStr: string) => {
  const chessPiece = chessPieceStr.toUpperCase() as ChessPiece
  return Object.values(ChessPiece).includes(chessPiece) ? chessPiece : undefined
}
