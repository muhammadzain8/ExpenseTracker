import React, { useContext } from 'react';
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
import { ExpenseTrackerContext } from 'context/context';

const List = () => {
  const classes = useStyles();

  const { deleteTransaction, transactions } = useContext(
    ExpenseTrackerContext
  );
  
  const removeTransaction=(id) => {
    deleteTransaction(id)
  }
  return (
    <MuiList dense={false} className={classes.list}>
      {transactions.map((t) => (
        <Slide
          direction='down'
          in
          mountOnEnter
          unmountOnExit
          key={t.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  t.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={t.category}
              secondary={`${t.amount} - ${t.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='delete' onClick={()=>removeTransaction(t.id)}>
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
