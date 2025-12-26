import { Router } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../../controller/taskController/taskController";

const router = Router();

// GET all tasks / POST new task
router.route("/").get(getAllTasks).post(createTask);

// GET, PUT, DELETE a single task by ID
router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);

export default router;
