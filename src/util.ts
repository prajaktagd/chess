export const convertCellNameToCoordinate = (cellName: string) => {
  if (cellName.length !== 2) return

  const column = cellName[0].toUpperCase().charCodeAt(0) - 65
  const row = Number(cellName[1]) - 1
  if (isOutOfBoundary(column) || isOutOfBoundary(row)) return

  return { x: column, y: row }
}

const isOutOfBoundary = (number: number) => number < 0 || number > 7
