import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();

// app.get("/api/auth/signup", (req, res) => {
//   res.send("Signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//   res.send("Login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//   res.send("Logout route");
// });

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../FrontEnd/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../FrontEnd", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
