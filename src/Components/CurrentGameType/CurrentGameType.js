import React, { Component } from 'react';
import Solo from '../GameType/solo';
import Duo from '../GameType/duo';
import Squad from '../GameType/squad';
import './CurrentGameType.css';

class currentGameType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comparison: {
        kd: null,
        kills: null,
        top10s: null,
        longestKill: null,
        headshotKills: null
      }
    };
  }

  componentDidMount() {
    // Map all comparison variables here
    const kd = this.props.data.map(item =>
      (
        item.currentSeason.data.attributes.gameModeStats['solo-fpp'].kills /
        item.currentSeason.data.attributes.gameModeStats['solo-fpp'].losses
      ).toFixed(2)
    );

    const kills = this.props.data.map(
      item => item.currentSeason.data.attributes.gameModeStats['solo-fpp'].kills
    );

    console.log(kd);
    console.log(kills);

    console.log(kills);
    const highestKill = Math.max.apply(Math, kills);

    this.setState({ comparison: [null] });
    console.log(this.state.comparison);
  }

  handleGameType(type) {
    switch (type) {
      case 'solo':
        return (
          <Solo
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
            comparison={this.state.comparison}
          />
        );
      case 'duo':
        return (
          <Duo
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
          />
        );
      case 'squad':
        return (
          <Squad
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className='currentGameType'>
        {this.handleGameType(this.props.content)}
      </div>
    );
  }
}

export default currentGameType;
