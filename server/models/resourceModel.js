import mongoose from "mongoose";

const resourceSchema = mongoose.Schema({
   id: {type: Number, default: 0},
   name: { type: String, required: true },
   for: { type: String, default: "" },
   url: { type: String, default: "" },

});

const Lessons = mongoose.model("resource", resourceSchema)

export default Resource; 