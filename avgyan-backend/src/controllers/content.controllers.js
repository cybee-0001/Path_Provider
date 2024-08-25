import { isValidObjectId } from "mongoose";
import { Contents } from "../models/content.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createContent = async (req, res) => {
  try {
    const { title, description, tasks } = req.body;

    if ([title, description].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required , Some of them are empty");
    }
    const user = await User.findById(req.user?._id, { _id: 1 });
    if (!user) throw new ApiError(404, "User not found");

    const content = await Contents.create({
      title,
      description,
      tasks,
      owner: req.user?._id,
    });
    if (!content) throw new ApiError(500, "Your Content not created");
    res.status(201).json(new ApiResponse(200, "Content created Successfully", content));
  } catch (error) {
    console.log("error from createContent: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

export const getUserContents = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!isValidObjectId(userId)) throw new ApiError(401, "Invalid user Id");

    // find All contents of the user
    const allContents = await Contents.find({ owner: userId }).populate("tasks");
    if (!allContents) throw new ApiError(404, "Contents not found");

    res.status(200).json(new ApiResponse(200, "Contents fetched successfully", allContents));
  } catch (error) {
    console.log("error from getContents: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

export const saveProgress = async (req, res) => {
  try {
    const { contentID } = req.params;
    const { completeTask_count, taskIDs } = req.body;

    if (!isValidObjectId(contentID)) throw new ApiError(401, "Invalid content Id");

    if (!completeTask_count || !taskIDs) {
      throw new ApiError(400, "All fields are required");
    }

    // check if the task count and completed task count are same
    if (taskIDs.length < completeTask_count) {
      throw new ApiError(400, "Task count and completed task count mismatch");
    }

    // find the content
    const content = await Contents.findById(contentID);

    if (!content) {
      throw new ApiError(404, "Content not found");
    }

    // update the task completion
    await updateTaskCompletion(contentID, taskIDs, content);

    // update the completeTask_count
    const updatedContent = await Contents.findByIdAndUpdate(
      contentID,
      {
        $set: {
          completeTask_count,
        },
      },
      {
        new: true,
      }
    );

    if (!updatedContent) throw new ApiError(500, "Progress not updated");

    res.status(200).json(new ApiResponse(200, "Progress Update successfully", updatedContent));
  } catch (error) {
    console.log("error from saveProgress: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

const updateTaskCompletion = async (contentID, taskIDs, content) => {
  try {
    const taskUpdatedContent = await Contents.findByIdAndUpdate(
      contentID,
      {
        $set: {
          tasks: content.tasks.map((task) => {
            if (taskIDs.includes(task._id.toString())) {
              task.completed = true;
            }
            return task;
          }),
        },
      },
      {
        new: true,
      }
    );

    if (!taskUpdatedContent) throw new ApiError(500, "Task not updated");
  } catch (error) {
    console.log("error from Task updating: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

export const deleteContent = async (req, res) => {
  try {
    const { contentID } = req.params;
    if (!isValidObjectId(contentID)) throw new ApiError(401, "Invalid Content Id");

    const content = await Contents.findById(contentID);
    if (!content) throw new ApiError(404, "Content not found");

    const deletedContent = await Contents.findByIdAndDelete(contentID);
    if (!deletedContent) throw new ApiError(500, "Content not deleted");
    return res.status(200).json(new ApiResponse(200, contentID, "Content deleted successfully"));
  } catch (error) {
    console.log("error from Task updating: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

export const updateContent = async (req, res) => {
  try {
    const { contentID } = req.params;
    const { title, description, tasks } = req.body;

    if ([title, description].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required , Some of them are empty");
    }

    if (!isValidObjectId(contentID)) throw new ApiError(401, "Invalid Content Id");

    // find the content
    const content = await Contents.findById(contentID);

    if (!content) {
      throw new ApiError(404, "Content not found");
    }

    // update the completeTask_count
    const updatedContent = await Contents.findByIdAndUpdate(
      contentID,
      {
        $set: {
          title,
          description,
          tasks,
        },
      },
      {
        new: true,
      }
    );

    if (!updatedContent) throw new ApiError(500, "Content not updated");

    //if All ok then
    return res
      .status(200)
      .json(new ApiResponse(200, updatedContent, "Content Updated successfully"));
  } catch (error) {
    console.log("error Content updating: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};
