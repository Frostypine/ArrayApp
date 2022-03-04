import { createSlice } from "@reduxjs/toolkit";


let resources = [];

let localResourceInfo = JSON.parse(localStorage.getItem("localResourceInfo"));

if (!localResourceInfo) {
  localResourceInfo = {
    loggedIn: false,
  };
  localStorage.setItem("localResourceInfo", JSON.stringify(localResourceInfo));
}

export const resourceSlice = createSlice({
  name: "resources",
  initialState: {
    resources,
    localResourceInfo,
  },
  reducers: {
    allResources: (state, action) => {
      state.resources = action.payload;
      console.log(action.payload)
    },
    
    addResource: (state, action) => {
      state.resources.push(action.payload);
      if (action.payload.password === "") {
        state.localResourceInfo = { resource_id: action.payload._id, loggedIn: false };
      }
      if (action.payload.password !== "") {
        state.localResourceInfo = {
          resource_id: action.payload._id,
          loggedIn: true,
        };
      }
      localStorage.setItem(
        "localResourceInfo",
        JSON.stringify(state.localResourceInfo)
      );
    },
    editResource: (state, action) => { },
    removeResource: (state, action) => {
      state.resources.splice(
        state.resources.findIndex((e) => e._id === action.payload, 1)
      );
      localStorage.setItem("resources", JSON.stringify(state.resources));
    },
   
    editResourceText: (state, action) => {
        const index = state.resources.findIndex(
          (resource) => resource._id === action.payload._id
        );
        state.resources[index].text = action.payload.text;
      },
    },
});

export const {
  allResources,
  addResource,
  editResource,
  removeResource,
  editResourceText,

} = resourceSlice.actions;

export const selectResources = (state) => state.resources.resources;
export const selectLocalResourceInfo = (state) => state.resources.localResourceInfo;

export default resourceSlice.reducer;
