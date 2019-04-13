import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { Component } from "react";

const tableStyle = {
  width: "100%",
};

const listStyle = {
  margin: "0 auto",
  width: "50%",
};

const noBorder = {
  border: "none",
  padding: 0,
};

const avatarStyle = {
  height: "100px",
  width: "100px",
};

class ListCard extends Component<{}, {}> {
  public render() {
    return (
      <List style={listStyle}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Avatar" src="default_profile.gif" style={avatarStyle} />
          </ListItemAvatar>

          <ListItemText
            primaryTypographyProps={{ variant: "h5" }}
            primary="Freshie McFreshface"
            secondary={
              <React.Fragment>
                <Typography 
                    component="span" 
                    variant="caption" 
                    color="textPrimary" 
                    style={{ marginBottom:20 }}>                    
                      f.mcfreshface@jacobs-university.de
                </Typography>

                <Table style={tableStyle}>
                  <TableBody>
                    <TableRow>
                      <TableCell style={noBorder} align="center">
                        College <br/>
                        <Typography variant="h6">
                          C3
                        </Typography>
                      </TableCell>

                      <TableCell style={noBorder} align="center">
                        Lives in <br/>
                        <Typography variant="h6">
                          XA-112
                        </Typography>
                      </TableCell>

                      <TableCell style={noBorder} align="center">
                        Majors in <br/>
                        <Typography variant="h6">
                          ECE
                        </Typography>
                      </TableCell>

                      <TableCell style={noBorder} align="center">
                        Class of <br/>
                        <Typography variant="h6">
                          2020
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </React.Fragment>
            }
            />
        </ListItem>
      </List>
    );
  }
}

export default ListCard;
