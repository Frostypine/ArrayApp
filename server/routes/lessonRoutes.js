import express from "express";
import {
  getLessons,
  postLesson,
  patchLesson,
  deleteLesson,
} from "../controllers/lessonControllers.js";

const router = express.Router()

router.get   ('/',    getLessons)
router.post  ('/',    postLesson)
router.patch ('/:id', patchLesson)
router.delete('/:id', deleteLesson)

export default router
