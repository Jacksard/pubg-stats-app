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


export const callSeason = (type, playerId) => { };
