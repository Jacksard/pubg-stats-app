import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import shortid from 'shortid';
import Grid from '@material-ui/core/Grid';

import Loader from 'react-loader-spinner';
import './Cards.css';
import CurrentGameType from '../CurrentGameType/CurrentGameType';
import CardHeader from './CardHeader/CardHeader';

class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: false,
      gameType: 'solo',
      view: 'fpp'
    };

    this.handleViewType = this.handleViewType.bind(this);
    this.handleGameType = this.handleGameType.bind(this);
  }

  handleViewType(type, i) {
    console.log(type);
    console.log(i);
    if (i === 'tpp') {
      this.setState({ view: null });
    }
    if (this.props.view[i] !== type) {
      this.props.changeView(type, i);
    }
  }

  handleGameType(type, i) {
    console.log(type);
    console.log(i);
    this.setState({ gameType: type });
    if (this.props.content[i] !== type) {
      this.props.changeContent(type, i);
    }
  }

  render() {
    const rank = (type, view) => {
      if (view === 'tpp') {
        return type;
      } else {
        return type + '-' + view;
      }
    };
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
                        <CardHeader
                          delete={this.props.delete}
                          index={i}
                          item={item}
                          gameType={this.state.gameType}
                          rank={item.currentSeason.data.attributes.gameModeStats[
                            rank(this.props.content[i], this.props.view[i])
                          ].rankPoints.toFixed(0)}
                        />
                        {/*  item.name */}
                        {/* <h4>
                          {' '}
                          
                        </h4> */}
                      </Grid>
                    </Grid>
                    <hr />
                    {/* ------ View Mode menu ------ */}
                    <Grid container spacing={2} className='gameTypeContainer'>
                      <Grid
                        item
                        xs={6}
                        className='gameType'
                        onClick={this.handleViewType.bind(this, 'fpp', i)}
                      >
                        <div
                          className={
                            this.props.view[i] === 'fpp'
                              ? 'selectedTab'
                              : 'styleTab'
                          }
                        >
                          FPP
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        className='gameType'
                        onClick={this.handleViewType.bind(this, 'tpp', i)}
                      >
                        <div
                          className={
                            this.props.view[i] === 'tpp'
                              ? 'selectedTab'
                              : 'styleTab'
                          }
                        >
                          TPP
                        </div>
                      </Grid>
                    </Grid>

                    {/* ------ Game Type menu ------ */}
                    <Grid container spacing={1} className='gameTypeContainer'>
                      <Grid
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'solo', i)}
                      >
                        <div
                          className={
                            this.props.content[i] === 'solo'
                              ? 'selectedTab'
                              : 'styleTab'
                          }
                        >
                          SOLO
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'duo', i)}
                      >
                        <div
                          className={
                            this.props.content[i] === 'duo'
                              ? 'selectedTab'
                              : 'styleTab'
                          }
                        >
                          DUO
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        className='gameType'
                        onClick={this.handleGameType.bind(this, 'squad', i)}
                      >
                        <div
                          className={
                            this.props.content[i] === 'squad'
                              ? 'selectedTab'
                              : 'styleTab'
                          }
                        >
                          SQUAD
                        </div>
                      </Grid>
                    </Grid>
                    <CurrentGameType
                      view={this.props.view}
                      content={this.props.content[i]}
                      index={i}
                      data={this.props.player}
                      className='currentGameType'
                    />

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
