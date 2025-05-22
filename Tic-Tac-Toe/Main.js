import { Player } from "./Player.js";
import { Game } from "./Game.js";
import promptSync from "prompt-sync";

const input = promptSync();

let p1;
let p2;
while (true) {
  try {

const p1Name = input("Player 1, what's your name? ");
const symbol = input("What symbol do you want to play with? ");
const p2Name = input("Player 2, what's your name? ");



    if (typeof symbol === "string") {
      if (symbol.toLowerCase() === "x") {
        p1 = new Player(p1Name, symbol);
        p2 = new Player(p2Name, "O");
      } else if (symbol.toLowerCase() === "o") {
        p1 = new Player(p1Name, symbol);
        p2 = new Player(p2Name, "X");
      } else {
        throw new Error("Invalid symbol: must be X or O!");
      }
    } else {
      throw new Error("Invalid symbol: must be string");
    }
    break;
  } catch (error) {
    console.log("An error occured.", error.message);
    continue;
  }
}

const game = new Game(p1, p2);
const start = game.start();

console.log();
game.print();
console.log();

if (start === 1) {
  console.log("Player 1 will start!");
  game.makeMove(p1);
} else {
  console.log("Player 2 will start!");
  game.makeMove(p2);
}
