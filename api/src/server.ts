import cors from "cors";
import helmet from "helmet";
import express, { Request, Response, NextFunction } from "express";
import { usersRouter } from "./routers/user";
import { groupsRouter } from "./routers/group";

export const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/users/", usersRouter);
server.use("/groups/", groupsRouter);

server.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});
