import { Router } from "express";
import {
  getProjects,
  createProject,
} from "../../controller/projectController/projectController";

const router = Router();

// GET all projects / POST new project
router.route("/").get(getProjects).post(createProject);

export default router;
