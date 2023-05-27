import express from "express";
import {
  deleteUserController,
  getUserController,
  getUsersController,
  insertUserController,
  updateUserController,
} from "../controllers/user";

export const usersRouter = express.Router();

usersRouter.get("/:id", getUserController);

usersRouter.get("/", getUsersController);

usersRouter.post("/", insertUserController);

usersRouter.patch("/:id", updateUserController);

usersRouter.delete("/:id", deleteUserController);
