import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsData = [
  {
    id: '1',
    title: 'Using React Router',
    date: '2018-09-27T11:00:00+00:00',
    category: 'culture',
    description:
      'React Router is the standard routing library for React. It keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.',
    city: 'Kansas City',
    venue: "Mercedes Associates conference room",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'MySQL as back end for React app',
    date: '2018-08-18T14:00:00+00:00',
    category: 'drinks',
    description:
      'Node.js and MySQL is one of the important bindings used for web applications. MySQL is one of the most popular open source databases. There are a couple of Javascript drivers for operations with MySQL.',
    city: 'London, UK',
    venue: 'Metro Tech Forum',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  },
  {
    id: '3',
    title: 'Blockchain technology in the pet food industry',
    date: '2018-10-18T14:00:00+00:00',
    category: 'drinks',
    description:
      'Blockchain provides proof of pet food ingredient claims and quality by essentially telling a brand’s story in a more credible way.',
    city: 'London, UK',
    venue: 'Metro Tech Forum',
    hostedBy: 'Tark',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]



class EventDashboard extends Component {
      state = {
        events : eventsData,
       isOpen: false
      };

  handleFormOpen = () => {
    this.setState({
     isOpen : true
   });
  };

  handleCancel = () => {
    this.setState({
     isOpen : false
   });
  };

  render() {
    const justForFun = 'maxxima software';
    return (
      <div> 
         <h2>{justForFun}</h2>
       
      <Grid>    
        <Grid.Column width={10}>
            <EventList events={this.state.events}/>  
        </Grid.Column>       
        <Grid.Column width={6}>
        <Button onClick={this.handleFormOpen} positive content="Create event"/>
        {this.state.isOpen && <EventForm handleCancel={this.handleCancel}/> }
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

export default EventDashboard