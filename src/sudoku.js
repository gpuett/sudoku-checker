export class Board {
  constructor(){
    this.board = [[], [], [], [], [], [], [], [], []];
    this.boxes = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
  }


  checkRow(row) {
    for (let i = 0; i < 9; i++) {
      let element1 = this.board[row][i];
      for (let j = 0; j < 9; j++) {
        let element2 = this.board[row][j];
        if (element1 === element2 && i !== j) {
          return false;
        }
      }
    }
    return true;
  }

  checkCol(col) {
    for (let i = 0; i < 9; i++) {
      let element1 = this.board[i][col];
      for (let j = 0; j < 9; j++) {
        let element2 = this.board[j][col];
        if (element1 === element2 && i !== j) {
          return false;
        }
      }
    }
    return true;
  }

  checkBox(box) {
    let boxElements = [];
    for (let i = box[0]; i < (box[0] + 3); i++) {
      for (let j = box[1]; j < (box[1] + 3); j++) {
        boxElements.push(this.board[i][j]);
      }
    }
    for (let l = 0; l < 9; l++) {
      let element1 = boxElements[l];
      for (let k = 0; k < 9; k++) {
        let element2 = boxElements[k];
        if (element1 === element2 && l !== k) {
          return false;
        }
      }
    }
    return true;
  }

  checkBoard() {
    for (let i = 0; i < 9; i++) {
      let row = this.checkRow(i);
      let col = this.checkCol(i);
      let box = this.checkBox(this.boxes[i]);
      if (row === false || col === false || box === false) {
        return false;
      }
    }
    return true;
  }
}
