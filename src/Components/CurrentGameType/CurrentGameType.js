import React, { Component } from 'react';
import Solo from '../GameType/solo';
import Duo from '../GameType/duo';
import Squad from '../GameType/squad';
import './CurrentGameType.css';

class currentGameType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comparisonData: {
        kd: { winners: [] },
        wins: { winners: [] },
        kills: { winners: [] },
        top10s: { winners: [] },
        longestKill: { winners: [] },
        headshotKills: { winners: [] }
      }
    };

    this.indexHighValue = this.indexHighValue.bind(this);
    this.winners = this.winners.bind(this);
    this.indexHighValue = this.indexHighValue.bind(this);
  }

  componentWillMount() {
    // Map all comparison variables here
    // K/D
    const kd = this.props.data.map(item =>
      parseFloat(
        item.currentSeason.data.attributes.gameModeStats['solo-fpp'].kills /
          item.currentSeason.data.attributes.gameModeStats['solo-fpp'].losses
      ).toFixed(2)
    );
    // Wins
    const wins = this.props.data.map(
      item => item.currentSeason.data.attributes.gameModeStats['solo-fpp'].wins
    );
    // Kills
    const kills = this.props.data.map(
      item => item.currentSeason.data.attributes.gameModeStats['solo-fpp'].kills
    );
    // Top 10's
    const top10s = this.props.data.map(
      item =>
        item.currentSeason.data.attributes.gameModeStats['solo-fpp'].top10s
    );
    // Longest Kill
    const longestKill = this.props.data.map(item =>
      item.currentSeason.data.attributes.gameModeStats[
        'solo-fpp'
      ].longestKill.toFixed(0)
    );
    // Kills
    const headshotKills = this.props.data.map(
      item =>
        item.currentSeason.data.attributes.gameModeStats['solo-fpp']
          .headshotKills
    );

    /* console.log(kd);
    console.log(wins);
    console.log(kills);
    console.log(top10s);
    console.log(longestKill);
    console.log(headshotKills); */

    const comparisonCopy = this.state.comparisonData;

    comparisonCopy.kd.winners = this.winners(kd);
    comparisonCopy.wins.winners = this.winners(wins);
    comparisonCopy.kills.winners = this.winners(kills);
    comparisonCopy.top10s.winners = this.winners(top10s);
    comparisonCopy.longestKill.winners = this.winners(longestKill);
    comparisonCopy.headshotKills.winners = this.winners(headshotKills);

    this.setState({ comparisonData: comparisonCopy });

    //console.log(this.state.comparisonData);
  }

  indexHighValue(array) {
    const indexOfMaxValue = array.reduce(
      (indexMax, x, i, arr) => (x > arr[indexMax] ? i : indexMax),
      0
    );
    return indexOfMaxValue;
  }

  winners(array) {
    const result = [];
    if (array.length === 1) {
      return 0;
    } else {
      const indexOfMaxValue = array.reduce(
        (indexMax, x, i, arr) => (x > arr[indexMax] ? i : indexMax),
        0
      );

      const maxValue = array[indexOfMaxValue];
      //console.log('MaxValue: ' + maxValue);
      array.map((item, index) => {
        //  console.log(maxValue);
        if (item == Number(maxValue)) {
          result.push(index);
        }
      });
      return result;
    }
  }

  handleGameType(type) {
    switch (type) {
      case 'solo':
        return (
          <Solo
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
            comparisonData={this.state.comparisonData}
          />
        );
      case 'duo':
        return (
          <Duo
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
            comparisonData={this.state.comparisonData}
          />
        );
      case 'squad':
        return (
          <Squad
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
            comparisonData={this.state.comparisonData}
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
