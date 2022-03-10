import { createSlice } from "@reduxjs/toolkit";


let tasks = [];

let localTaskInfo = JSON.parse(localStorage.getItem("localTaskInfo"));

if (!localTaskInfo) {
  localTaskInfo = {
    loggedIn: false,
  };
  localStorage.setItem("localTaskInfo", JSON.stringify(localTaskInfo));
}

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks,
    localTaskInfo,
  },
  reducers: {
    allTasks: (state, action) => {
      state.tasks = action.payload;
    //  console.log(action.payload)
    },
    
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      if (action.payload.password === "") {
        state.localTaskInfo = { task_id: action.payload._id, loggedIn: false };
      }
      if (action.payload.password !== "") {
        state.localTaskInfo = {
          task_id: action.payload._id,
          loggedIn: true,
        };
      }
      localStorage.setItem(
        "localTaskInfo",
        JSON.stringify(state.localTaskInfo)
      );
    },
    editTask: (state, action) => { },
    removeTask: (state, action) => {
      state.tasks.splice(
        state.tasks.findIndex((e) => e._id === action.payload, 1)
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
   
    editTaskText: (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task._id === action.payload._id
        );
        state.tasks[index].text = action.payload.text;
      },
    },
});

export const {
  allTasks,
  addTask,
  editTask,
  removeTask,
  editTaskText,

} = taskSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectLocalTaskInfo = (state) => state.tasks.localTaskInfo;

export default taskSlice.reducer;
