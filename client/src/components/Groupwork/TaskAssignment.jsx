import './Groupwork.css'
import React from 'react'
//import {Container, Row, Col} from 'react-bootstrap';
import MemberBox from './MemberBox';
import TaskBox from './TaskBox'; 
import NewTask from './NewTask'; 
//import { useSelector } from "react-redux";
//import { selectLessons } from "../../state/lessonSlice";

//import taskData from './TaskData';


 function TaskAssignment() {

  return (
    <div className='taskAssignment'>
       Task Assignment: 
      <MemberBox/>
      <TaskBox/>
      <NewTask/>
    </div>
  )
}
export default TaskAssignment; 