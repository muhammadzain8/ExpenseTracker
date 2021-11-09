import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title='Expense Tracker'
        subHeader='voice based navigation'
      />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance 101
        </Typography>
        <Typography
          align='center'
          variant='h5'
          style={{ lineHeight: '1.5rem', marginTop: '20px' }}
        >
          infocard
        </Typography>
      </CardContent>
      <Divider />
      <Form />
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
