import mongoose from "mongoose";
import Tasks from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postTask = async (req, res) => {
  const task = req.body;
 
    const newTask = new Tasks({
      ...task,
      createdAt: new Date().toISOString(),
    });
    try {
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(409).json({ message: error });
    }

};

export const patchTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);
  const updatedTask = req.body;
  const task = await Tasks.findByIdAndUpdate(id, updatedTask, { new: true });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);
  await Tasks.findByIdAndRemove(id);
  res.json({ message: "task deleted successfully" });
};
