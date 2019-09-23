import React from 'react';

const Solo = props => {
  console.log(
    'data: ' +
      props.data[props.index].currentSeason.data.attributes.gameModeStats[
        'solo-fpp'
      ].wins
  );
  return (
    <div>
      <p>
        KD:{' '}
        {(
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].kills /
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].losses
        ).toFixed(2)}
      </p>
      <p>
        Wins:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].wins
        }
      </p>
      <p>
        Kills:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].kills
        }
      </p>
      <p>
        top10s:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].top10s
        }
      </p>
      <p>
        Rank:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].rankPoints
        }
      </p>
    </div>
  );
};

export default Solo;
{
  /* <p>
        KD:{' '}
        {(
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].kills /
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].losses
        ).toFixed(2)}
      </p>
      <p>
        Wins:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].wins
        }
      </p>
      <p>
        Kills:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].kills
        }
      </p>
      <p>
        top10s:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].top10s
        }
      </p>
      <p>
        Rank:{' '}
        {
          props.data[props.index].currentSeason.data.attributes.gameModeStats[
            'solo-fpp'
          ].rankPoints
        }
      </p> */
}
