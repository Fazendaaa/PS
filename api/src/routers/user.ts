import express from "express";
import {
  authUserAPIBroker,
  deleteUserAPIBroker,
  getUserAPIBroker,
  getUsersAPIBroker,
  insertUserAPIBroker,
  updateUserAPIBroker,
} from "../broker/user";

export const usersRouter = express.Router();

usersRouter.get("/:id", getUserAPIBroker);

usersRouter.get("/", getUsersAPIBroker);

usersRouter.post("/", insertUserAPIBroker);

usersRouter.post("/auth", authUserAPIBroker);

usersRouter.patch("/:id", updateUserAPIBroker);

usersRouter.delete("/:id", deleteUserAPIBroker);
