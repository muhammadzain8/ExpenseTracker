import React from 'react';
import {
  List as MuiList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@material-ui/core';
import useStyles from './styles';
import { Delete, MoneyOff } from '@material-ui/icons';

const List = () => {
  const classes = useStyles();

  const transaction = [
    {
      id: 1,
      type: 'income',
      category: 'salary',
      amount: 100,
      date: new Date(),
    },
    {
      id: 2,
      type: 'expense',
      category: 'expense',
      amount: 100,
      date: new Date(),
    },
  ];
  return (
    <MuiList dense={false} className={classes.list}>
      {transaction.map((t) => (
        <Slide
          direction='down'
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='delete' onClick=''>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MuiList>
  );
};

export default List;
