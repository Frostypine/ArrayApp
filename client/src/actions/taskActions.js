import * as api from "../api/taskAPI.js";
import {
  allTasks,
  addTask,
  removeTask,

} from "../state/taskSlice.js";

export const getTasks = () => async (dispatch) => {
  
  try {
    const { data } = await api.readTasks();
  // console.log(data)
    dispatch(allTasks(data));
  } catch (error) {
    console.log(error);
  }
};

export const postTask = (newTask) => async (dispatch) => {
  console.log(newTask)
  try {
    const { data } = await api.createTask(newTask);
    dispatch(addTask(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchTask = (id, updatedTask) => async (dispatch) => {
    try {
        await api.updateTask(id, updatedTask)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id)
        dispatch(removeTask(id))
    } catch (error) {
        console.log(error)
    }
}