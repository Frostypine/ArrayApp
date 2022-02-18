import React from 'react'


import './Components.css';
import {Link} from 'react-router-dom';
import { Container,  Card } from 'react-bootstrap';
import arraypic from '../pics/arrayimg2.png'

function Options() {
 
    return (
        <Container className='Options'>
                <Link to="/">
  <img src={arraypic} alt="array logo" className='arrayPic'/>
      </Link>
       {/* <Link to="/">  
        <Card className='card home'>
      <Card.Text>     Home</Card.Text>
        </Card>
      </Link> <br/>*/}
       <Link to="/lessons">  
           <Card className='card lessons'>
           <Card.Text> Lessons</Card.Text>  
          </Card>
          </Link>
          <br/> 
          <Link to="/resources">  
         <Card className='card resources'>
         <Card.Text> Resources</Card.Text>    
          </Card>
          </Link>
          <br/>
  

         <Link to="/assignments">
          <Card className='card assignments'>
          <Card.Text>  Assignments</Card.Text>
          </Card>
          </Link>
          <br/>
          
       <Link to="/groupwork">   
        <Card className='card groupwork'>
        <Card.Text> Groupwork</Card.Text>  
          </Card>
          </Link>
          <br/>
    
    </Container>
    )
  }


export default Options; 