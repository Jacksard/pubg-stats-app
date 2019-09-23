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
import Duo from './miniComponents/duo';
import Squad from './miniComponents/squad';

import CurrentGameType from './CurrentGameType';

class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: false,
      gameType: null,
      index: null,
      showtype: []
    };

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.handleGameType = this.handleGameType.bind(this);
  }

  handleGameType(type, i) {
    console.log(type);
    console.log(i);
    this.props.changeContent(type, i);
    this.setState({ gameType: type });
    this.setState({ index: i });

    // Make magic here to alter the array of content
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
    const gameType = this.state.gameType;

    let currentGameType;
    switch (gameType) {
      case 'solo':
        currentGameType = (
          <Solo data={this.props.player} index={this.state.index} />
        );

        break;
      case 'duo':
        currentGameType = (
          <Duo data={this.props.player} index={this.state.index} />
        );
        break;
      case 'squad':
        currentGameType = (
          <Squad data={this.props.player} index={this.state.index} />
        );
        break;
      default:
        currentGameType = null;
    }

    let current;

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
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'solo', i)}
                      >
                        <div className='styleTab'>SOLO</div>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'duo', i)}
                      >
                        <div className='styleTab'>DUO</div>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'squad', i)}
                      >
                        <div className='styleTab'>SQUAD</div>
                      </Grid>
                    </Grid>
                    <CurrentGameType
                      content={this.props.content[i]}
                      index={i}
                    />
                    {/*  <CurrentGameType index={i} gameType={gameType} /> */}
                    {/* <div className='fabDiv'>
                      <Fab
                        color='primary'
                        aria-label='add'
                        className='fab'
                        size='small'
                      >
                        <AddIcon className='addIcon' />
                      </Fab>
                    </div> */}
                    <h1>{this.props.content[i]}</h1>
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
