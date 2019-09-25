import React, { Component } from 'react';
import Clear from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import './CardHeader.css';

class CardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: false
    };

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
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
    const rank = () => {
      if (this.props.view === null) {
        return this.props.gameType;
      } else {
        return this.props.gameType + '-' + this.props.view;
      }
    };

    const rankPoints = this.props.item.currentSeason.data.attributes.gameModeStats[
      rank()
    ].rankPoints.toFixed(0);
    return (
      <div>
        <Grid item xs={12} className='headerCard'>
          <Grid item xs={4} className='headerCardLeftSection'>
            ICON
          </Grid>
          <Grid item xs={7} className='headerCardMiddleSection'>
            <p>{this.props.item.name}</p>
            <h4>{rankPoints}</h4>
          </Grid>
          <Grid item xs={1} className='headerCardRightSection'>
            <Clear
              onClick={this.props.delete.bind(this, this.props.index)}
              onMouseEnter={() => this.handleHoverOn}
              onMouseLeave={() => this.handleHoverOff}
              className='removeCard'
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default CardHeader;
