import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import shortid from 'shortid';
import Grid from '@material-ui/core/Grid';
import Clear from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Loader from 'react-loader-spinner';
import './Cards.css';
import CurrentGameType from '../CurrentGameType/CurrentGameType';

class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: false
    };

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.handleViewType = this.handleViewType.bind(this);
    this.handleGameType = this.handleGameType.bind(this);
  }

  handleViewType(type, i) {
    console.log(type);
    console.log(i);

    if (this.props.view[i] !== type) {
      this.props.changeView(type, i);
    }
  }

  handleGameType(type, i) {
    console.log(type);
    console.log(i);

    if (this.props.content[i] !== type) {
      this.props.changeContent(type, i);
    }
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
                          onMouseEnter={() => this.handleHoverOn}
                          onMouseLeave={() => this.handleHoverOff}
                          className='removeCard'
                        />
                      </Grid>
                    </Grid>
                    <hr />
                    {/* ------ View Mode menu ------ */}
                    <Grid container spacing={1} className='gameTypeContainer'>
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
                    />

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
