import express from "express";
import dotenv from "dotenv";

import userRoute from "./route/userRoute/userRoute";
import taskRoute from "./route/taskRoute/taskRoute";
import projectRoute from "./route/projectRoute/projectRoute";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/users", userRoute);
app.use("/tasks", taskRoute);
app.use("/projects", projectRoute);

export default app;
