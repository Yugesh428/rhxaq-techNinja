import { Router } from "express";
import {
  getUsers,
  createUser,
} from "../../controller/userController/userController";

const router = Router();

router.route("/").get(getUsers).post(createUser);

export default router;
