import express from "express";
import userRoutes from "./userRoutes.js";
import lessonRoutes from "./lessonRoutes.js";
import resourceRoutes from "./resourceRoutes.js";
const router = express()

router.use('/users',   userRoutes)
router.use('/lessons', lessonRoutes)
router.use('/resources', resourceRoutes)

export default router; 