import { insertUserController } from "./controllers/user";
import { server } from "./server";
import { Request, Response } from "express";

const checkAdmin = (user: string, password: string) =>
  insertUserController({
    password,
    isAdmin: true,
    name: user,
    birthday: "",
    mobile: user,
  });
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
