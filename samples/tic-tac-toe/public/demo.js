(function iife() {
  // Tic-Tac-Toe
  //
  const root = document.querySelector('#root');
  const messageFor = {
    unknown: 'An error occured, please try again',
    network: 'The network failed, please try again',
    Tie: 'The game is a tie!',
    X: 'X has won',
    O: 'O has won',
  };
  let board;

  const drawBoard = function( board ) {
    return `<div class="board">` +
    board.map( (row, rowIndex)  =>
      `<div class="row">` +
      row.map( ( cell, columnIndex) => `<div class="square" data-cell-row="${rowIndex}" data-cell-column="${columnIndex}">${cell}</div>` ).join('') +
      `</div>`
    ).join('') +
    `</div>` +
    `<div class="status"></div>`;
  };

  const updateStatus = function( code ) {
    const status = document.querySelector('.status');
    status.innerText = messageFor[code];
  };

  const updateBoard = function() {
    return fetch('/game')
    .catch( err => Promise.reject({ error: 'network', err }) )
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({ error: 'unknown', err: response.statusText });
    })
    .then( gameBoard => {
      board = gameBoard;
      root.innerHTML = drawBoard(board);
    })
    .catch( err => {
      updateStatus(err.error);
    });
  };

  const checkForWinner = function(board) {
    fetch('/game/', {
      method: 'PUT',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({ board })
    })
    .catch( err => Promise.reject({ error: 'network', err }) )
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({ error: 'unknown', err: response.statusText });
    })
    .then( info => {
      if( info ) {
        updateStatus(info);
      }
    })
    .catch( err => {
      updateStatus(err.error);
    });
  };

  updateBoard();

  document.querySelector('#root').addEventListener('click', (e) => {
    if( e.target.dataset.cellRow !== undefined ) {
      board[e.target.dataset.cellRow][e.target.dataset.cellColumn] = 'X';
      root.innerHTML = drawBoard(board);
      checkForWinner(board);
    }
  });


  window.updateBoard = updateBoard;

})();
