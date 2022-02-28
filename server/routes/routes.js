import express from "express"
import userRoutes from "./userRoutes.js"
import lessonRoutes from "./lessonRoutes.js"

const router = express()

router.use('/users',   userRoutes)
router.use('/lessons', lessonRoutes)

export default router