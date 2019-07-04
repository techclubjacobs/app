import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { 
  ListCardGrid, ListCardContainer, 
  ListCardContent, ListCardMedia,
  ListCardSubContainer, ListCardContentContainer
} from './ListCardStyles'
import profilePic from '../../taiyr.png'

const people = [
  {
    name: "Taiyr Begeyev",
    email: "t.begeyev@jacobs-university.de",
    college: "Krupp",
    room: "KC-113",
    major: "CS",
    class: "2021"
  },
  {
    name: "Taiyr Begeyev",
    email: "t.begeyev@jacobs-university.de",
    college: "Krupp",
    room: "KC-113",
    major: "CS",
    class: "2021"
  },
  {
    name: "Taiyr Begeyev",
    email: "t.begeyev@jacobs-university.de",
    college: "Krupp",
    room: "KC-113",
    major: "CS",
    class: "2021"
  }
]

class ListCard extends Component<{}, {}> {
  public render() {
    return (
       <React.Fragment>
         <ListCardGrid container spacing={8}>
          {
            people.map(person => (
              <ListCardGrid item key={person.email} xs={12}>
                <ListCardContainer>
                  <ListCardSubContainer>
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
                        <Typography></Typography>
                      </ListCardContent>
                    </ListCardContentContainer>
                  </ListCardSubContainer>
                </ListCardContainer>
              </ListCardGrid>
            ))
          }
         </ListCardGrid>
       </React.Fragment>
    );
  }
}

export default ListCard;
