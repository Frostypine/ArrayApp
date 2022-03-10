import ReactTooltip from 'react-tooltip';

import React from 'react';
import { useSelector } from "react-redux";
import { selectTasks } from "../../state/taskSlice";

import './Groupwork.css'; 


 function TaskList() {
 const Tasks = useSelector(selectTasks);

  return (
    <div className='task-list'>
    



      {Tasks.map((data, i)=> {
        return (
          <div
          key={`task${i}`}
          > 

          </div> 
       );
      })}

      </div>
  );
}

export default TaskList; 