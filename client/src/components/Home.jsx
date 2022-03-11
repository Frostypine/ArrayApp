//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import React from 'react'
import arraypic from '../pics/arrayimg1.png'; 
import {Link} from 'react-router-dom';

 const Home = () => {
  return (
    <div>
      {/* <Link to="/user/login">  */}
      <Link to="/options"> 
  <img src={arraypic} alt="array logo" className='arrayLogo'/>
      </Link>
      </div>
  )
}


export default Home;