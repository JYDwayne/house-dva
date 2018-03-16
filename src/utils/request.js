import fetch from 'dva/fetch';

import fetchjsonp from 'fetch-jsonp';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}


function requestListFromServer(url, options) {
  return fetchjsonp(url)
    .then( parseJSON )
    .then( data => {
      return data.data;
    })
}

//2秒返回resolved的promise
const dely = (timer) => {
  console.log(timer);
  return new Promise(function(res){
    setTimeout(() => {
      res();
      console.log('resolved');
      return 'resolved'
    }, timer)
  })
}

// function dely() {
//   setTimeout(function () {
//     console.log('res');
//   }, 2000)
// }

export {request as default, dely, requestListFromServer}