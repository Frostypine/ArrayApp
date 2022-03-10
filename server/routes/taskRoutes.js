import express from "express";
import {
  getTasks,
  postTask,
  patchTask,
  deleteTask,
} from "../controllers/taskControllers.js";

const router = express.Router()

router.get   ('/',    getTasks)
router.post  ('/',    postTask)
router.patch ('/:id', patchTask)
router.delete('/:id', deleteTask)

export default router
