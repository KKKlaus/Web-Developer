export const isCodeGood = (id, sequence) => {
  return fetch(`/check/${id}`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { sequence } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
}

export const generateNewSecret = () => {
  return fetch('/secret', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};
