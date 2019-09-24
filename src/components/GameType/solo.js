import React from 'react';
import './solo.css';

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

  const stats_rank_fpp =
    props.data[props.index].currentSeason.data.attributes.gameModeStats[
      'solo-fpp'
    ].rankPoints;

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

  const stats_rank_tpp = props.data[
    props.index
  ].currentSeason.data.attributes.gameModeStats['solo'].rankPoints.toFixed(0);

  return (
    <div>
      {props.view[props.index] === 'fpp' ? (
        stats_kd_fpp === 'NaN' ? (
          <div className='noData'>
            <br />
            <br />
            <br />
            <p>No Records</p>
          </div>
        ) : (
          <div>
            <p>KD: {stats_kd_fpp}</p>
            <p>Wins: {stats_wins_fpp}</p>
            <p>Kills: {stats_kills_fpp}</p>
            <p>top10s: {stats_top10s_fpp}</p>
            <p>Rank: {stats_rank_fpp}</p>
          </div>
        )
      ) : stats_kd_tpp === 'NaN' ? (
        <div className='noData'>
          <br />
          <br />
          <br />
          <p>No Records</p>
        </div>
      ) : (
        <div>
          <p>KD: {stats_kd_tpp}</p>
          <p>Wins: {stats_wins_tpp}</p>
          <p>Kills: {stats_kills_tpp}</p>
          <p>top10s:{stats_top10s_tpp}</p>
          <p>Rank: {stats_rank_tpp}</p>
        </div>
      )}
    </div>
  );
};
export default Solo;
