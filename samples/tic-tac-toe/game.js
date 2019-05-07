const board = [ ['X','','O'],['','X',''],['','',''] ];

const checkForVerticalWin = function(board) {
  for(col of [0,1,2]) {
    if(board[0][col] && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
      return board[0][col];
    }
  }
  return '';
};
const checkForHorizontalWin = function(board) {
  for(row of [0,1,2]) {
    if(board[row][0] && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
      return board[row][0];
    }
  }
  return '';
};
const checkForDiagonalWin = function(board) {
  if(board[1][1] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[1][1];
  }
  if(board[1][1] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[1][1];
  }
  return '';
};
const checkForTie = function(board) {
  for(row of [0,1,2]) {
    for(col of [0,1,2]) {
      if(!board[row][col]) {
        return false;
      }
    }
  }
  return true;
};
const checkForWinner = function(board) {
  return checkForVerticalWin(board) ||
    checkForHorizontalWin(board) ||
    checkForDiagonalWin(board) ||
    ( checkForTie(board) && 'Tie');
};

module.exports = {
  board,
  checkForWinner
};
