import React, { Component } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectLessons } from "../../state/lessonSlice";
import {useParams} from "react-router-dom"; 
import { useEffect } from 'react';
import { getLessons } from '../../actions/lessonActions';

// const Lessons = [
//     {
//       title: "Preparation",
//       id: 0,
//       text: "content about preparation",
//     },
//     {
//       title: "Design and Prototyping",
//       id: 1,
//       text: "content about Design and Prototyping "
//     }
//   ]
function LessonPage () {
    const {lessonid} = useParams();
    const dispatch = useDispatch(); 
    //console.log(lessonid)
   const Lessons = useSelector(selectLessons);
   // currentLessonInfo = useSelector(selectCurrentLessonInfo)
   // location = useLocation()
   //const lessonInfo 


    return (
        <div>
      <div>{Lessons[lessonid].title}</div>
      <div>{Lessons[lessonid].text}</div>
      {/* <div>{{Lessons[lessonid].title}</div>
       <div>{lesson.author}</div>
        */}
      </div>
    )
  
}
export default LessonPage; 