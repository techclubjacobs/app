import { Avatar, List, ListItem, ListItemAvatar, Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import React, { Component } from "react";

const gridStyle = {
  margin: "0 auto",
  width: "50%",
};

const avatarStyle = {
  height: "100px",
  width: "100px",
};

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GridCard extends Component<{}, {}> {
  public people = [
    {
      'firstname': 'Freshie',
      'lastname': 'McFreshface'
    },
    {
      'firstname': 'Another',
      'lastname': 'One'
    },
    {
      'firstname': 'Last',
      'lastname': 'One'
    }
  ]

  public state = {
    spacing: '12',
    gridCount: '2'
  };

  public render() {
    const { classes }: any = this.props;
    const { spacing } = this.state;

    return (
      <Grid container style={gridStyle} className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.gridCards} justify="center" spacing={16}>
            {this.people.map((person, index) => (
              <Grid key={index} item>
                <Paper className={classes.paper}>
                  <ListItemAvatar>
                    <Avatar alt="Avatar" src="default_profile.gif" style={avatarStyle} />
                  </ListItemAvatar>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GridCard);
