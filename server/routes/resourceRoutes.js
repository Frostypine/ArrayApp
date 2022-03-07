import express from "express";
import {
  getResource,
  postResource,
  patchResource,
  deleteResource,
} from "../controllers/lessonControllers.js";

const router = express.Router()

router.get   ('/',    getResources)
router.post  ('/',    postResource)
router.patch ('/:id', patchResource)
router.delete('/:id', deleteResource)

export default router
