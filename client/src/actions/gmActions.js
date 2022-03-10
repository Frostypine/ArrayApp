import * as api from "../api/gmAPI.js";
import {
  allGMs,
  addGM,
  removeGM,

} from "../state/gmSlice.js";

export const getGMs = () => async (dispatch) => {
  try {
    const { data } = await api.readGMs();
    dispatch(allGMs(data));
  } catch (error) {
    console.log(error);
  }
};

export const postGM = (newGM) => async (dispatch) => {
  try {
    const { data } = await api.createGM(newGM);
    dispatch(addGM(data));
  } catch (error) {
    console.log(error);
  }
};

export const patchGM = (id, updatedGM) => async (dispatch) => {
    try {
        await api.updateGM(id, updatedGM)
    } catch (error) {
        console.log(error)
    }
}

export const deleteGM = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteGM(id)
        dispatch(removeGM(data))
    } catch (error) {
        console.log(error)
    }
}