import asyncHandler from "express-async-handler";

import Message from "../models/messageModel.js";
import User from "../models/userModel.js";

// @desc    Create a message
// @route    POST /api/Messages/
// @access    private
export const createMessage = asyncHandler(async (req, res, next) => {
  req.body.from = req.user.id;
  const { to, subject, content } = req.body;

  // validate request
  if (!to || !subject || !content) {
    res.status(400);
    return next(new Error("Please provide all the necessary entries"));
  }

  // find user by email
  const userTo = await User.findOne({ email: to });
  if (!userTo) {
    res.status(400);
    return next(new Error("The email you entered does not exist"));
  }

  // create message
  const message = await Message.create({
    from: req.user.id,
    to: userTo._id,
    subject,
    content,
  });

  // send response
  res.status(201).json({
    _id: message._id,
    from: message.from,
    to: message.to,
    subject: message.subject,
    content: message.content,
  });
});

// @desc    get user messages
// @route    get /api/Messages/:user_id
// @access    private
export const getMessages = asyncHandler(async (req, res, next) => {
  const { user_id } = req.params;

  // check for user id
  if (!user_id) {
    res.status(400);
    return next(new Error("Error, no user"));
  }

  // find messages and sort by date
  const messages = await Message.find({ to: user_id }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    messages,
  });
});

// @desc    get a message by id
// @route    get /api/Messages/:user_id/:message_id
// @access    private
export const getMessage = asyncHandler(async (req, res, next) => {
  const { message_id } = req.params;

  // check for the message id
  if (!message_id) {
    res.status(400);
    return next(new Error("Error, no message"));
  }

  // find the message and populate the sender
  const message = await Message.findById(message_id).populate("from");

  // check if the owner of the message is the user
  // you can only view the message if you are the sender or the receiver
  if (
    message.from.toString() !== req.user.id &&
    message.to.toString() !== req.user.id
  ) {
    res.status(401);
    return next(new Error("You are not authorized to view this message"));
  }

  // update isRead to true
  await Message.findByIdAndUpdate(message_id, { isRead: true });

  res.status(200).json({
    _id: message._id,
    from: message.from.name,
    to: message.to,
    subject: message.subject,
    content: message.content,
  });
});
