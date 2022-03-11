import axios from "axios"
//gmAPI.js
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
const API = axios.create({baseURL: "http://localhost:5000/api/gms"})

//GMs CRUD
export const createGM = (newGM) => API.post('/', newGM)
export const readGMs = () => API.get('/')
export const updateGM = (id, updatedGM) => API.patch(`/${id}`, updatedGM)
export const deleteGM = (id) => API.delete(`/${id}`)