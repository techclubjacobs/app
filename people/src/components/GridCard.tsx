import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { Component } from "react";

const listStyle = {
  margin: "0 auto",
  width: "50%",
};

const avatarStyle = {
  height: "100px",
  width: "100px",
};

class GridCard extends Component<{}, {}> {
  public render() {
    return (
      <List style={listStyle}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Avatar" src="default_profile.gif" style={avatarStyle} />
          </ListItemAvatar>
        </ListItem>
      </List>
    );
  }
}

export default GridCard;
