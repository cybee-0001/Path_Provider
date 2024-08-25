import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const options = {
  httpOnly: true,
  secure: false, // Set to true if using HTTPS
  sameSite: "strict", // or 'None' if you need to handle cross-origin
  domain: "localhost",
  path: "/",
};

//! Generate access token for user
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // Save the refresh token in the database
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log("error from generateAccess: ", error);
    throw new ApiError(500, "Something went wrong while generating access token");
  }
};

//! Register a new user
const userRegister = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if ([username, email, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required , Some of them are empty");
    }

    const existedUser = await User.findOne({
      email,
    });

    if (existedUser) {
      return res
        .status(404)
        .json(new ApiResponse(409, "User, You already exist !! Why again ?", existedUser));
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering the user");
    }

    res
      .status(201)
      .json(new ApiResponse(200, "User registered Successfully", { data: "All Green !! 👍" }));
  } catch (error) {
    console.log("error from register: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

//! Sign In a user
const userLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "Email and Password are required");
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(200, "User Logged In successfully", {
          loggedInUser,
          accessToken,
          refreshToken,
        })
      );
  } catch (error) {
    console.log("error from Log in : ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

//! Logout User
const logoutUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          refreshToken: 1, // this removes the field from document
        },
      },
      {
        new: true,
      }
    );

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, "User logged Out", {}));
  } catch (error) {
    console.log("error from Log Out : ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

//! Refresh Access Token - Get new access token using refresh token
const refreshAccessToken = async (req, res) => {
  try {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
      throw new ApiError(401, "unauthorized request");
    }

    try {
      const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

      const user = await User.findById(decodedToken?._id);

      if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }

      if (incomingRefreshToken !== user?.refreshToken) {
        throw new ApiError(401, "Refresh token is expired or used");
      }

      const { accessToken, newRefreshToken } = await generateAccessAndRefreshTokens(user._id);

      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
          new ApiResponse(
            200,
            { accessToken, refreshToken: newRefreshToken },
            "Access token refreshed"
          )
        );
    } catch (error) {
      throw new ApiError(401, error?.message || "Invalid refresh token");
    }
  } catch (error) {
    console.log("error from refreshAccess Token creating time : ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

//! Get current user
const getCurrentUser = async (req, res) => {
  try {
    return res.status(200).json(new ApiResponse(200, req.user, "User fetched successfully"));
  } catch (error) {
    console.log("error from get User Info : ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};
export { userRegister, userLogIn, logoutUser, refreshAccessToken, getCurrentUser };
