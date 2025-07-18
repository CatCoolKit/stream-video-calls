import express from "express";
import {
  acceptFriendRequest,
  getFriendRequests,
  getMyFriends,
  getOutgoingRequests,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingRequests);

export default router;
