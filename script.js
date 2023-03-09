import { Grid } from "./grid.js"
import { Tile } from "./tile.js"

const gameBoard = document.getElementById("game-board")

const grid = new Grid(gameBoard)
const tile = new Tile(gameBoard)
grid.getRandomEmptyCell().linkTile(tile)
