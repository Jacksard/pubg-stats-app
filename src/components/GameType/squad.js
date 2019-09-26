import React from 'react';
import Grid from '@material-ui/core/Grid';
const Squad = props => {
  const stats_kd_fpp = (
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad-fpp'
    ].kills /
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad-fpp'
    ].losses
  ).toFixed(2);

  const stats_wins_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad-fpp'
    ].wins;

  const stats_kills_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad-fpp'
    ].kills;
  const stats_top10s_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad-fpp'
    ].top10s;

  const stats_longestKill_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad-fpp'
    ].longestKill.toFixed(0) + 'm';
  const stats_headshotKills_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad-fpp'
    ].headshotKills;

  // TPP
  const stats_kd_tpp = (
    props.data[props.index].currentSeason.data.attributes.gameModeStats['squad']
      .kills /
    props.data[props.index].currentSeason.data.attributes.gameModeStats['squad']
      .losses
  ).toFixed(2);

  const stats_wins_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['squad']
      .wins;

  const stats_kills_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['squad']
      .kills;
  const stats_top10s_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['squad']
      .top10s;

  const stats_longestKill_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'squad'
    ].longestKill.toFixed(0) + 'm';
  const stats_headshotKills_tpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats['squad']
      .headshotKills;

  return (
    <div>
      {props.view[props.index] === 'fpp' ? (
        stats_kd_fpp === 'NaN' ? (
          <div className='noData'>
            <p className='middle'>No Records</p>
          </div>
        ) : (
          <Grid item xs={12} className='statsGrid'>
            <Grid item xs={12}>
              <p id='stats'>K/D: {stats_kd_fpp}</p>
              <p id='stats'>Wins: {stats_wins_fpp}</p>
              <p id='stats'>Kills: {stats_kills_fpp}</p>
              <p id='stats'>Top10s: {stats_top10s_fpp}</p>
              <p id='stats'>LongestKill: {stats_longestKill_fpp}</p>
              <p id='stats'>Headshot Kills: {stats_headshotKills_fpp}</p>
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
    </div>
  );
};

export default Squad;
