import express from "express";
import cors from "cors";

import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// Global Error Handler
// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === "production" ? null : err.stack,
//   });
// });

// Start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(
      `🚀 Server running in ${process.env.NODE_ENV} mode on http://localhost:${port}`,
    );
  });
});
