import React from 'react';

const Dou = props => {
  console.log(props.data[props.index]);
  console.log('index:' + props.index);
  return (
    <div>
      Dou
      <br />
    </div>
  );
};

export default Dou;

/* {this.props.lifetime.attributes.gameModeStats['solo-fpp'].wins} */
{
  /* <p>Player: {props.data[props.index].name}</p>
      <p>
        KD:{' '}
        {(
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'dou-fpp'
          ].kills /
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'dou-fpp'
          ].losses
        ).toFixed(2)}
      </p>
      <p>
        Wins:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'dou-fpp'
          ].wins
        }
      </p>
      <p>
        Kills:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'dou-fpp'
          ].kills
        }
      </p>
      <p>
        top10s:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'dou-fpp'
          ].top10s
        }
      </p>
      <p>
        Rank:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'dou-fpp'
          ].rankPoints
        }
      </p> */
}
