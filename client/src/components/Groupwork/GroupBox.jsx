import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './gwScript.js';

 function GroupBox() {

/*
 {Tasks.map((data, i)=> {
        return (
         <Row>
            <Col
          
          key={`task${i}`}
          > 
         {`Task ${i}`}

          </Col> 
       </Row>
       <Row>
            <Col
          
          key={`task${i}`}
          > 
         {`${data.info}`}

          </Col> 
       </Row>
       );
      })}

*/

  return (
    <div className='GroupBox'>
        <script src="gwScript.js"></script>
        GroupBox

        <Container>
    <Row>
          <Col > task 1</Col>  <Col>task 2</Col>  <Col>task 3</Col> <Col>task 4</Col>
    </Row>
    <Row>
         <Col id='task-1'>1</Col>  <Col id='task-2'>2</Col>  <Col id='task-2' >3</Col> <Col id='task-4'>4</Col>
    </Row>
        </Container>
        
    </div>
  )
}
export default GroupBox; 