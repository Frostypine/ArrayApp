import mongoose from "mongoose";
import Lessons from "../models/lessonModel.js";

export const getLessons = async (req, res) => {
  try {
    const lessons = await Lessons.find();
    res.status(200).json(lessons);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postLesson = async (req, res) => {
  const lesson = req.body;
  //console.log(lesson)
  //const existing = await Lessons.find({ lessonname: req.body.lessonname });
  //if (existing < 1) {
    const newLesson = new Lessons({
      ...lesson,
      createdAt: new Date().toISOString(),
    });
    try {
      await newLesson.save();
      res.status(201).json(newLesson);
    } catch (error) {
      res.status(409).json({ message: error });
    }
  //}
};

export const patchLesson = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No lesson with id: ${id}`);
  const updatedLesson = req.body;
  const lesson = await Lessons.findByIdAndUpdate(id, updatedLesson, { new: true });
  res.json(lesson);
};

export const deleteLesson = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No lesson with id: ${id}`);
  await Lessons.findByIdAndRemove(id);
  res.json({ message: "lesson deleted successfully" });
};
