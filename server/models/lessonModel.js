import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
   title: { type: String, required: true },
   author: { type: String, required: true },
   text: { type: Array, default: ["","","","", "","","","", "","","","",  "","","",""] },
   createdAt: {
   type: String,
   default: new Date().toISOString,
  },

});

const Lessons = mongoose.model("lesson", lessonSchema)

export default Lessons; 