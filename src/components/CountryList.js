import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const CountryList = (props) => {
  
  return (
    <Paper className="auto-height">
      <List> 
      {
        props.countries.map(item => (
          <ListItem key={item.name}>
            <ListItemText primary={item.name}/>
          </ListItem>
        ))
      }
      </List>
    </Paper>
  );
}

export default CountryList;