import { convertStrToChessPiece, getMoveDirections } from './enums/chess-piece'
import { convertCellNameToCoordinate, convertCoordinateToCellName } from './util'

export const calculatePossibleMoves = (
  chessPieceStr: string, currentCellName: string,
) => {
  const chessPiece = convertStrToChessPiece(chessPieceStr)
  const currentPos = convertCellNameToCoordinate(currentCellName)
  if (!currentPos || !chessPiece) return []

  return getMoveDirections(chessPiece)
    .map((direction) => {
      const nextPos = {
        x: currentPos.x + direction[0],
        y: currentPos.y + direction[1],
      }
      return convertCoordinateToCellName(nextPos)
    })
    .filter(Boolean)
}
