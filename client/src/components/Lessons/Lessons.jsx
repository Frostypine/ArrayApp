import React from 'react';
import '../Components.css'; 
import NewLesson from './NewLesson';
import LessonList from './LessonList';
//import { useDispatch, useSelector } from "react-redux";
//import { selectLessons } from "../../state/lessonSlice";
//import {Link} from 'react-router-dom';
//import { useEffect } from 'react';
function Lessons () {
    return ( 
    <div className="lessons"
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