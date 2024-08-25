import mongoose, { Schema } from "mongoose";

const contentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tasks: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
        completed: { type: Boolean, default: false },
      },
    ],
    completeTask_count: {
      type: Number,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Contents = mongoose.model("Contents", contentSchema);
