import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/api/lessons"})

//Lessons CRUD
export const createLesson = (newLesson) => API.post('/', newLesson)
export const readLessons = () => API.get('/')
export const updateLesson = (id, updatedLesson) => API.patch(`/${id}`, updatedLesson)
export const deleteLesson = (id) => API.delete(`/${id}`)