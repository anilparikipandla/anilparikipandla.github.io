import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { MdCircle } from 'react-icons/md';
import classes from './CreateEvent.module.css';
const CreateEventForm = () => {
  return (
    <Form>
      <div className={classes.createEventForm}>
        <InputGroup className='mb-3'>
          <Form.Control
            type='text'
            name='eventTitle'
            id='eventTitle'
            placeholder='Add Event Title'
            className={classes.eventTitle}
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <Form.Label htmlFor='eventStartTime' className={classes.eventLabel}>
            Schedule:
          </Form.Label>
          <Form.Select
            name='eventDate'
            id='eventDate'
            className={classes.eventDate}
          >
            <option value='1'>Monday, Today</option>
            <option value='2'>Tuesday, Tomorrow</option>
          </Form.Select>
          <Form.Select name='eventStartTime' id='eventStartTime'>
            <option value='0900AM'>09:00 AM</option>
            <option value='1000AM'>10:00 AM</option>
            <option value='1100AM'>11:00 AM</option>
            <option value='1200PM'>12:00 PM</option>
            <option value='0100PM'>01:00 PM</option>
            <option value='0200PM'>02:00 PM</option>
            <option value='0300PM'>03:00 PM</option>
            <option value='0400PM'>04:00 PM</option>
          </Form.Select>
          <span className={classes.eventLabel}> to </span>
          <Form.Select name='eventEndTime' id='eventEndTime'>
            <option value='0900AM'>09:00 AM</option>
            <option value='1000AM'>10:00 AM</option>
            <option value='1100AM'>11:00 AM</option>
            <option value='1200PM'>12:00 PM</option>
            <option value='0100PM'>01:00 PM</option>
            <option value='0200PM'>02:00 PM</option>
            <option value='0300PM'>03:00 PM</option>
            <option value='0400PM'>04:00 PM</option>
          </Form.Select>
        </InputGroup>
        <Form.Group className='eventDescription'>
          <Form.Control
            as='textarea'
            name='eventDescription'
            id='eventDescription'
            placeholder='Event description'
            className={classes.eventDescription}
          />
        </Form.Group>
        <Form.Group className={classes.colorContainer}>
          <div className={classes.eventColorCircle}></div>
          <div className={classes.eventGreenColorCircle}></div>
          <div className={classes.eventBlueColorCircle}></div>
          <div className={classes.eventYellowColorCircle}></div>
          <div className={classes.eventOrangeColorCircle}></div>
          <MdCircle size={30} className={classes.fillColor}></MdCircle>
        </Form.Group>
      </div>
    </Form>
  );
};

export default CreateEventForm;
