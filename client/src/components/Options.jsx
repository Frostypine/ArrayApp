//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import React from 'react'
import './Components.css';
import {Link} from 'react-router-dom';
import { Container,  Card } from 'react-bootstrap';
import arraypic from '../pics/arrayimg2.png'

function Options() {
 
    return (
      <div>               
        <a href="https://www.arrayschool.com/">
  <img src={arraypic} alt="array logo" className='arrayPic'/>
      </a>
        <Container className='Options'>
 
       {/* <Link to="/">  
        <Card className='card home'>
      <Card.Text>     Home</Card.Text>
        </Card>
      </Link> <br/>*/}
       <Link to="/lessons">  
           <Card style={{background: 'wheat', border: `6px solid red` }}className='card Lessons'>
           <Card.Text> Lessons</Card.Text>  
          </Card>
          </Link>
          &nbsp;&nbsp;

          <Link to="/assignments">  
         <Card style={{background: 'wheat', border: `6px solid yellow` }}className='card Resources'>
         <Card.Text> Assignments</Card.Text>    
          </Card>
          </Link>
          &nbsp;&nbsp;
  

         <Link to="/resources">
          <Card style={{background: 'wheat', border: `6px solid green` }} className='card Assignments'>
          <Card.Text> Resources </Card.Text>
          </Card>
          </Link>
          &nbsp;&nbsp;
          
       <Link to="/groupwork">   
        <Card style={{background: 'wheat', border: `6px solid blue` }} className='card Groupwork'>
        <Card.Text> Groupwork</Card.Text>  
          </Card>
          </Link>
          &nbsp;&nbsp;
    
    </Container>
    </div>
    )
  }


export default Options; 