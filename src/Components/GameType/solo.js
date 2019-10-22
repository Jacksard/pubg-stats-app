import React from 'react';
import './solo.css';
import Grid from '@material-ui/core/Grid';

const Solo = props => {
  const stats_kd_fpp = (
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].kills /
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].losses
  ).toFixed(2);

  const stats_wins_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].wins;

  const stats_kills_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].kills;
  const stats_top10s_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].top10s;

  const stats_longestKill_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].longestKill.toFixed(0) + 'm';
  const stats_headshotKills_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].headshotKills;

  // TPP
  const stats_kd_tpp = (
    props.data[props.index].currentSeason.data.attributes.gameModeStats['solo']
      .kills /
    props.data[props.index].currentSeason.data.attributes.gameModeStats['solo']
      .losses
  ).toFixed(2);

  const stats_wins_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['solo']
      .wins;

  const stats_kills_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['solo']
      .kills;
  const stats_top10s_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['solo']
      .top10s;

  const stats_longestKill_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo'
    ].longestKill.toFixed(0) + 'm';
  const stats_headshotKills_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['solo']
      .headshotKills;

  // comparison function
  const isMax = (type, data, index) => {
    //console.log(data);

    if (
      data[type].winners.length === 1 &&
      data[type].winners == Number(index)
    ) {
      return 'maxValue';
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      {props.view[props.index] === 'fpp' ? (
        stats_kd_fpp === 'NaN' ? (
          <div className='noData'>
            <p className='middle'>No Records</p>
          </div>
        ) : (
          <Grid item xs={12} className='statsGrid'>
            <Grid item xs={12} className='test'>
              <p id='stats'>
                K/D:{' '}
                <span
                  className={isMax('kd', props.comparisonData, props.index)}
                >
                  {stats_kd_fpp}
                </span>
              </p>
              <p id='stats'>
                Wins:{' '}
                <span
                  className={isMax('wins', props.comparisonData, props.index)}
                >
                  {stats_wins_fpp}
                </span>
              </p>
              <p id='stats'>
                Kills:{' '}
                <span
                  className={isMax('kills', props.comparisonData, props.index)}
                >
                  {stats_kills_fpp}
                </span>
              </p>
              <p id='stats'>
                Top10s:{' '}
                <span
                  className={isMax('top10s', props.comparisonData, props.index)}
                >
                  {stats_top10s_fpp}
                </span>
              </p>
              <p id='stats'>
                Longest Kill:{' '}
                <span
                  className={isMax(
                    'longestKill',
                    props.comparisonData,
                    props.index
                  )}
                >
                  {stats_longestKill_fpp}
                </span>
              </p>
              <p id='stats'>
                Headshot Kills:{' '}
                <span
                  className={isMax(
                    'headshotKills',
                    props.comparisonData,
                    props.index
                  )}
                >
                  {stats_headshotKills_fpp}
                </span>
              </p>
            </Grid>
          </Grid>
        )
      ) : stats_kd_tpp === 'NaN' ? (
        <div className='noData '>
          <p className='middle'>No Records</p>
        </div>
      ) : (
        <Grid item xs={12} className='statsGrid'>
          <Grid item xs={12}>
            <p id='stats'>K/D: {stats_kd_tpp}</p>
            <p id='stats'>Wins: {stats_wins_tpp}</p>
            <p id='stats'>Kills: {stats_kills_tpp}</p>
            <p id='stats'>Top10s: {stats_top10s_tpp}</p>
            <p id='stats'>LongestKill: {stats_longestKill_tpp}</p>
            <p id='stats'>Headshot Kills: {stats_headshotKills_tpp}</p>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};
export default Solo;
