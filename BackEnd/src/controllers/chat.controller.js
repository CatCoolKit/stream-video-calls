import { StreamChat } from "stream-chat";
import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const token = generateStreamToken(req.user.id);

    res.status(200).json({
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get stream token",
    });
  }
}
