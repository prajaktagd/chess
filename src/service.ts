import {
  convertStrToChessPiece,
  getMoveDirectionsAndMaxSteps,
} from './enums/chess-piece'
import { convertCellNameToCoordinate, convertCoordinateToCellName } from './util'
import { Coordinate } from './types/coordinate'
import { Direction } from './types/direction'

export const calculatePossibleMoves = (
  chessPieceStr: string, currentCellName: string,
) => {
  const chessPiece = convertStrToChessPiece(chessPieceStr)
  const currentPos = convertCellNameToCoordinate(currentCellName)
  if (!currentPos || !chessPiece) return []

  const { directions, maxSteps } = getMoveDirectionsAndMaxSteps(chessPiece)
  return directions.flatMap((direction) => {
    return getMovesInDirection(currentPos, direction, maxSteps)
  }).filter(Boolean)
}

const getMovesInDirection = (
  currentPos: Coordinate, direction: Direction, maxSteps: number,
) => {
  const cells = []
  let { x, y } = currentPos

  for (let i = 0; i < maxSteps; i++) {
    x += direction[0]
    y += direction[1]
    const cellName = convertCoordinateToCellName({ x, y })
    if (!cellName) break

    cells.push(cellName)
  }
  return cells
}
