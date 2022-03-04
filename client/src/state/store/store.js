import {configureStore } from '@reduxjs/toolkit';
import usersReducer from '../usersSlice';
import lessonReducer from '../lessonSlice'; 
import resourceReducer from '../resourceSlice'; 
const store = configureStore({
   reducer:{
      users: usersReducer,
      lessons: lessonReducer,
      resources: resourceReducer,
   }

});

export default store; 