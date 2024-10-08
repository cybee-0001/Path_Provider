import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);
