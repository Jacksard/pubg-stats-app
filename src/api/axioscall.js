import axios from 'axios';
import { url } from './actions';

export const callPlayer = playerId => {
  return axios
    .get(url.player + playerId)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const callLifetime = accountId => {
  console.log(accountId);
  return axios
    .get(url.lifetime + accountId, {})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const callMatch = (type, matchId) => {
  return axios
    .get(type + matchId, {})
    .then(response => {
      return response.data;
      /* console.log(user.data[0]);
    
      var join = user.data[0]; */
    })
    .catch(error => {
      console.error(error);
    });
};

export const callSeason = (type, playerId) => {};
