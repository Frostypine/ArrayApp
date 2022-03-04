import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/api/resources"})

//Resources CRUD
export const createResource = (newResource) => API.post('/', newResource)
export const readResources = () => API.get('/')
export const updateResource = (id, updatedResource) => API.patch(`/${id}`, updatedResource)
export const deleteResource = (id) => API.delete(`/${id}`)