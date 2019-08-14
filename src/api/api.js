import React, { Component } from 'react';

import Cards from '../components/Cards';
import './api.css';
import { callPlayer } from './axioscall';
import { url } from './actions';

import Loader from 'react-loader-spinner'

class api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      playersArray: [],
      loading: false,
      lifetime: [],
      error: {
        isError: false,
        msg: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ msg: '', isError: false })
    this.setState({ playerName: event.target.value });
  }

  async handlePlayerSubmit(event) {
    this.setState({ loading: true })
    event.preventDefault();
    console.log('URL API:  ' + url.player + this.state.playerName);
    await callPlayer(this.state.playerName)
      .then(res => {
        // Build Players Object and push it into PlayersArray.
        if (res === undefined) {
          this.setState({ isError: true });
          this.setState({ msg: 'Player not found!' });
        } else {
          var joined = this.state.playersArray.concat(res);
          this.setState({
            playersArray: joined
          });
          this.setState({ loading: false })
          console.log(this.state.playersArray);
        }
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

          {this.state.isError === true ? <h4>{this.state.msg}</h4> : null}
        </form>
        <ul>
          {this.state.loading === true ? <Loader type="Puff"
            color="#00BFFF"
            height="100"
            width="100" /> : <Cards
              player={this.state.playersArray}
              lifetime={this.state.lifetime}
            />}
        </ul>
      </div>
    );
  }
}

export default api;
