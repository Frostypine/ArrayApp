import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calendar.css';

import Calendar from 'react-calendar';
import calmap from './CalMap';


 function AppCalendar() {
  const [date, setDate] = useState(new Date());

 console.log(date.toDateString())

  return (
    <Container fluid className='calendar-app'>
    <h1 className='text-center'>Calendar</h1>

   <div className='calendar-container mx-auto'>
      <Calendar onChange={setDate} value={date} />
    </div>
    <p className='text-center dateBox'>
      {/* <span className='bold'>Selected Date:</span>{' '} */}
      {date.toDateString()}
      <br/>
      {calmap.get(date.toDateString())}
  
    </p>
  </Container>
  )
}
export default AppCalendar; 