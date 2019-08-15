import axios from 'axios';
import { url } from './actions';

export const callPlayer = playerName => {
  return axios
    .get(url.player + playerName)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
