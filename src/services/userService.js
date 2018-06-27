import dataApi from '../constants/api';
import * as requestService from './request';

export function login (userdata, success, failed) {
  let fetchApi = dataApi.user.auth;
  let data = {
    LoginName: userdata.username,
    Password: userdata.password,
    RememberMe: true,
    Validcode: `test`,
    tenancyName: `Default`
  };
  let headers = {
  };
  return requestService.fetchPost(fetchApi, data, headers, success, failed);
}

export function getSceneInfo (data, success, failed) {
  return requestService.fetchGet('http://localhost:3000/api/getSceneInfo', {}, success, failed);
}

