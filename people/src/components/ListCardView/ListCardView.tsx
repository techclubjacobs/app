import React, { Component } from 'react'
import ListCard from '../ListCard/ListCard'
import { ListCardViewContainer, ListCardGrid } from './ListCardViewStyles'

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

class ListCardView extends Component<{}, {}> {
	public render() {
		return (
			<ListCardViewContainer maxWidth={'sm'}>
				<ListCardGrid container spacing={2}>
          {
            people.map(person => (
              <ListCardGrid item key={person.email} xs={12}>
								<ListCard person={person}/>
							</ListCardGrid>
						))
					}
				</ListCardGrid>
			</ListCardViewContainer>
		);
	}
}

export default ListCardView;