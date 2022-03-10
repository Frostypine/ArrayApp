import {configureStore } from '@reduxjs/toolkit';
import usersReducer    from '../usersSlice';
import lessonReducer   from '../lessonSlice'; 
import resourceReducer from '../resourceSlice'; 
import taskReducer     from '../taskSlice';


const store = configureStore({
   reducer:{
      users:      usersReducer,
      lessons:    lessonReducer,
      resources:  resourceReducer,
      tasks:      taskReducer,
   }

});

export default store; 