import React from 'react';

const Solo = props => {
  return (
    <div>
      {props.view[props.index] === 'fpp' ? (
        <div>
          <p>
            KD:{' '}
            {(
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo-fpp'].kills /
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo-fpp'].losses
            ).toFixed(2)}
          </p>
          <p>
            Wins:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo-fpp'].wins
            }
          </p>
          <p>
            Kills:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo-fpp'].kills
            }
          </p>
          <p>
            top10s:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo-fpp'].top10s
            }
          </p>
          <p>
            Rank:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo-fpp'].rankPoints
            }
          </p>
        </div>
      ) : (
        <div>
          <p>
            KD:{' '}
            {(
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo'].kills /
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo'].losses
            ).toFixed(2)}
          </p>
          <p>
            Wins:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo'].wins
            }
          </p>
          <p>
            Kills:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo'].kills
            }
          </p>
          <p>
            top10s:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo'].top10s
            }
          </p>
          <p>
            Rank:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['solo'].rankPoints
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Solo;
