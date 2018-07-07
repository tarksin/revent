import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
    state = {
      event: {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
      }
    };

    onFormSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.event);
      this.props.createEvent(this.state.event);
    };

    onInputChange = (e) => {
      const newEvent = this.state.event;
      newEvent[e.target.name] = e.target.value;
      this.setState({
        event: newEvent
      });
    };

    render() {
        const {handleCancel} = this.props;
        const {event} = this.state;

        return (
      <div>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>

            <Form.Field>
              <label>Event title</label>
              <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Event title" />
            </Form.Field>

            <Form.Field>
              <label>Event Date</label>
              <input name='date' onChange={this.onInputChange} value={event.date} placeholder="Event date"  type='date'/>
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input name='city' onChange={this.onInputChange} value={event.city} placeholder="Event city" />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Event venue" />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="hosted by" />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button onClick={handleCancel} type="button">Cancel</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default EventForm;
