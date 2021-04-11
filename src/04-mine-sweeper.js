/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = [];
  for (let row = 0; row < matrix.length; row++) {
    resultMatrix[row] = [];
    for (let column = 0; column < matrix[row].length; column++) {
      let counter = 0;
      if (row !== 0) {
        if (matrix[row - 1][column - 1]) {
          counter++;
        }
        if (matrix[row - 1][column + 1]) {
          counter++;
        }
        if (matrix[row - 1][column]) {
          counter++;
        }
      }
      if (row !== matrix.length - 1) {
        if (matrix[row + 1][column - 1]) {
          counter++;
        }
        if (matrix[row + 1][column + 1]) {
          counter++;
        }
        if (matrix[row + 1][column]) {
          counter++;
        }
      }
      if (matrix[row][column - 1]) {
        counter++;
      }
      if (matrix[row][column + 1]) {
        counter++;
      }
      resultMatrix[row][column] = counter;
    }
  }
  return resultMatrix;
}

module.exports = minesweeper;
