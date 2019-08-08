import axios from 'axios';

import React, { Component } from 'react';
import {
  Jacob,
  Danny,
  Rodin,
  url,
  exampleMatchId,
  urlMatches
} from './actions';

import Cards from '../components/Cards';
import './api.css';
import { callPlayer, callMatch, callLifetime } from './axioscall';

class api extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
      result: [],
      playersArray: [],
      loading: false,
      matches: [],
      playerId: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }

  async handlePlayerSubmit(event) {
    let urlright =
      'https://api.pubg.com/shards/steam/players/account.ae70c0ffc0db479ab5b464c25f702f48/seasons/lifetime';

    event.preventDefault();
    //console.log(this.state.playerName);
    await callPlayer(url.player, this.state.playerName)
      .then(res => {
        var joined = this.state.result.concat(res.data[0]);
        this.setState({ playerId: joined[0].attributes.name });
        this.setState({ result: joined });
        console.log(this.state.result[0].id);
      })
      .catch(error => {
        console.log(error);
      });

    // Lifetime data call
    await callLifetime('account.ae70c0ffc0db479ab5b464c25f702f48')
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlePlayerSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.playerName}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <ul>
          <Cards profile={this.state.result} />
        </ul>
      </div>
    );
  }
}

export default api;
