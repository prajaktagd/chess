import { Direction } from '../types/direction'

export enum ChessPiece {
  PAWN = 'PAWN',
  KING = 'KING',
  QUEEN = 'QUEEN',
}

export const getMoveDirectionsAndMaxSteps = (
  chessPiece: ChessPiece,
): { directions: Direction[], maxSteps: number } => {
  const allDirections: Direction[] = [
    [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0],
  ]

  switch (chessPiece) {
    case ChessPiece.PAWN: return { directions: [[0, 1]], maxSteps: 1 }
    case ChessPiece.KING: return { directions: allDirections, maxSteps: 1 }
    case ChessPiece.QUEEN: return { directions: allDirections, maxSteps: 8 }
  }
}

export const convertStrToChessPiece = (chessPieceStr: string) => {
  const chessPiece = chessPieceStr.toUpperCase() as ChessPiece
  return Object.values(ChessPiece).includes(chessPiece) ? chessPiece : undefined
}
