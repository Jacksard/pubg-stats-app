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
                .gameModeStats['duo-fpp'].kills /
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo-fpp'].losses
            ).toFixed(2)}
          </p>
          <p>
            Wins:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo-fpp'].wins
            }
          </p>
          <p>
            Kills:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo-fpp'].kills
            }
          </p>
          <p>
            top10s:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo-fpp'].top10s
            }
          </p>
          <p>
            Rank:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo-fpp'].rankPoints
            }
          </p>
        </div>
      ) : (
        <div>
          <p>
            KD:{' '}
            {(
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo'].kills /
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo'].losses
            ).toFixed(2)}
          </p>
          <p>
            Wins:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo'].wins
            }
          </p>
          <p>
            Kills:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo'].kills
            }
          </p>
          <p>
            top10s:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo'].top10s
            }
          </p>
          <p>
            Rank:{' '}
            {
              props.data[props.index].currentSeason.data.attributes
                .gameModeStats['duo'].rankPoints
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Duo;
