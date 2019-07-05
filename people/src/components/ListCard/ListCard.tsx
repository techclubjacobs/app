import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { 
  ListCardContainer, 
  ListCardContent, ListCardMedia,
  ListCardContentContainer, InfoColumn,
  PersonInfoContent
} from './ListCardStyles'
import profilePic from '../../taiyr.png'

class ListCard extends Component<{person: any}, {}> {
  public render() {
    const {person} = this.props
    return (
      <ListCardContainer>
        <ListCardMedia 
          image={profilePic}
        />
        <ListCardContentContainer>
          <ListCardContent>
            <Typography
              component="h2" variant="h5"
            >
              {person.name}
            </Typography>
            <Typography
              variant="subtitle1"
            >
              {person.email}
            </Typography>
          </ListCardContent>
          <PersonInfoContent>
            <InfoColumn>
              <Typography>College</Typography>
              <Typography>{person.college}</Typography>
            </InfoColumn>
            <InfoColumn>
              <Typography>Lives In</Typography>
              <Typography>{person.room}</Typography>
            </InfoColumn>
            <InfoColumn>
              <Typography>Studies</Typography>
              <Typography>{person.major}</Typography>
            </InfoColumn>
            <InfoColumn>
              <Typography>Class Of</Typography>
              <Typography>{person.class}</Typography>
            </InfoColumn>
          </PersonInfoContent>
        </ListCardContentContainer>
      </ListCardContainer>
    );
  }
}

export default ListCard;
