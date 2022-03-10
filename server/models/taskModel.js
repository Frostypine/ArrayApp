import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
   id: {type: Number, default: 0},
   name: { type: String, required: true },
   info: { type: String, default: "" },
   duedate: { type: String, default: "" },

});

const Tasks = mongoose.model("task", taskSchema)

export default Tasks; 