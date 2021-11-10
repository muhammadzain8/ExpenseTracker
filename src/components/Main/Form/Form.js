import React, { useState, useContext } from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import useStyles from './styles';
import { ExpenseTrackerContext } from 'context/context';
import {
  incomeCategories,
  expenseCategories,
} from 'constants/categories';
import { v4 as uuidv4 } from 'uuid';
import formateDate from 'utils/formateDate';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formateDate(new Date()),
};

const Form = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const handleChange = (e) => {
    setFormData((st) => ({ ...st, [e.target.name]: e.target.value }));
  };

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      date: formateDate(new Date()),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === 'Income' ? incomeCategories : expenseCategories;


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          ............
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            name='type'
            onChange={handleChange}
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            name='category'
            onChange={handleChange}
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='number'
          label='Amount'
          fullWidth
          value={formData.amount}
          name='amount'
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='date'
          label='Date'
          fullWidth
          value={formData.date}
          name='date'
          onChange={handleChange}
        />
      </Grid>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
