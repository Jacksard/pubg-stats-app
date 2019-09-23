import React from 'react';

const Duo = props => {
  return (
    <div>
      {props.view[props.index] == 'fpp' ? (
        <div>
          <p>
            KD:{' '}
            {(
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad-fpp'].kills /
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad-fpp'].losses
            ).toFixed(2)}
          </p>
          <p>
            Wins:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad-fpp'].wins
            }
          </p>
          <p>
            Kills:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad-fpp'].kills
            }
          </p>
          <p>
            top10s:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad-fpp'].top10s
            }
          </p>
          <p>
            Rank:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad-fpp'].rankPoints
            }
          </p>
        </div>
      ) : (
        <div>
          <p>
            KD:{' '}
            {(
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad'].kills /
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad'].losses
            ).toFixed(2)}
          </p>
          <p>
            Wins:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad'].wins
            }
          </p>
          <p>
            Kills:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad'].kills
            }
          </p>
          <p>
            top10s:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad'].top10s
            }
          </p>
          <p>
            Rank:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['squad'].rankPoints
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Duo;
