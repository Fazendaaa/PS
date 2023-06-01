import { insertUserController } from "./controllers/user";
import { User } from "./models/user";
import { server } from "./server";
import { Request, Response } from "express";

const checkAdmin = (name: string, password: string) => {
  const user = new User();

  user.name = name;
  user.password = password;
  user.isAdmin = true;
  user.birthday = "";
  user.mobile = name;

  return insertUserController(user);
};
const port = 80;

server.get("/", (req: Request, res: Response) => {
  res.send("PS API");
});

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

if (
  undefined !== process.env.ADMIN_USERNAME &&
  undefined !== process.env.ADMIN_PASSWORD
) {
  checkAdmin(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
}
