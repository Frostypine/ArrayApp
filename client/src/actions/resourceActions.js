import * as api from "../api/resourceAPI.js";
import {
  allResources,
  addResource,
  removeResource,

} from "../state/resourceSlice.js";

export const getResources = () => async (dispatch) => {
  
  try {
    const { data } = await api.readResources();
  // console.log(data)

    dispatch(allResources(data));
  } catch (error) {
    console.log(error);
  }
};

export const postResource = (newResource) => async (dispatch) => {
 // console.log(newResource)
  try {
    const { data } = await api.createResource(newResource);
    dispatch(addResource(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchResource = (id, updatedResource) => async (dispatch) => {
    try {
        await api.updateResource(id, updatedResource)
    } catch (error) {
        console.log(error)
    }
}

export const deleteResource = (id) => async (dispatch) => {
    try {
        await api.deleteResource(id)
        dispatch(removeResource(id))
    } catch (error) {
        console.log(error)
    }
}