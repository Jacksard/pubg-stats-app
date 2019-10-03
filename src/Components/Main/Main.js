import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import './Main.css';
import { callPlayer } from '../../api/axioscall';

import Button from '@material-ui/core/Button';

class api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      playersArray: [],
      playersView: [],
      playerGameType: [],
      comparison: {
        kd: null,
        wins: null,
        kills: null,
        top10s: null,
        longestKill: null,
        HeadShotKills: null
      },
      loading: false,
      error: {
        isError: false,
        msg: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handlePlayerDelete = this.handlePlayerDelete.bind(this);
    this.handleNameButtons = this.handleNameButtons.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }

  handleNameButtons(name, e) {
    console.log(name);
    this.setState({ playerName: name });
    this.handlePlayerSubmit(e);
  }

  handleChange(event) {
    this.setState({ msg: '', isError: false });
    this.setState({ playerName: event.target.value });
  }

  handlePlayerDelete(id) {
    this.setState({ loading: true });
    console.log(id);

    // splice player from playersArray
    const joined = [...this.state.playersArray];
    joined.splice(id, 1);
    this.setState({ playersArray: joined });
    // splice player View from playersView arary
    const newView = [...this.state.playersView];
    newView.splice(id, 1);
    this.setState({ playersView: newView });
    // splice player View from playerGameType array
    const newContent = this.state.playerGameType;
    newContent.splice(id, 1);
    this.setState({ playerGameType: newContent });

    //console.log(this.state.playersView);
    this.setState({ loading: false });
  }

  handleChangeView(type, i) {
    //console.log(type);
    //console.log(i);
    let newView = this.state.playersView;

    newView[i] = type;
    this.setState({ playersView: newView });
    //console.log(this.state.playersView);
  }

  handleChangeContent(type, i) {
    //console.log(type);
    //console.log(i);
    let newContent = this.state.playerGameType;
    newContent[i] = type;
    this.setState({ playerGameType: newContent });
    //console.log(this.state.playerGameType);
  }

  async handlePlayerSubmit(event) {
    this.setState({ loading: true });
    event.preventDefault();
    //console.log('URL API:  ' + url.player + this.state.playerName);

    // check if player name exists in players array before callPlayer, to avoid redundant API call
    let userExist = this.state.playersArray.find(
      item => item.name === this.state.playerName
    );
    if (userExist === undefined) {
      await callPlayer(this.state.playerName)
        .then(res => {
          // Build Players Object and push it into PlayersArray.
          if (res === undefined) {
            this.setState({ isError: true });
            this.setState({ msg: 'Player not found!' });
            this.setState({ loading: false });
          } else {
            var joined = this.state.playersArray.concat(res);
            this.setState({
              playersArray: joined
            });
            //console.log(this.state.playersArray);
            this.setState({
              playerGameType: this.state.playerGameType.concat('solo')
            });
            this.setState({
              playersView: this.state.playersView.concat('fpp')
            });

            // Comparison data

            this.setState({ comparison: null });

            this.setState({ loading: false });
            this.setState({ playerName: '' });
            //console.log(this.state.playersArray);
            //console.log(this.state.playerGameType);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('User added');
      this.setState({ loading: false });
      return null;
    }
  }
  render() {
    const buttonDisabled = () => {
      if (!this.state.loading) {
        return false;
      } else {
        return true;
      }
    };

    return (
      <div className='mainContainer'>
        <form onSubmit={this.handlePlayerSubmit}>
          <br />
          <div className='textField-mu'>
            <p className='playerName'>PLAYER NAME</p>
            <input
              label='Name'
              className='inputField'
              onChange={this.handleChange}
              value={this.state.playerName}
            />
            <br />
            <Button type='submit' value='Submit' className='submitButton'>
              Submit
            </Button>
          </div>

          {/* players buttons */}

          <button
            onClick={this.handleChange}
            value='J4cksard'
            disabled={buttonDisabled()}
          >
            J4cksard
          </button>

          <button
            onClick={this.handleChange}
            value='Twisted_OO'
            disabled={buttonDisabled()}
          >
            Twisted_OO
          </button>
          <button
            onClick={this.handleChange}
            value='Kard4shiaN'
            disabled={buttonDisabled()}
          >
            Kard4shiaN
          </button>
          <button
            onClick={this.handleChange}
            value='chikenkk'
            disabled={buttonDisabled()}
          >
            chikenkk
          </button>
          <button
            onClick={this.handleChange}
            value='twitch_tmathree'
            disabled={buttonDisabled()}
          >
            twitch_tmathree
          </button>
          <button
            onClick={this.handleChange}
            value='Shocki-'
            disabled={buttonDisabled()}
          >
            Shocki-
          </button>
          <button
            onClick={this.handleChange}
            value='WackyJacky101'
            disabled={buttonDisabled()}
          >
            WackyJacky101
          </button>
          <button
            onClick={this.handleChange}
            value='chocoTaco'
            disabled={buttonDisabled()}
          >
            chocoTaco
          </button>

          {this.state.isError === true ? <h4>{this.state.msg}</h4> : null}
        </form>
        <div className='cardContainer'>
          <ul>
            <Cards
              view={this.state.playersView}
              content={this.state.playerGameType}
              changeContent={this.handleChangeContent}
              changeView={this.handleChangeView}
              player={this.state.playersArray}
              delete={this.handlePlayerDelete}
              isLoading={this.state.loading}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default api;
