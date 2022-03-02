import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectLessons } from "../../state/lessonSlice";
import {Link,  useNavigate} from 'react-router-dom';
import Lessons from './Lessons';

//page access limited to role mods
//this function will take out the lessons stored in db and list them...maybe 
//functionality will also include ability to delete or edit functions?
//seperate pages for create or delete but buttons here to lead to them? 

 function LessonList() {
   const navigate = useNavigate();
 // const lessons = useSelector(selectLessons);

  return (
    <div>
      LessonList
      
      
      {Lessons.map((data, i)=> {
        return (
          <div
          className='lesson-list'
          key={`lesson${i}`}
          onClick={()=> {navigate(`lessons/${data.id}`)}}
          > 
          {`${data.title}`}
          </div> 
       );
      })}
      </div>
  );
}

export default LessonList; 