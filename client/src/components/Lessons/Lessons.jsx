//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import React from 'react';
import '../Components.css'; 
import NewLesson from './NewLesson';
import LessonList from './LessonList';

function Lessons () {
    return ( 
    <div className=""
    ><br/>
        
         <div style={{
        background: 'wheat',
         border: `6px solid red` ,
         height: '30rem',
         width: '40rem',
         paddingTop: '0rem',
         color: 'red',
         }}>
             Lessons
             
                  <LessonList/><NewLesson/>

             </div>    

    </div>
        );
}

export default Lessons;