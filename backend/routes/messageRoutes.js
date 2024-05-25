import express from "express";
import {
  createMessage,
  getMessages,
  getMessage,
} from "../controllers/messageController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// create a message
router.route("/").post(protect, createMessage);

// get all messages
router.get("/:user_id", protect, getMessages);

// get single message
router.get("/:user_id/:message_id", protect, getMessage);

export default router;
