import { Player } from "./Player.js";
import promptSync from "prompt-sync";

const input = promptSync();

export class Game {
  constructor(player1, player2) {
    if (!(player1 instanceof Player) || !(player2 instanceof Player)) {
      throw new Error("The given parameters are not players!");
    }
    this.player1 = player1;
    this.player2 = player2;
    this.turn = 0;

    this.board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  }

  start() {
    console.log("Hello Guys! Let's start with the game");
    console.log("Let me generate who will start...");

    const randomNumber = Math.floor(Math.random() * 2) + 1;

    return randomNumber;
  }

  print() {
    for (let i = 0; i < this.board.length; i++) {
      console.log(this.board[i].join(" | "));
      if (i < this.board.length - 1) {
        console.log("--+---+--");
      }
    }
  }

  makeMove(player) {
    if (player !== this.player1 && player !== this.player2) {
      throw new Error(
        "Invalid Player! The players are: " +
          this.player1.name +
          " and " +
          this.player2.name
      );
    }

    while (this.turn < 9) {
      let win;
      while (true) {
        const { row, column } = player.makeTurn();
        console.log(); //empty line
        if (isNaN(row) || row < 1 || row > 3) {
          console.log("Invalid row!");
          continue;
        }
        if (isNaN(column) || column < 1 || column > 3) {
          console.log("Invalid column!");
          continue;
        }
        if (this.board[row - 1][column - 1] !== " ") {
          console.log("The given place is not empty");
          continue;
        }

        this.board[row - 1][column - 1] = player.symbol;
        if (this.checkWin(player)) {
          console.log(player, "wins!");
          this.print();
          return true; // Signal fürs Ende
        }
        break;
      }

      this.print();

      this.turn++;

      console.log();

      //? Swap players
      const nextPlayer = player === this.player1 ? this.player2 : this.player1;
      return this.makeMove(nextPlayer);
    }
  }

  checkWin(player) {
    const lines = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ], //row 0
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ], //row 1
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ], //row 2

      [
        [0, 0],
        [1, 0],
        [2, 0],
      ], //column 0
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ], //column 1
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ], //column 2

      [
        [0, 0],
        [1, 1],
        [2, 2],
      ], //diagonal 0
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ], //diagonal 1
    ];

    for (let line of lines) {
      let win = true;
      for (let field of line) {
        const [row, column] = field;
        if (this.board[row][column] !== player.symbol) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }
    return false;
  }
}
