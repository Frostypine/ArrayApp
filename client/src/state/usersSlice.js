import { createSlice } from "@reduxjs/toolkit";
//import { updateUser } from "../api/userAPI";

let users = [];

let localUserInfo = JSON.parse(localStorage.getItem("localUserInfo"));

if (!localUserInfo) {
  localUserInfo = {
    loggedIn: false,
  };
  localStorage.setItem("localUserInfo", JSON.stringify(localUserInfo));
}

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users,
    localUserInfo,
  },
  reducers: {
    allUsers: (state, action) => {
      state.users = action.payload;
    },
    loginUser: (state, action) => {
      state.localUserInfo = action.payload;
      localStorage.setItem(
        "localUserInfo",
        JSON.stringify(state.localUserInfo)
      );
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      if (action.payload.password === "") {
        state.localUserInfo = { user_id: action.payload._id, loggedIn: false };
      }
      if (action.payload.password !== "") {
        state.localUserInfo = {
          user_id: action.payload._id,
          loggedIn: true,
        };
      }
      localStorage.setItem(
        "localUserInfo",
        JSON.stringify(state.localUserInfo)
      );
    },
    editUser: (state, action) => { },
    removeUser: (state, action) => {
      state.users.splice(
        state.users.findIndex((e) => e._id === action.payload, 1)
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUserActive: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].active = action.payload.active;
     
    },
    editUserAvatar: (state, action) => {
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      state.users[index].avatar = action.payload.avatar;
    },
    },
});

export const {
  allUsers,
  loginUser,
  addUser,
  editUser,
  removeUser,
  editUserActive,
  editUserAvatar,
} = usersSlice.actions;

export const selectUsers = (state) => state.users.users;
export const selectLocalUserInfo = (state) => state.users.localUserInfo;

export default usersSlice.reducer;
