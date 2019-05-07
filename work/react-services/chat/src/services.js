export const getNewMessage = (mes) => {
  return fetch(`/add`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { mes } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText }); 
  });
}

export const updateMessage = () => {
  return fetch(`/update`)
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText }); 
  });
}