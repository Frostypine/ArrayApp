import React from 'react'
import '../Components.css'; 


function Schedule() {
    return (
<div className='scheduleBox'>
     <h1>  Daily Schedule </h1>
       <b> Monday-Thursday </b> 
<ul>
<li>9:00-9:20 Warm Up</li>
<li>9:30-9:40 Stand up</li>
<li>9:40-9:50 10 minute break</li>
<li>9:50-10:50 Lecture pt. 1</li>
<li>10:50-11:00 10 minute break</li>
<li>11:00-12:00 Lecture pt. 2</li>
<li>12:00-1:30 Lunch break</li>
<li>1:30-2:00 Group Excercise</li>
<li>2:00-4:00 Assignment introduction</li>
<li>4:00-4:30 Assignment Debrief</li>

<b>Friday </b>
<li>9:00-9:20 Warm Up</li>
<li>9:30-9:40 Stand Up</li>
<li>9:00-12:00 Project time</li>
<li>12:00-1:30  Lunch Break</li>
<li>1:30-2:00 Group Excercise</li>
<li>2:00-4:00  Project Time </li>
<li>4:00-4:30 Assignment Debrief</li>

<b>Weekend</b>
<li>Freetime/break</li>
</ul>
      </div>
    )
}
export default Schedule;  