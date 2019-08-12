import React, { Component } from 'react';

import Cards from '../components/Cards';
import './api.css';
import { callPlayer, callLifetime } from './axioscall';
import { url } from './actions';

class api extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
      result: [],
      playersArray: [],
      loading: false,
      matches: [],
      playerId: '',
      lifetime: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }

  async handlePlayerSubmit(event) {
    event.preventDefault();
    console.log('URL API:  ' + url.player + this.state.playerName);
    await callPlayer(this.state.playerName)
      .then(res => {
        // Build Players Object and push it into PlayersArray.

        var joined = this.state.playersArray.concat(res);
        this.setState({
          playersArray: joined
        });
        console.log(this.state.playersArray);
      })
      .catch(error => {
        console.log('error: ' + error);
      });

    // Lifetime data call
    /*     await callLifetime(this.state.result[0].id)
      .then(res => {
        console.log('DATAAAA');
        console.log(res.data);
        var joined = this.state.result.concat(res.data);
        this.setState({ lifetime: joined });
      })
      .catch(error => {
        console.log(error);
      });
  } */
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
          <Cards
            player={this.state.playersArray}
            lifetime={this.state.lifetime}
          />
        </ul>
      </div>
    );
  }
}

export default api;
