import { Coordinate } from './types/coordinate'

export const convertCellNameToCoordinate = (
  cellName: string,
): Coordinate | undefined => {
  if (cellName.length !== 2) return

  const column = cellName[0].toUpperCase().charCodeAt(0) - 65
  const row = Number(cellName[1]) - 1
  if (isOutOfBoundary(column) || isOutOfBoundary(row)) return

  return { x: column, y: row }
}

export const convertCoordinateToCellName = (coordinate: Coordinate) => {
  const { x, y } = coordinate
  if (isOutOfBoundary(x) || isOutOfBoundary(y)) return

  return `${String.fromCharCode(x + 65)}${y + 1}`
}

const isOutOfBoundary = (number: number) => number < 0 || number > 7
