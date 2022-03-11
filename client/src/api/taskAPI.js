//taskAPI.js
//Capstone Project
//Array Bootcamp Fall 2021 -Spring 2022
//Katie Greenwald
import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/api/tasks"})

//Tasks CRUD
export const createTask = (newTask) => API.post('/', newTask)
export const readTasks = () => API.get('/')
export const updateTask = (id, updatedTask) => API.patch(`/${id}`, updatedTask)
export const deleteTask = (id) => API.delete(`/${id}`)