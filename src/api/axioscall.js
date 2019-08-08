import axios from 'axios';
import { url } from './actions';

export const callPlayer = (type, playerId) => {
  return axios
    .get(type + playerId, {
      headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_KEY,
        Accept: 'application/vnd.api+json'
      }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const callMatch = (type, matchId) => {
  return axios
    .get(type + matchId, {
      headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_KEY,
        Accept: 'application/vnd.api+json'
      }
    })
    .then(response => {
      return response.data;
      /* console.log(user.data[0]);
    
      var join = user.data[0]; */
    })
    .catch(error => {
      console.error(error);
    });
};

export const callLifetime = accountId => {
  const full = url.lifetime(accountId);

  var config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Autherization: 'Bearer' + process.env.REACT_APP_KEY,
      Accept: 'application/vnd.api+json'
    }
  };

  return axios
    .get(full, {
      headers: {
        Autherization: 'Bearer' + process.env.REACT_APP_KEY,
        Accept: 'application/vnd.api+json'
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const callSeason = (type, playerId) => {};
