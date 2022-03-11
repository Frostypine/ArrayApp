//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Groupwork.css'; 
import { useSelector } from "react-redux";
import { selectTasks } from "../../state/taskSlice";
//import tasks from './TaskData';
import Draggable from 'react-draggable';

 function TaskList() {
 const tasks = useSelector(selectTasks);

  return (
   
       <div className='task-list'>
    
    <Container 
      className='taskBox'
        >
    <Row>
              {tasks.map((data, i)=> {
        return (
          <Draggable>
          <Col
          className="task-name aBox"
          key={i}
          > 
         {data.name}
          </Col>  
          </Draggable>
       );
      })} 
    </Row>
    <Row>
    {tasks.map((data, i)=> {
        return (
          <Col
          id={`task-${i}`}
          key={`task${i}`}
          className="aBox"
          > 
         {data.info}
          </Col> 
       );
      })} 
    </Row>

        </Container>

      </div>
      
  );
}

export default TaskList; 