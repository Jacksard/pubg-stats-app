import React from 'react';

const Duo = props => {
  return (
    <div>
      <p>
        KD:{' '}
        {(
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'duo-fpp'
          ].kills /
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'duo-fpp'
          ].losses
        ).toFixed(2)}
      </p>
      <p>
        Wins:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'duo-fpp'
          ].wins
        }
      </p>
      <p>
        Kills:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'duo-fpp'
          ].kills
        }
      </p>
      <p>
        top10s:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'duo-fpp'
          ].top10s
        }
      </p>
      <p>
        Rank:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'duo-fpp'
          ].rankPoints
        }
      </p>
    </div>
  );
};

export default Duo;
