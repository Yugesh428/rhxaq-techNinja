import express from "express";
import dotenv, { config } from "dotenv";

import userRoute from "./route/userRoute/userRoute";
import taskRoute from "./route/taskRoute/taskRoute";
import projectRoute from "./route/projectRoute/projectRoute";
config();

const app = express();
app.use(express.json());

export default app;
