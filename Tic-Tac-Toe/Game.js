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

    if (randomNumber === 1) {
        return 1;
    } else {
        return 2;
    }
    
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
        throw new Error("Invalid Player! The players are: " + this.player1.name + " and " + this.player2.name);
    }


    while (true) {
      const { row, column } = player.makeTurn(input);

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
      break;
    }
  }
}
