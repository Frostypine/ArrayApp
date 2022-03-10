import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
//import * as ReactDom from 'react-dom';

//import './gwScript.js';
import './Groupwork.css'
import taskData from './TaskData'; 
import { useDropzone } from "react-dropzone";


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
//onDragStart={drag(e)}
//id={`drag${i}`}
>{member} <br/></p>
//console.log(member)


) ) }
</div>
        <Container 
        
        >
    <Row>
    {taskData.map((data, i)=> {
        return (
          <div
          key={`task${i}`}
          > 
<Col > {data.name}</Col>
          </div> 
       
       );
      })}        
    </Row>
  
        {/*  <Col id='task-1'
         >
         <div
         style={{
           height: '10rem',
           width: '10rem',
           border: `6px solid blue` ,
         }}
          onDrop={drop(e) } onDragOver={allowDrop(e)}
         >1</div> */}
             <Row>
                {taskData.map((data, i)=> {
        return (
         
<Col id={`task-${i}`} key={`task${i}`}> {i}</Col>
            
       );
      })}
    </Row>     
    
    <Row>

    </Row>
        </Container>
        
    </div>
  )
}
export default GroupBox; 