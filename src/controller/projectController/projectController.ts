import { Request, Response } from "express";
import Project from "../../model/projectModel/projectModel";
import Task from "../../model/TaskModel/taskModel";

// Get all projects with tasks
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.findAll({
      include: [{ model: Task, as: "tasks" }],
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

// Create a new project
export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error });
  }
};
