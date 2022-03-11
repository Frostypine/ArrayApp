//lessonActions.js
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import * as api from "../api/lessonAPI.js";
import {
  allLessons,
  addLesson,
  removeLesson,

} from "../state/lessonSlice.js";

export const getLessons = () => async (dispatch) => {
  
  try {
    const { data } = await api.readLessons();
  // console.log(data)

    dispatch(allLessons(data));
  } catch (error) {
    console.log(error);
  }
};

export const postLesson = (newLesson) => async (dispatch) => {
 // console.log(newLesson)
  try {
    const { data } = await api.createLesson(newLesson);
    dispatch(addLesson(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchLesson = (id, updatedLesson) => async (dispatch) => {
    try {
        await api.updateLesson(id, updatedLesson)
    } catch (error) {
        console.log(error)
    }
}

export const deleteLesson = (id) => async (dispatch) => {
    try {
        await api.deleteLesson(id)
        dispatch(removeLesson(id))
    } catch (error) {
        console.log(error)
    }
}