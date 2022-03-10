import express from "express";
import userRoutes from "./userRoutes.js";
import lessonRoutes from "./lessonRoutes.js";
import resourceRoutes from "./resourceRoutes.js";
//import taskRoutes from "./taskRoutes.js"

const router = express()

router.use('/users',   userRoutes)
router.use('/lessons', lessonRoutes)
router.use('/resources', resourceRoutes)
//router.use('/tasks', taskRoutes)

export default router; 