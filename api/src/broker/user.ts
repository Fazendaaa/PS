import { Request, Response, NextFunction } from "express";
import {
  authUserController,
  deleteUserController,
  getUserController,
  getUsersController,
  insertUserController,
  updateUserController,
} from "../controllers/user";

export const authUserAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const user = await authUserController(body["mobile"], body["password"]);

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const getUserAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await getUserController(id);

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const getUsersAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersController();

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const insertUserAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const user = await insertUserController(body);

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const updateUserAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = updateUserController();

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const deleteUserAPIBroker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = deleteUserController();

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};
