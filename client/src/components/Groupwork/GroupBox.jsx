import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';


//import './gwScript.js';
import './Groupwork.css'

 function GroupBox() {

let groupMemberArr = ["Alex", "Anthony", "Bowen", "Dustin"];//, "Ethan", "Katie", "Shawn", "Steve", "Taylor", "Trevor", "Rison", "Solomon"];



// drag and drop functions
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
 //e.dataTransfer.setData("text", e.target.id);
  //e.dataTransfer.setData("name", e.target.text);
}

function drop(e) {
  e.preventDefault();
 // pillDrop(e);
}



  return (
    <div className='GroupBox'>
        {/* <script src="gwScript.js"></script> */}
        GroupBox
<div className='groupMember-list'>
{groupMemberArr.map((member,i) => (

<p key={i}
draggable='true'
onDragStart={drag(e)}
//id={`drag${i}`}
>{member} <br/></p>
//console.log(member)
) ) }
</div>
        <Container 
        
        >
    <Row>
          <Col > task 1</Col>  <Col>task 2</Col>  <Col>task 3</Col> <Col>task 4</Col>
    </Row>
    <Row>
         <Col id='task-1'
         >
         <div
         style={{
           height: '10rem',
           width: '10rem',
           border: `6px solid blue` ,
         }}
          onDrop={drop(e) } onDragOver={allowDrop(e)}
         >1</div></Col>  <Col id='task-2'>2</Col>  <Col id='task-2' >3</Col> <Col id='task-4'>4</Col>
    </Row>
    <Row>

    </Row>
        </Container>
        
    </div>
  )
}
export default GroupBox; 