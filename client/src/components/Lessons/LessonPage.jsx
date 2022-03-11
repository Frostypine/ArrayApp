//LessonPage.jsx
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald


import React from 'react';
import { useSelector } from "react-redux";
import { selectLessons } from "../../state/lessonSlice";
import {useParams} from "react-router-dom"; 
import './Lesson.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LessonPage () {
    const {lessonid} = useParams();
 
   const Lessons = useSelector(selectLessons);

    return (
    <div className='Lessons'>
        <br/>
        <div
        style={{
          background: 'wheat',
           border: `6px solid red` ,
           height: '30rem',
           width: '40rem',
           paddingTop: '0rem',
           //color: 'red',
           //paddingTop: '2rem'
           }}
        >
       {/* <img src={Lessons[lessonid].pic} alt="array logo" className='lesson picture'/>*/} 
      <div className='lessonTitle'>{Lessons[lessonid].title}
      {` `} by {Lessons[lessonid].author}
      </div>
     
      <div className='lessonText'>{Lessons[lessonid].text}</div>

      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    read
  </label>
</input>
</div>
    
      </div>
  </div>
    )
  
}
export default LessonPage; 