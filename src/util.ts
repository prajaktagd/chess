import { Coordinate } from './types/coordinate'
import { ASCII_VALUE_OF_A, BOARD_SIZE } from './constants'

export const convertCellNameToCoordinate = (
  cellName: string,
): Coordinate | undefined => {
  if (cellName.length <= 0) return

  const [column, ...row] = cellName
  const x = column.toUpperCase().charCodeAt(0) - ASCII_VALUE_OF_A
  const y = Number(row.join('')) - 1
  if (isOutOfBoundary(x) || isOutOfBoundary(y)) return

  return { x, y }
}

export const convertCoordinateToCellName = (coordinate: Coordinate) => {
  const { x, y } = coordinate
  if (isOutOfBoundary(x) || isOutOfBoundary(y)) return

  return `${String.fromCharCode(x + ASCII_VALUE_OF_A)}${y + 1}`
}

const isOutOfBoundary = (number: number) =>
  Number.isNaN(number) || number < 0 || number > (BOARD_SIZE - 1)
