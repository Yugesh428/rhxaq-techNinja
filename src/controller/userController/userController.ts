import { Request, Response } from "express";
import User from "../../model/user/userModel";
import Task from "../../model/TaskModel/taskModel";

// Named exports for each function
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      include: [{ model: Task, as: "tasks" }],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};
