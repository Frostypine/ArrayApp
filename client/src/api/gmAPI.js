import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/api/gms"})

//GMs CRUD
export const createGM = (newGM) => API.post('/', newGM)
export const readGMs = () => API.get('/')
export const updateGM = (id, updatedGM) => API.patch(`/${id}`, updatedGM)
export const deleteGM = (id) => API.delete(`/${id}`)