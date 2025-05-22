import promptSync from "prompt-sync";
const input = promptSync();


export class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }

  makeTurn() {
    const row = parseInt(input(`${this.name}, enter row (1-3): `));
    const column = parseInt(input(`${this.name}, enter column (1-3): `));
    return { row, column };
  }
}
