import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import shortid from 'shortid';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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

const handleLifetime = props => {
  console.log('Lifetime');
};







// Extracts last 5 matches
const handleMatches = props => {
  const matches = props.player[0].relationships.matches.data.slice(0, 5);
  console.log(matches);
  return matches.map(id => {
    return <button key={shortid.generate()}>{id.id}</button>;
  });
};

const SimpleCard = props => {
  const [values, setValues] = React.useState({
    type: 'solo-fpp',
  });
  const classes = useStyles();
  //const matches = props.player.relationships.matches.data[0].id;
  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }



    ));
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.list}
      >
        {props.player.map(item => {
          return (
            <li key={shortid.generate()}>
              <Card className={classes.card}>
                <div className={classes.root}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.headLeft}>
                      {item.name}

                      <Clear className={classes.headRight} />
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
