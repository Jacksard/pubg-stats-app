import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import shortid from 'shortid';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minHeight: 500,
    minWidth: 350,
    maxWidth: 350,
    padding: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  list: {
    flexGrow: 1
  }
});

const handleLifetime = props => {
  console.log(props.lifetime);
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
  const classes = useStyles();
  //const matches = props.player.relationships.matches.data[0].id;

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
                {item.name}
                <br />
                <ol>
                  <li>{item.matches[0].id}</li>
                  <li>{item.matches[1].id}</li>
                  <li>{item.matches[2].id}</li>
                  <li>{item.matches[3].id}</li>
                  <li>{item.matches[4].id}</li>
                </ol>

                {handleLifetime(props)}
              </Card>
            </li>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default SimpleCard;
