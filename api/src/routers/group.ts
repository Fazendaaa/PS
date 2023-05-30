import express from "express";
import { getGroupsAPIBroker, insertGroupAPIBroker } from "../broker/group";

export const groupsRouter = express.Router();

//groupsRouter.get("/:id", getUserAPIBroker);

groupsRouter.get("/", getGroupsAPIBroker);

groupsRouter.post("/", insertGroupAPIBroker);

//groupsRouter.patch("/:id", updateUserAPIBroker);

//groupsRouter.delete("/:id", deleteUserAPIBroker);
