import express from "express";
import {
  getResources,
  postResource,
  patchResource,
  deleteResource,
} from "../controllers/ResourceControllers.js";

const router = express.Router()

router.get   ('/',    getResources)
router.post  ('/',    postResource)
router.patch ('/:id', patchResource)
router.delete('/:id', deleteResource)

export default router
