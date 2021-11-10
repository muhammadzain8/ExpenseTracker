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
        spacing={3}
        alignItems='center'
        justifyContent='center'
        className={classes.grid}
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={3}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title='Expense' />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
