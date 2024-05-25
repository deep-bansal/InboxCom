import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import Message from "../models/messageModel.js";

import generateToken from "../utils/generateWebToken.js";

// @desc    Register user
// @route    POST /api/users
// @access    Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  // validate request
  if (!name || !email || !password) {
    res.status(400);
    return next(new Error("Please provide a name, an email and a password"));
  }

  // Check if user already exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    return next(new Error("Email already exists"));
  }

  // Create user and generate token
  const newUser = await User.create({
    name,
    email,
    password,
  });

  const token = generateToken(newUser._id);

  //send welcome messages to new members
  const welcomeMessage = `Welcome ${
    newUser.name.split(" ")[0]
  }!\nYou have successfully registered.\nPlease check your inbox for more information.`;

  await Message.create({
    to: newUser._id,
    from: "61ec7296bce64e07209bbe40",
    subject: "Welcome to InboxCOM",
    content: welcomeMessage,
  });

  const IntroductionMessage = `Hi ${
    newUser.name.split(" ")[0]
  }!\nWe hope you are doing well.\nWe are here to help you get started with InboxCOM.\nYou can send and receive messages with your friends.\nWe hope you enjoy using InboxCOM.`;

  await Message.create({
    to: newUser._id,
    from: "61ec7296bce64e07209bbe40",
    subject: "Introduction",
    content: IntroductionMessage,
  });

  // send response
  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  });
});

// @desc    Find and Auth users
// @route    post /api/users/login
// @access    Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // validate request
  if (!email || !password) {
    res.status(400);
    return next(new Error("Please provide an email and password"));
  }
  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    return next(new Error("Invalid email"));
  }

  // match passwords
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(400);
    return next(new Error("Invalid password"));
  }

  // generate token
  const token = generateToken(user._id);

  // send response
  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  });
});
