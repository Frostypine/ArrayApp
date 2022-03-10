import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Groupwork.css'; 
import tasks from './TaskData';
//import { useSelector } from "react-redux";
//import { selectTasks } from "../../state/taskSlice";


 function TaskList() {
 //const Tasks = useSelector(selectTasks);

  return (
    <div className='task-list'>
    
    <Container 
      // className='aBox'
        >
    <Row>
              {tasks.map((data, i)=> {
        return (
          <Col
          className="task-name aBox"
          key={i}
          > 
         {data.name}
          </Col> 
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