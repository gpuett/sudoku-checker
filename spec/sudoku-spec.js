import { Board } from './../src/sudoku.js';

describe("Board", function() {
  var newBoard = new Board();
  beforeEach(function() {
    newBoard.board = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 5, 6, 7, 8, 9, 1, 2, 3], [7, 8, 9, 1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7, 8, 9, 1], [5, 6, 7, 8, 9, 1, 2, 3, 4], [8, 9, 1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8, 9, 1, 2], [6, 7, 8, 9, 1, 2, 3, 4, 5], [9, 1, 2, 3, 4, 5, 6, 7, 8]];
  });

  it ("should check a row for non-repeated numbers 1-9", function() {
    expect(newBoard.checkRow(0)).toEqual(true);
  });
  it ("should check a column for non-repeated numbers 1-9", function() {
    expect(newBoard.checkCol(0)).toEqual(true);
  });
  it ("should check a box for non-repeated numbers 1-9", function() {
    expect(newBoard.checkBox([0,0])).toEqual(true);
  });
  it ("should check all rows, columns, and boxes for non-repeated numbers 1-9", function() {
    expect(newBoard.checkBoard(0)).toEqual(true);
  });
});
