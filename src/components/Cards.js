import React, { Component } from 'react';

import Card from '@material-ui/core/Card';

import shortid from 'shortid';

import Grid from '@material-ui/core/Grid';

import Clear from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Loader from 'react-loader-spinner';

import { Container } from '@material-ui/core';

import './Cards.css';

import Solo from './miniComponents/solo';
import Dou from './miniComponents/dou';
import Squad from './miniComponents/squad';

class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: false,
      gameType: null,
      index: null
    };

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.handleGameType = this.handleGameType.bind(this);
  }

  handleGameType(x, i) {
    console.log(x);
    console.log(i);
    this.setState({ gameType: x });
    this.setState({ index: i });
  }

  handleHoverOn() {
    console.log('hover on test');
    this.setState(prevState => ({
      clear: !prevState.clear
    }));
  }
  handleHoverOff() {
    console.log('hover on test off');
    this.setState(prevState => ({
      clear: !prevState.clear
    }));
  }

  render() {
    function test(i, g) {}

    console.log(this.state.gameType);
    const gameType = this.state.gameType;

    let currentGameType;
    switch (gameType) {
      case 'solo':
        currentGameType = (
          <Solo data={this.state.player} index={this.state.index} />
        );
        break;
      case 'dou':
        currentGameType = <Dou />;
        break;
      case 'squad':
        currentGameType = <Squad />;
        break;
      default:
        currentGameType = 'DEFAULT GAME!';
    }

    return (
      <React.Fragment>
        <Grid container direction='row' justify='center' alignItems='center'>
          {this.props.isLoading === false ? (
            this.props.player.map((item, i) => {
              return (
                <li key={shortid.generate()}>
                  <Card className='card'>
                    <Grid container spacing={0}>
                      <Grid item xs={12} className='headLeft'>
                        {item.name}

                        <Clear
                          onClick={this.props.delete.bind(this, i)}
                          onMouseEnter={this.handleHoverOn}
                          onMouseLeave={this.handleHoverOff}
                          className='removeCard'
                        />
                      </Grid>
                    </Grid>

                    <hr />

                    <Grid container spacing={1} className='gameTypeContainer'>
                      <Grid
                        value='solo'
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'solo', i)}
                      >
                        solo
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'dou', i)}
                      >
                        dou
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'squad', i)}
                      >
                        squads
                      </Grid>
                    </Grid>
                    {currentGameType}
                    {/* <p>
                      <strong>Solo - FPP</strong>
                    </p>
                    <p>
                      Wins:
                      {item.lifetime.attributes.gameModeStats['solo-fpp'].wins}
                    </p>
                    <p>
                      Kills:
                      {item.lifetime.attributes.gameModeStats['solo-fpp'].kills}
                    </p>
                    <p>
                      Headshot kills:
                      {
                        item.lifetime.attributes.gameModeStats['solo-fpp']
                          .headshotKills
                      }
                    </p>
                    <p>
                      Longest Kill:
                      {item.lifetime.attributes.gameModeStats[
                        'solo-fpp'
                      ].longestKill.toFixed(1)}
                      m
                    </p> */}
                    <div className='fabDiv'>
                      <Fab
                        color='primary'
                        aria-label='add'
                        className='fab'
                        size='small'
                      >
                        <AddIcon className='addIcon' />
                      </Fab>
                    </div>
                  </Card>
                </li>
              );
            })
          ) : (
            <Loader type='Puff' color='#00BFFF' height={100} width={100} />
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default SimpleCard;
