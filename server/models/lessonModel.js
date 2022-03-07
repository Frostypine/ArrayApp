import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
   id: {type: Number, default: 0},
   title: { type: String, required: true },
   author: { type: String, required: true, default: "Array" },
   //read: {type: Boolean, default: false},
   text: { type: String, default: "" },
  // text: { type: Array, default: ["","","","", "","","","", "","","","",  "","","",""] },
   createdAt: {
   type: String,
   default: new Date().toISOString,
  },
  // picture: {
  //   type: String,
  //   default:
  //     "",
  //   limit: "50mb",
  // },
});

const Lessons = mongoose.model("lesson", lessonSchema)

export default Lessons; 