import React,{ useEffect } from 'react';
import '../Components.css'; 
import NewLesson from './NewLesson';
import {Link} from 'react-router-dom';
import LessonList from './LessonList';
//import { useDispatch, useSelector } from "react-redux";
//import { selectLessons } from "../../state/lessonSlice";

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
             <NewLesson/>
                  <LessonList/>

             </div>    

    </div>
        );
}

export default Lessons;