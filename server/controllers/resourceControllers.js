import mongoose from "mongoose";
import Resources from "../models/resourceModel.js";

export const getResources = async (req, res) => {
  try {
    const resources = await Resources.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postResource = async (req, res) => {
  const resource = req.body;
  //console.log(resource)
  //const existing = await Resources.find({ resourcename: req.body.resourcename });
  //if (existing < 1) {
    const newResource = new Resources({
      ...resource,
      createdAt: new Date().toISOString(),
    });
    try {
      await newResource.save();
      res.status(201).json(newResource);
    } catch (error) {
      res.status(409).json({ message: error });
    }
  //}
};

export const patchResource = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No resource with id: ${id}`);
  const updatedResource = req.body;
  const resource = await Resources.findByIdAndUpdate(id, updatedResource, { new: true });
  res.json(resource);
};

export const deleteResource = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No resource with id: ${id}`);
  await Resources.findByIdAndRemove(id);
  res.json({ message: "resource deleted successfully" });
};
