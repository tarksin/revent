import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

class EventListItem extends Component {
  render() {
    const {event, onEventOpen, deleteEvent} = this.props;
    return (
      <div>
        <Segment.Group>
            <Segment>
            <Item.Group>
                <Item>
                <Item.Image 
                  size="tiny" 
                  circular 
                  src={event.hostPhotoURL} />
                <Item.Content>
                    <Item.Header as="a">{event.title}</Item.Header>
                    <Item.Description>
                    Hosted by <a>{event.hostedBy}</a>
                    </Item.Description>
                </Item.Content>
                </Item>
            </Item.Group>
            </Segment>
            <Segment>
            <span>
                <Icon name="clock" /> {event.date} |
                <Icon name="marker" /> {event.venue}
            </span>
            </Segment>
            <Segment secondary>
            <List horizontal>
              {
                event.attendees &&
                event.attendees.map((each) => (
                    <EventListAttendee attendee={each} key={each.id}/>
                ))

            }


            </List>
            </Segment>
            <Segment clearing>
            <span>{event.description}</span>
            <Button as="a"
                    onClick={deleteEvent(event.id)} color="red" floated="right" content="Delete" />
            <Button as="a"
                    onClick={onEventOpen(event)} color="teal" floated="right" content="View" />
            </Segment>
        </Segment.Group>  


      </div>
    )
  }
}


export default EventListItem