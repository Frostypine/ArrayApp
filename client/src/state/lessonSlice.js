import { createSlice } from "@reduxjs/toolkit";
//import { updateLesson } from "../api/lessonAPI";

let lessons = [];

let localLessonInfo = JSON.parse(localStorage.getItem("localLessonInfo"));

if (!localLessonInfo) {
  localLessonInfo = {
    loggedIn: false,
  };
  localStorage.setItem("localLessonInfo", JSON.stringify(localLessonInfo));
}

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState: {
    lessons,
    localLessonInfo,
  },
  reducers: {
    allLessons: (state, action) => {
      state.lessons = action.payload;
    },
    
    addLesson: (state, action) => {
      state.lessons.push(action.payload);
      if (action.payload.password === "") {
        state.localLessonInfo = { lesson_id: action.payload._id, loggedIn: false };
      }
      if (action.payload.password !== "") {
        state.localLessonInfo = {
          lesson_id: action.payload._id,
          loggedIn: true,
        };
      }
      localStorage.setItem(
        "localLessonInfo",
        JSON.stringify(state.localLessonInfo)
      );
    },
    editLesson: (state, action) => { },
    removeLesson: (state, action) => {
      state.lessons.splice(
        state.lessons.findIndex((e) => e._id === action.payload, 1)
      );
      localStorage.setItem("lessons", JSON.stringify(state.lessons));
    },
    // editLessonRead: (state, action) => {
    //   const index = state.lessons.findIndex(
    //     (lesson) => lesson._id === action.payload._id
    //   );
    //   state.lessons[index].read = action.payload.read;
    // },
    
    // editLessonPicture: (state, action) => {
    //   const index = state.lessons.findIndex(
    //     (lesson) => lesson._id === action.payload._id
    //   );
    //   state.lessons[index].avatar = action.payload.picture;
    // },

    //find a way to edit array or turn array into strings and have multiple 
    editLessonText: (state, action) => {
        const index = state.lessons.findIndex(
          (lesson) => lesson._id === action.payload._id
        );
        state.lessons[index].text = action.payload.text;
      },
    },
});

export const {
  allLessons,
  addLesson,
  editLesson,
  removeLesson,
  //editLessonRead,
  editLessonText,
  //editLessonPicture,
} = lessonsSlice.actions;

export const selectLessons = (state) => state.lessons.lessons;
export const selectLocalLessonInfo = (state) => state.lessons.localLessonInfo;

export default lessonsSlice.reducer;
