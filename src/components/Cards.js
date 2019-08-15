import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import shortid from 'shortid';

import Grid from '@material-ui/core/Grid';

import Clear from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles(theme => ({
  card: {
    alignItems: 'stretch',
    minHeight: 'auto',
    minWidth: 250,
    maxWidth: 250,
    padding: 5
  },

  headLeft: {
    backgroundColor: 'lightBlue',
    borderRadius: '0px',
    margin: '0',
    height: '90px',
    lineHeight: '90px',
    textAlign: 'center'
  },
  headRight: {
    cursor: 'pointer',
    borderRadius: '50%',
    margin: 'auto',
    float: 'right'
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));


const SimpleCard = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.list}
      >
        {props.player.map((item, i) => {
          return (
            <li key={shortid.generate()} >
              <Card className={classes.card} >
                <div className={classes.root}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.headLeft}>
                      {item.name}

                      <Clear className={classes.headRight} data-key={i} onClick={props.delete.bind(this, i)} />
                    </Grid>
                  </Grid>
                </div>

                <hr />
                <Fab color="primary" aria-label="add" className={classes.fab} size="small">
                  <AddIcon />
                </Fab>




                <p>
                  <strong>Solo - FPP</strong>
                </p>
                <p>
                  Wins:
                  {item.lifetime.attributes.gameModeStats['solo-fpp'].wins}
                </p>
                <p>
                  Kills:
                  {item.lifetime.attributes.gameModeStats['solo-fpp'].kills}
                </p>
                <p>
                  Headshot kills:
                  {
                    item.lifetime.attributes.gameModeStats['solo-fpp']
                      .headshotKills
                  }
                </p>
                <p>
                  Longest Kill:
                  {item.lifetime.attributes.gameModeStats[
                    'solo-fpp'
                  ].longestKill.toFixed(1)}
                  m
                </p>


              </Card>
            </li>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default SimpleCard;
