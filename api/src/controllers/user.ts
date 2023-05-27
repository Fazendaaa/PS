import { Request, Response, NextFunction } from "express";
import { getUser } from "../models/user";

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = { foo: "getid" };

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = { foo: "getusers" };

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const insertUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = { foo: "insertuser" };

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const updateUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = { foo: "updateuser" };

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

export const deleteUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = { foo: "deleteuser" };

  if (null !== user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};
