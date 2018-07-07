import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
    render() {
        const {handleCancel} = this.props;
        return (
      <div>
        <Segment>
          <Form>
            <Form.Field>
              <label>Event</label>
              <input placeholder="Event name" />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input type="date" placeholder="Event date" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input placeholder="City where event is taking place" />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input placeholder="Venue of the event" />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input placeholder="Name of person hosting" />
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
