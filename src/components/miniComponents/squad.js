import React from 'react';

const Squad = props => {
  console.log(props.data[props.index]);
  console.log('index:' + props.index);
  return (
    <div>
      SQUAD
      <br />
      <p>Player: {props.data[props.index].name}</p>
      <p>
        KD:{' '}
        {(
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'squad-fpp'
          ].kills /
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'squad-fpp'
          ].losses
        ).toFixed(2)}
      </p>
      <p>
        Wins:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'squad-fpp'
          ].wins
        }
      </p>
      <p>
        Kills:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'squad-fpp'
          ].kills
        }
      </p>
      <p>
        top10s:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'squad-fpp'
          ].top10s
        }
      </p>
      <p>
        Rank:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'squad-fpp'
          ].rankPoints
        }
      </p>
    </div>
  );
};

export default Squad;
