export const startGame = () => {
  return fetch('/game', {
    method: 'POST',
  })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject('poop');
  });
};

export const validWords = () => {
  return fetch('/words', {
    method: 'GET',
  })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject('poop');
  });
};
