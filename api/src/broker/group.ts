import { Request, Response, NextFunction } from "express";
import {
  getGroupsController,
  insertGroupController,
} from "../controllers/group";

export const getGroupsAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getGroupsController();

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const insertGroupAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const user = await insertGroupController(body);

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};
