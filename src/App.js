import React from 'react';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems='center'
        justify='center'
        className={classes.grid}
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4}>
          <Details title='income' />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='expense' />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
