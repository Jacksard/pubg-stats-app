import React, { Component } from 'react';

import Cards from '../components/Cards';
import './api.css';
import { callPlayer } from './axioscall';
import { url } from './actions';


class api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      playersArray: [],
      loading: false,
      error: {
        isError: false,
        msg: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handlePlayerDelete = this.handlePlayerDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ msg: '', isError: false })
    this.setState({ playerName: event.target.value });
  }


  handlePlayerDelete(id) {
    this.setState({ loading: true });
    console.log(id);
    const joined = [...this.state.playersArray];
    joined.splice(id, 1);
    this.setState({ playersArray: joined });
    this.setState({ loading: false });

  }


  async handlePlayerSubmit(event) {
    this.setState({ loading: true })
    event.preventDefault();
    console.log('URL API:  ' + url.player + this.state.playerName);


    // check if player name exists in players array before callPlayer, to avoid redundant API call
    let userExist = this.state.playersArray.find(item => item.name === this.state.playerName)
    if (userExist === undefined) {
      await callPlayer(this.state.playerName)
        .then(res => {
          // Build Players Object and push it into PlayersArray.
          if (res === undefined) {
            this.setState({ isError: true });
            this.setState({ msg: 'Player not found!' });
            this.setState({ loading: false })
          } else {
            var joined = this.state.playersArray.concat(res);
            this.setState({
              playersArray: joined
            });
            this.setState({ loading: false })
            this.setState({ playerName: '' })
            console.log(this.state.playersArray);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('User added');
      this.setState({ loading: false });
      return null
    }

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
          <Cards
            player={this.state.playersArray}
            delete={this.handlePlayerDelete}
            isLoading={this.state.loading}
          />
        </ul>
      </div >
    );
  }
}

export default api;
