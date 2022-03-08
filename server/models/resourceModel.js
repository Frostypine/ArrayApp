import mongoose from "mongoose";

const resourceSchema = mongoose.Schema({
   id: {type: Number, default: 0},
   name: { type: String, required: true },
   whatfor: { type: String, default: "" },
   url: { type: String, default: "" },

});

const Resources = mongoose.model("resource", resourceSchema)

export default Resources; 