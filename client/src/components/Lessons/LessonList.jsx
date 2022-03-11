//
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald

import React from 'react';
import { useSelector } from "react-redux";
import { selectLessons } from "../../state/lessonSlice";
//import { useDispatch } from 'react-redux';

import {Link} from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './Lesson.css'; 

//page access limited to role mods
//this function will take out the lessons stored in db and list them...maybe 
//functionality will also include ability to delete or edit functions?
//seperate pages for create or delete but buttons here to lead to them? 

 function LessonList() {
  // const navigate = useNavigate();
 const Lessons = useSelector(selectLessons);

  return (
    <div className='lesson-list'>
      

      {Lessons.map((data, i)=> {
        return (
          <div
          
          key={`lesson${i}`}
         // onClick={()=> {navigate(`lessons/${data.id}`)}}
          > 
        <Link to={`page/${data.id}`}   >
          {/* < a href={"http://localhost:3000/lessons/" + `page/${data.id}`}>  */}
          {`${data.title}`} 
          {/* </a> */}
          </Link>
          </div> 
       );
      })}

      </div>
  );
}

export default LessonList; 