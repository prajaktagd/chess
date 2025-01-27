import { calculatePossibleMoves } from './service'

const main = () => {
  const args = process.argv.slice(2)
  const moves = calculatePossibleMoves(args[0], args[1])
  console.log(moves.toString())
}

main()
