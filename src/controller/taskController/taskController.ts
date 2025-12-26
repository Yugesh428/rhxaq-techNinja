import { Request, Response } from "express";
import Task from "../../model/TaskModel/taskModel";
import User from "../../model/user/userModel";
import Project from "../../model/projectModel/projectModel";

// Create Task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, userId, projectId } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      userId,
      projectId,
    });

    res.status(201).json({ message: "Task created", task });
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

// Get all tasks with user & project
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll({
      include: [
        { model: User, as: "user", attributes: ["id", "name", "email"] },
        { model: Project, as: "project", attributes: ["id", "projectName"] },
      ],
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

// Get single task by ID
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id, {
      include: [
        { model: User, as: "user" },
        { model: Project, as: "project" },
      ],
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error fetching task", error });
  }
};

// Update task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updated = await Task.update(req.body, { where: { id } });

    if (!updated[0]) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

// Delete task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Task.destroy({ where: { id } });

    if (!deleted) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};
