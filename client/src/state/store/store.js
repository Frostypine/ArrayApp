import {configureStore } from '@reduxjs/toolkit';
import usersReducer from '../usersSlice';
import lessonReducer from '../lessonSlice'; 

const store = configureStore({
   reducer:{
      users: usersReducer,
      lessons: lessonReducer,
   }

});

export default store; 