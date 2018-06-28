import _ from 'lodash';
import 'whatwg-fetch';
import 'es6-promise';
const apiDomain = '';
const timeout = 5000;

export function get (uri, headers = {}) {
  return fetchGet(uri, 'GET', headers, null, null);
}

export function post (uri, data = '', headers = {}) {
  return fetchPost(uri, data, headers, null, null);
}

export function fetchGet (uri, headers = {}, successCallback, failCallback) {
  return request(uri, 'GET', headers, '', successCallback, failCallback);
}

export function fetchPost (uri, data, headers = {}, successCallback, failCallback) {
  if (!headers['Content-type']) {
    // default json
    headers['Content-Type'] = 'application/json; charset=utf-8';
    headers['Accept'] = 'application/json, text/plain, */*';
  }
  return request(uri, 'POST', headers, data, successCallback, failCallback);
}

export function request (uri, type = 'GET', headers = {}, data = '', successCallback, failCallback) {
  // if(!token) throw 'no token';
  // if(!headers["Authorization"]){
  // 	//do some head authorization
  // 	///
  // }

  if (!_.startsWith(uri, 'http')) {
    uri = apiDomain + uri;
  }

  let head = {
    // 'Authorization': '',
    // 'Content-Type': 'application/json; charset=utf-8'
  };

  let fetchOption = {
    method: type,
    headers: head
  };

  if (type === 'POST') {
    fetchOption.body = JSON.stringify(data);
  }
  // return fetch(uri, fetchOption)
  return timeoutFetch(timeout, fetch(uri, fetchOption))
    .then(filterStatus)
    .then(filterJSON)
    .then((data) => {
      console.log(data)
      if (successCallback) {
        return successCallback(data);
      }
      return data;
    })
    .catch(function (error) {
      console.log(error, uri, data);
      // if (!failCallback) throw error;
      failCallback && failCallback(error);
      return error;
    });
}

const timeoutFetch = (ms, promise) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(alert('网络不给力！'));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timer);
        resolve(res);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
};

const filterJSON = (res) => {
  try {
    // if(res.headers.get("content-length") > 0){
    return res.json();
    // }
  } catch (e) {
    throw new Error('data format error');
  }
};

const filterStatus = (res) => {
  // if (res.ok) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    // throw new Error('');
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};
